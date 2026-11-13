import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// Direct imports: the ../layout barrel also pulls in OpeningPositions, which loads
// Firebase Auth + Firestore up front on every blog page.
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import BreadCrumbs from "../layout/BreadCrumbs";

import { Helmet } from "react-helmet-async";
import { activeBlogSchema } from "../../utils/blogSchema";
import { linkedin, instagram } from "../../assets/images";
import ReactPlayer from "react-player";
import { formatBlogCategory } from "../../constants/blogCategories";
import { cloudinaryUrl, cloudinarySrcSet } from "../../utils/cloudinaryImage";

// prerender.js snapshots the page after Firestore loads. The blog data is saved in
// <head> as JSON so the first client render can reuse it instead of replacing the
// prerendered article with a spinner while Firestore loads (that delay was the LCP).
const PRERENDER_DATA_ID = "__blog_prerender_data__";

function readPrerenderedBlog(slug) {
  if (typeof document === "undefined") return null;
  const el = document.getElementById(PRERENDER_DATA_ID);
  if (!el) return null;
  try {
    const data = JSON.parse(el.textContent || "");
    return data && data.slug === slug && data.blog ? data : null;
  } catch {
    return null;
  }
}

const BlogDetail = () => {
  const { slug } = useParams();
  const [prerendered] = useState(() => readPrerenderedBlog(slug));
  const [blog, setBlog] = useState(() => prerendered?.blog ?? null);
  const [loading, setLoading] = useState(() => !prerendered);
  const [insights, setInsights] = useState(() => prerendered?.insights ?? []);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    // Generate Table of Contents
    const timer = setTimeout(() => {
      const articleContainer = document.querySelector('.firstSection');
      if (articleContainer) {
        const headings = articleContainer.querySelectorAll('h2');
        const tocItems = Array.from(headings).map((h2, index) => {
          if (!h2.id) {
            h2.id = `heading-${index}`;
          }
          return {
            id: h2.id,
            text: h2.textContent || h2.innerText
          };
        });
        // Filter out any completely empty headings just in case
        setToc(tocItems.filter(item => item.text && item.text.trim() !== ""));
      }
    }, 500); // increased delay and switched to textContent for production reliability
    return () => clearTimeout(timer);
  }, [blog]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let active = true;
    let idleHandle;
    // Prerendered data for this slug: show it now, refresh from Firestore quietly.
    const cached = readPrerenderedBlog(slug);
    if (cached) {
      setBlog(cached.blog);
      setInsights(cached.insights ?? []);
      setLoading(false);
    } else {
      setLoading(true);
    }

    const fetchBlogAndInsights = async () => {
      try {
        // Firestore is ~500KB of JS; load it lazily (Firestore only, no Auth) so the
        // prerendered article can render without waiting for it.
        const [{ db }, { collection, query, where, getDocs, limit }] = await Promise.all([
          import("../../firebaseDb"),
          import("firebase/firestore"),
        ]);
        if (!active || !db) return;
        // Query current blog
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!active) return;

        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data();
          // Skip the re-render when the CMS agrees with the prerendered article.
          setBlog((current) =>
            current && JSON.stringify(current) === JSON.stringify(blogData) ? current : blogData,
          );
          
          // Query 3 other blogs for related insights
          const insightsQuery = query(collection(db, "blogs"), limit(4));
          const insightsSnapshot = await getDocs(insightsQuery);
          if (!active) return;
          const rawInsights = insightsSnapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            .filter((item) => item.slug !== slug) // Exclude current blog
            .slice(0, 3); // Take top 3

          // Map insights to component format
          const formattedInsights = rawInsights.map((item) => ({
            title: item.title,
            date: `${item.category} - ${item.date}`,
            image: item.image,
            link: `/blogs/${item.slug}`
          }));
          setInsights(formattedInsights);

        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    // With prerendered data on screen, wait for idle so Firestore stays off the
    // critical path (same as /services). Otherwise fetch now: the page needs the data.
    if (cached && !window.__PRERENDERING__ && "requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(fetchBlogAndInsights, { timeout: 4000 });
    } else {
      fetchBlogAndInsights();
    }
    return () => {
      active = false;
      if (idleHandle !== undefined) window.cancelIdleCallback?.(idleHandle);
    };
  }, [slug]);

  useEffect(() => {
    if (!blog || typeof window === "undefined" || !window.__PRERENDERING__) return;
    let el = document.getElementById(PRERENDER_DATA_ID);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/json";
      el.id = PRERENDER_DATA_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({ slug, blog, insights }).replace(/</g, "\\u003c");
  }, [slug, blog, insights]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c1e] text-white">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c1e] text-white p-6 text-center font-nunito">
        <h2 className="text-3xl font-bold mb-4">Blog Article Not Found</h2>
        <p className="text-gray-400 mb-6">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blogs" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all">
          Go Back to Blogs
        </Link>
      </div>
    );
  }

  const isDestinationMarketingInTourism =
    slug === "destination-marketing-in-tourism";
  const isExperientialTourismGuide = slug === "experiential-tourism-guide";
  const isAIForTravelPlanning = slug === "ai-for-travel-planning";
  const isTravelInfluencerMarketing = slug === "travel-influencer-marketing";
  const isAirlinesMarketing = slug === "airlines-marketing";
  const isDestinationMarketingStrategies = slug === "destination-marketing-strategies";
  const isTravelMarketingTrends2027 = slug === "7-travel-marketing-trends";
  const isChoosingDestinationMarketingAgencyIndia =
    slug === "how-to-choose-a-destination-marketing-agency-in-india";
  const isCruiseBranding = slug === "cruise-branding";
  const isWhatAreFamTrips = slug === "what-are-fam-trip";
  const isFilmInducedTourism = slug === "film-induced-tourism";
  const seoTitle = isDestinationMarketingInTourism
    ? "Destination Marketing in Tourism: What It Is & Why It Matters"
    : isExperientialTourismGuide
      ? "Experiential Tourism Guide 2026 | Blog by Melange Digital"
      : isAIForTravelPlanning
        ? "How People Use AI for Travel Planning | Blog by Melange Digital"
    : isTravelInfluencerMarketing
      ? "A Guide to Travel Influencer Marketing | Blog by Melange Digital"
      : isAirlinesMarketing
        ? "Airlines Marketing and Tourism Boards: Why Joint Campaigns Outperform Solo Ones"
    : isFilmInducedTourism
      ? "Film-Induced Tourism: How Screens Drive Travel | Melange"
    : isWhatAreFamTrips
      ? "What Are Fam Trips? A Guide for Destinations | blog by Melange Digital"
      : isCruiseBranding
        ? "Cruise Branding for New Cruise Lines | Melange Digital"
        : isChoosingDestinationMarketingAgencyIndia
          ? "Choosing a Destination Marketing Agency in India | Blog by Melange"
          : isTravelMarketingTrends2027
            ? "7 Key Travel Marketing Trends 2027 | Blog by Melange Digital"
            : isDestinationMarketingStrategies
              ? "Destination Marketing Strategies by Goal | Blog by Melange Digital"
              : blog.seoTitle || blog.title;
  const seoDescription = isDestinationMarketingInTourism
    ? "Destination marketing in tourism drives real visitor spend and repeat travel, not just awareness. See what DMOs and travel brands should do next"
    : isExperientialTourismGuide
      ? "Discover how Experiential tourism is changing how travellers pick their destinations, travel trends for 2026, and what DMOs, travel brands need to do next"
      : isAIForTravelPlanning
        ? "Travellers now ask an AI chatbot where to go & when to visit before they open a search engine. Here's what's actually changed about AI for travel planning."
    : isTravelInfluencerMarketing
      ? "Travel influencer marketing drives real bookings, not just views. See how travel brands or tourism boards pick creators, measure ROI, and much more!"
      : isAirlinesMarketing
        ? "Airlines marketing works best paired with a tourism board, not run solo. See real 2026 partnerships and what to check before signing a joint campaign."
    : isFilmInducedTourism
      ? "Film-induced tourism turns viewers into travellers. See how OTT, set-jetting and reels shape bookings in India, the GCC and beyond. Read the full guide."
    : isWhatAreFamTrips
      ? "What is a fam trip in tourism? Discover what a fam trip usually involves, who to invite and how destinations turn hosted visits into bookings."
      : isCruiseBranding
        ? "Cruise branding for new and emerging cruise lines: Read how to win traveller trust, work with creators, and keep your brand clear as the fleet grows"
        : isChoosingDestinationMarketingAgencyIndia
          ? "Hiring a destination marketing agency in India? Six criteria, RFP questions and red flags for tourism boards and DMOs choosing a partner. Read the guide"
          : isTravelMarketingTrends2027
            ? "Travel marketing trends 2027: AI search, creator partnerships, hybrid FAM trips, film tourism and arrivals-led measurement. Read what to plan for."
            : isDestinationMarketingStrategies
              ? "Destination marketing strategies work best when matched to a goal. See which fits awareness, perception change, launches, new segments and recovery"
              : blog.metaDescription || blog.description || "";
  const seoImage = isDestinationMarketingInTourism
    ? "https://melangedigital.co/destination-marketing-in-tourism-og.jpg"
    : isExperientialTourismGuide
      ? "https://melangedigital.co/experiential-tourism-og.jpg"
      : isAIForTravelPlanning
        ? "https://melangedigital.co/ai-for-travel-planning-og.jpg"
    : isTravelInfluencerMarketing
      ? "https://melangedigital.co/travel-influencer-marketing-og.jpg"
      : isAirlinesMarketing
        ? "https://melangedigital.co/airlines-marketing-og.jpg"
    : isFilmInducedTourism
      ? "https://melangedigital.co/film-induced-tourism-og.jpg"
    : isWhatAreFamTrips
      ? "https://melangedigital.co/what-are-fam-trips-og.jpg"
      : isCruiseBranding
        ? "https://melangedigital.co/cruise-branding-og.jpg"
        : isChoosingDestinationMarketingAgencyIndia
          ? "https://melangedigital.co/choosing-destination-marketing-agency-india-og.jpg"
          : isTravelMarketingTrends2027
            ? "https://melangedigital.co/travel-marketing-trends-og.jpg"
            : isDestinationMarketingStrategies
              ? "https://melangedigital.co/destination-marketing-strategies-og.jpg"
              : blog.image || "";
  const seoImageAlt = isDestinationMarketingInTourism
    ? "Destination Marketing in Tourism – Mélange Digital"
    : isExperientialTourismGuide
      ? "Experiential Tourism – Mélange Digital"
      : isAIForTravelPlanning
        ? "AI for Travel Planning – Mélange Digital"
    : isTravelInfluencerMarketing
      ? "Travel Influencer Marketing – Mélange Digital"
      : isAirlinesMarketing
        ? "Airlines Marketing – Mélange Digital"
    : isFilmInducedTourism
      ? "Film-Induced Tourism: How Screens Drive Travel | Mélange Digital"
    : isWhatAreFamTrips
      ? "What Are Fam Trips? | Mélange Digital"
      : isCruiseBranding
        ? "Cruise Branding for New Cruise Lines | Mélange Digital"
        : isChoosingDestinationMarketingAgencyIndia
          ? "Choosing a Destination Marketing Agency in India | Mélange Digital"
          : isTravelMarketingTrends2027
            ? "Travel Marketing Trends 2027 – Mélange Digital"
            : isDestinationMarketingStrategies
              ? "Destination Marketing Strategies – Mélange Digital"
              : blog.altText;
  const hasPageSpecificSocialPreview =
    isDestinationMarketingInTourism ||
    isExperientialTourismGuide ||
    isAIForTravelPlanning ||
    isTravelInfluencerMarketing ||
    isAirlinesMarketing ||
    isFilmInducedTourism ||
    isWhatAreFamTrips ||
    isCruiseBranding ||
    isDestinationMarketingStrategies ||
    isTravelMarketingTrends2027 ||
    isChoosingDestinationMarketingAgencyIndia;
  const canonicalUrl = `https://melangedigital.co/blogs/${(blog.slug || slug || "").replace(/\/+$/, "")}`;

  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Blogs", url: "/blogs" },
    {
      displayName: blog.breadcrumbTitle || (blog.title?.length > 40 ? blog.title.substring(0, 40) + '...' : blog.title),
      url: `/blogs/${blog.slug}`,
    },
  ];

  // Map imageSize value to CSS classes
  const getImageSizeClass = (imageSize) => {
    switch (imageSize) {
      case 'extra-small': return 'max-w-xs w-full';
      case 'small': return 'max-w-sm w-full';
      case 'medium': return 'max-w-2xl w-full';
      case 'extra-large': return 'max-w-4xl w-full';
      case 'large': return 'w-full';
      default: return 'max-w-2xl w-full';
    }
  };

  // Map imageFit value to object-fit class
  const getImageFitClass = (imageFit) => {
    return imageFit === 'cover' ? 'object-cover' : 'object-contain';
  };

  const tablePosition = blog.tablePosition || "after-sections";
  const sectionTablePositionExists = (blog.sections || []).some(
    (section) => `after-section:${section.id}` === tablePosition,
  );
  const contentBlockTablePositionExists = (blog.contentBlocks || []).some(
    (block) => `after-content-block:${block.id}` === tablePosition,
  );
  const shouldRenderTableAfterSections =
    tablePosition === "after-sections" ||
    (tablePosition.startsWith("after-section:") && !sectionTablePositionExists) ||
    (tablePosition.startsWith("after-content-block:") && !contentBlockTablePositionExists);

  const renderComparisonTable = () => {
    if (!blog.hasTable || !blog.tableHeaders || !blog.tableRows) return null;

    return (
      <div className="mt-10 overflow-x-auto border border-zinc-200 rounded-xl">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="bg-zinc-50">
            <tr>
              {blog.tableHeaders.map((header, idx) => (
                <th key={idx} className="p-4 font-bold text-zinc-900 border-b border-zinc-200">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blog.tableRows.map((row, rIdx) => {
              const cells = row.cells || row;
              return (
                <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}>
                  {cells.map((cell, cIdx) => (
                    <td key={cIdx} className="p-4 text-zinc-700 border-b border-zinc-200 whitespace-pre-line">{cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const renderVideo = (url) => {
    if (!url) return null;
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/d\/(.*?)\//) || url.match(/id=(.*?)(&|$)/);
      if (match && match[1]) {
        return (
          <iframe 
            src={`https://drive.google.com/file/d/${match[1]}/preview`} 
            width="100%" 
            height="100%" 
            allow="autoplay" 
            className="border-0"
            allowFullScreen
          ></iframe>
        );
      }
    }
    return <ReactPlayer url={url} width="100%" height="100%" controls={true} playing={false} />;
  };

  return (
    <div>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} data-rh="true" />
        <meta name="description" content={seoDescription} data-rh="true" />
        {blog.focusKeywords && <meta name="keywords" content={blog.focusKeywords} data-rh="true" />}
        <meta property="og:image" content={seoImage} data-rh="true" />
        {seoImageAlt && <meta property="og:image:alt" content={seoImageAlt} data-rh="true" />}
        <meta property="og:title" content={seoTitle} data-rh="true" />
        <meta property="og:description" content={seoDescription} data-rh="true" />
        {hasPageSpecificSocialPreview && (
          <>
            <meta property="og:type" content="article" data-rh="true" />
            <meta property="og:url" content={canonicalUrl} data-rh="true" />
            <meta property="og:image:width" content="1200" data-rh="true" />
            <meta property="og:image:height" content="630" data-rh="true" />
            {(isDestinationMarketingInTourism ||
              isExperientialTourismGuide ||
              isAIForTravelPlanning ||
              isTravelInfluencerMarketing ||
              isAirlinesMarketing ||
              isFilmInducedTourism ||
              isWhatAreFamTrips ||
              isCruiseBranding ||
              isChoosingDestinationMarketingAgencyIndia) && (
              <meta property="og:image:type" content="image/jpeg" data-rh="true" />
            )}
            <meta name="twitter:card" content="summary_large_image" data-rh="true" />
            <meta name="twitter:title" content={seoTitle} data-rh="true" />
            <meta name="twitter:description" content={seoDescription} data-rh="true" />
            <meta name="twitter:image" content={seoImage} data-rh="true" />
          </>
        )}
        <link rel="canonical" href={canonicalUrl} data-rh="true" />
        <script type="application/ld+json">{JSON.stringify(activeBlogSchema(blog))}</script>
      </Helmet>

      <Navbar />

      <div className="lg:px-[80px] lg:pb-section-y px-5 py-10 lg:pt-0 pt-6 max-container">
        {/* Breadcrumbs */}
        <div className="font-nunito lg:pt-32 pt-20 text-[16px] lg:text-[18px] ml-0 lg:ml-0 mb-6 lg:mb-10">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>

        {/* Date and Category */}
        <div className="text-stone-400 text-base font-normal font-nunito">
          {blog.categories && blog.categories.length > 0 
            ? blog.categories.map(cat => formatBlogCategory(cat)).join(", ")
            : formatBlogCategory(blog.category)} - {blog.date}
        </div>

        {/* Title */}
        <h1 className="text-display font-display my-[16px] lg:font-semibold font-bold font-nunito mt-4 lg:mt-4">
          {blog.title}
        </h1>

        {/* Banner image */}
        {blog.image && (() => {
          const heightMap = {
            'small': { mobile: '200px', tablet: '280px', desktop: '300px' },
            'medium': { mobile: '220px', tablet: '350px', desktop: '450px' },
            'large': { mobile: '250px', tablet: '400px', desktop: '550px' },
            'extra-large': { mobile: '280px', tablet: '460px', desktop: '650px' },
          };
          const h = heightMap[blog.bannerHeight] || heightMap['medium'];
          const fit = blog.bannerFit || 'cover';
          return (
            <div className="w-full mt-5">
              <picture>
                <img
                  src={cloudinaryUrl(blog.image, 1280)}
                  srcSet={cloudinarySrcSet(blog.image, [640, 960, 1280, 1600])}
                  sizes="(min-width: 1440px) 1280px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 40px)"
                  fetchpriority="high"
                  decoding="async"
                  alt={blog.altText || blog.title}
                  className="w-full lg:rounded-[30px] rounded-xl shadow-md"
                  style={{
                    objectFit: fit,
                    objectPosition: 'center',
                    height: `clamp(${h.mobile}, 35vw, ${h.desktop})`,
                    display: 'block',
                  }}
                />
              </picture>
            </div>
          );
        })()}

        {/* Content grid */}
        <div className="lg:flex lg:gap-x-10 lg:mt-[32px] mt-5">
            {/* Main article content */}
            <div className="firstSection font-nunito lg:w-[70%] w-full">
              {blog.content && (
              <div 
                className="text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px] lg:mt-4 mt-2 blog-content cs-rendered-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            )}
            {tablePosition === "after-intro" && renderComparisonTable()}

            {blog.sections && blog.sections.length > 0 && (
              <div className="mt-8 space-y-8">
                {blog.sections.map((section, idx) => (
                  <React.Fragment key={section.id || idx}>
                    <div className="section-block">
                      {section.subheading && (
                        section.headingLevel === 'h3' ? (
                          <h3 className="text-[20px] md:text-[22px] font-bold text-zinc-900 mb-4">{section.subheading}</h3>
                        ) : section.headingLevel === 'h4' ? (
                          <h4 className="text-[18px] md:text-[20px] font-bold text-zinc-900 mb-4">{section.subheading}</h4>
                        ) : (
                          <h2 className="text-[28px] md:text-[32px] font-bold text-zinc-900 mb-4">{section.subheading}</h2>
                        )
                      )}
                      {section.paragraph && (
                        <div
                          className="text-zinc-900 lg:text-xl text-base font-normal lg:leading-[30px] blog-content cs-rendered-content"
                          dangerouslySetInnerHTML={{ __html: section.paragraph }}
                        />
                      )}
                    </div>
                    {tablePosition === `after-section:${section.id}` && renderComparisonTable()}
                  </React.Fragment>
                ))}
              </div>
            )}

            {shouldRenderTableAfterSections && renderComparisonTable()}

            {/* Dynamic Content Blocks Section */}
            {blog.contentBlocks && blog.contentBlocks.length > 0 && (
              <div className="mt-10 space-y-10">
                {blog.contentBlocks.map((block, blockIdx) => (
                  <React.Fragment key={block.id || blockIdx}>
                    <div className="animate-fade-in">
                    
                    {/* TEXT SECTION */}
                    {block.type === 'section' && (
                      <div className="flex flex-col">
                        {block.subheading && (
                          block.headingLevel === 'h3' ? (
                            <h3 className="multiverse-text font-bold text-[20px] md:text-[22px] leading-[28px] lg:leading-[32px] mb-3">{block.subheading}</h3>
                          ) : block.headingLevel === 'h4' ? (
                            <h4 className="multiverse-text font-bold text-[18px] md:text-[20px] leading-[24px] lg:leading-[28px] mb-3">{block.subheading}</h4>
                          ) : (
                            <h2 className="multiverse-text font-bold text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] mb-3">{block.subheading}</h2>
                          )
                        )}
                        {block.paragraph && (
                          block.isList && !/<[a-z][\s\S]*>/i.test(block.paragraph) ? (
                            <ul className="list-disc list-outside mt-2 text-[16px] md:text-[18px] lg:text-[20px] space-y-3 ml-6 leading-relaxed whitespace-pre-wrap text-zinc-900">
                              {block.paragraph.split('\n').filter(line => line.trim() !== '').map((line, bIdx) => (
                                <li key={bIdx}>{line}</li>
                              ))}
                            </ul>
                          ) : (
                            <div
                              className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-zinc-900 blog-content cs-rendered-content"
                              dangerouslySetInnerHTML={{ __html: block.paragraph }}
                            />
                          )
                        )}
                        {/* Bullet list support in content blocks */}
                        {block.bullets && block.bullets.length > 0 && (
                          <ul className="list-disc list-outside mt-3 text-[16px] md:text-[18px] lg:text-[20px] space-y-2 ml-6 leading-relaxed text-zinc-900">
                            {block.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* IMAGE SECTION */}
                    {block.type === 'image' && block.url && (
                      <div className="w-full flex justify-center mt-5 mb-5">
                        <img
                          src={cloudinaryUrl(block.url, 1200)}
                          loading="lazy"
                          decoding="async"
                          alt={block.altText || blog.title || ""}
                          className={`${getImageSizeClass(block.imageSize)} ${block.imageSize === 'large' ? 'max-h-[600px]' : 'max-h-[480px]'} rounded-2xl shadow-lg ${getImageFitClass(block.imageFit)}`}
                        />
                      </div>
                    )}

                    {/* IMAGE ROW SECTION — 2 or 3 images side by side */}
                    {block.type === 'image-row' && block.images && block.images.some(img => img) && (
                      <div className={`grid gap-4 md:gap-6 ${(block.columns || 2) === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                        {block.images.map((imgUrl, imgIdx) =>
                          imgUrl ? (
                            <div key={imgIdx} className="w-full overflow-hidden rounded-2xl shadow-md">
                              <img
                                src={cloudinaryUrl(imgUrl, 800)}
                                loading="lazy"
                                decoding="async"
                                alt={block.altTexts?.[imgIdx] || `${blog.title || "Blog"} image ${imgIdx + 1}`}
                                className={`w-full h-[220px] md:h-[280px] lg:h-[340px] ${getImageFitClass(block.imageFit || 'cover')}`}
                              />
                            </div>
                          ) : null
                        )}
                      </div>
                    )}

                    {/* VIDEO SECTION */}
                    {block.type === 'video' && block.url && (
                      <div className="w-full flex justify-center mt-5 mb-5">
                        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                          {renderVideo(block.url)}
                        </div>
                      </div>
                    )}

                    {/* SPLIT SCREEN SECTION */}
                    {block.type === 'split' && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-6 lg:py-10">
                        <div className={`flex flex-col justify-center ${block.imagePosition === 'left' ? 'lg:order-2 order-2' : 'lg:order-1 order-2'}`}>
                          {block.subheading && (
                            block.headingLevel === 'h3' ? (
                              <h3 className="multiverse-text font-bold text-[24px] md:text-[28px] leading-[32px] lg:leading-[36px] mb-6 break-words">{block.subheading}</h3>
                            ) : block.headingLevel === 'h4' ? (
                              <h4 className="multiverse-text font-bold text-[20px] md:text-[24px] leading-[28px] lg:leading-[32px] mb-6 break-words">{block.subheading}</h4>
                            ) : (
                              <h2 className="multiverse-text font-bold text-[28px] md:text-[32px] leading-[36px] lg:leading-[40px] mb-6 break-words">{block.subheading}</h2>
                            )
                          )}
                          {block.paragraph && (
                            block.isList && !/<[a-z][\s\S]*>/i.test(block.paragraph) ? (
                              <ul className="list-disc list-outside mt-3 text-[#1a1a1a] text-[18px] md:text-[20px] lg:text-[22px] leading-[32px] space-y-3 ml-6 font-medium opacity-90 break-words">
                                {block.paragraph.split('\n').filter(line => line.trim() !== '').map((line, bIdx) => (
                                  <li key={bIdx}>{line}</li>
                                ))}
                              </ul>
                            ) : (
                              <div
                                className="text-[#1a1a1a] text-[18px] md:text-[20px] lg:text-[22px] leading-[32px] break-words opacity-90 font-medium blog-content cs-rendered-content"
                                dangerouslySetInnerHTML={{ __html: block.paragraph }}
                              />
                            )
                          )}
                        </div>
                        {block.url && (
                          <div className={`w-full flex justify-center ${block.imagePosition === 'left' ? 'lg:order-1 order-1' : 'lg:order-2 order-1'}`}>
                            <div className={`relative group ${getImageSizeClass(block.imageSize)}`}>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                              <img
                                src={cloudinaryUrl(block.url, 1000)}
                                loading="lazy"
                                decoding="async"
                                alt={block.altText || block.subheading || blog.title || ""}
                                className={`w-full ${block.imageSize === 'large' ? 'max-h-[600px]' : 'max-h-[480px]'} rounded-[32px] shadow-2xl object-cover relative z-10 border border-black/5 dark:border-white/10`}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    </div>
                    {tablePosition === `after-content-block:${block.id}` && renderComparisonTable()}
                  </React.Fragment>
                ))}
              </div>
            )}
            {tablePosition === "after-content-blocks" && renderComparisonTable()}

            {/* Social shares */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <div className="text-black lg:text-[24px] text-xl font-bold leading-[27px] lg:leading-[34px]">
                Follow us:
              </div>
              <div className="flex mt-2">
                <a
                  href="https://www.linkedin.com/company/melangedigital/"
                  className="hover:opacity-85 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/melangedigital.in/"
                  className="ml-3 hover:opacity-85 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="secSection lg:block hidden font-nunito w-[30%]">
            
            {/* Table of Contents - Now in Sidebar */}
            {toc.length > 0 && (
              <div className="w-full h-auto bg-zinc-100 p-6 rounded-2xl mb-10">
                <p className="text-zinc-900 text-2xl font-bold leading-[27px] lg:leading-[34px] mb-4">
                  Table of Contents
                </p>
                <ul className="space-y-3">
                  {toc.map((item) => (
                    <li key={item.id} className="border-b border-zinc-200 pb-3 last:border-0 last:pb-0">
                      <button 
                        onClick={() => scrollToHeading(item.id)}
                        className="text-left text-zinc-700 text-base font-semibold hover:text-[#3858ff] transition-colors flex items-center w-full group"
                      >
                        <span className="pr-2 flex-1">{item.text}</span>
                        <span className="transform transition-transform group-hover:translate-x-1 text-lg font-normal">→</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="w-full h-auto bg-zinc-100 p-6 rounded-2xl">
              <p className="text-zinc-900 text-2xl font-bold leading-[27px] lg:leading-[34px]">
                Our Services
              </p>
              
              <div className="mt-4 space-y-2">
                <Link to="/services#influencer" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Influencer &amp; Celebrity Marketing
                </Link>
                <Link to="/services#branded" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Branded Content &amp; IP's
                </Link>
                <Link to="/services#experiential" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Experiential &amp; On-ground
                </Link>
                <Link to="/services#fam" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Trade FAMs &amp; Media Trips
                </Link>
              </div>
            </div>

            <div className="w-full h-auto bg-zinc-100 p-6 lg:mt-10 rounded-2xl">
              <p className="text-zinc-900 text-2xl font-bold leading-[27px] lg:leading-[34px]">
                Popular tags
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="border border-[#1a1a1a] rounded-[8px] px-3 py-1.5 text-xs text-zinc-800">
                  Digital Marketing
                </span>
                <span className="border border-[#1a1a1a] rounded-[8px] px-3 py-1.5 text-xs text-zinc-800">
                  Growth Strategy
                </span>
                <span className="border border-[#1a1a1a] rounded-[8px] px-3 py-1.5 text-xs text-zinc-800">
                  Creator Economy
                </span>
                <span className="border border-[#1a1a1a] rounded-[8px] px-3 py-1.5 text-xs text-zinc-800">
                  Travel Brand Strategy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer customInsights={insights} />
    </div>
  );
};

export default BlogDetail;
