import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { loadCaseStudies } from "../../../constants/caseStudyData";
import {
  Navbar,
  Footer,
  BreadCrumbs,
  WorkSummaryForServicesPage,
} from "../../layout";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";
import CASE_STUDY_SEO from "../../../constants/caseStudySeo.json" with { type: "json" };

const SLUG_ALIASES = {
  "singapore-tourism-board": ["singapore-tourism-board-stb"],
  "singapore-tourism-board-stb": ["singapore-tourism-board"],
  "akbar-travels": ["mall-activation-for-saudi-tourism"],
};
const CANONICAL_SLUG = {
  genvr: "genvr",
  neotraders: "neotraders",
  devboost: "devboost",
  "singapore-tourism-board-stb": "singapore-tourism-board",
  "akbar-travels": "mall-activation-for-saudi-tourism",
};

function truncateMetaDescription(value, maxLength = 160) {
  const normalized = String(value).replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const lastSpace = normalized.lastIndexOf(" ", maxLength);
  if (lastSpace > 0) return normalized.slice(0, lastSpace).trimEnd();
  const nextSpace = normalized.indexOf(" ", maxLength);
  return nextSpace < 0 ? normalized : normalized.slice(0, nextSpace).trimEnd();
}

const CaseStudyDetail = () => {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  // Fallback: React Router v6 prioritises literal routes over /:slug,
  // so useParams may return {} for hardcoded routes. Extract from URL instead.
  const slug = (paramSlug || location.pathname.replace(/^\/work\/?/, "")).replace(/\/+$/, "");
  const [cs, setCs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const all = await loadCaseStudies();
        const candidateSlugs = [slug, ...(SLUG_ALIASES[slug] || [])];
        let data = candidateSlugs
          .map((candidate) => all.find((item) => item.slug === candidate))
          .find(Boolean);
        if (!data) {
          const lower = slug.toLowerCase();
          data = all.find((item) => (item.slug || "").toLowerCase() === lower) || null;
        }
        setCs(data);
      } catch (err) {
        console.error("Error fetching case study:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById("videoElement");
      if (!videoElement) return;
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth - 30;
      const scale = Math.min(
        1 + scrollY * 0.0002,
        windowWidth / videoElement.offsetWidth
      );
      videoElement.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cs]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main
          className="max-container px-5 md:px-16 lg:px-20 pt-10 pb-14"
          aria-busy="true"
          aria-label="Loading case study"
        >
          <span className="sr-only">Loading case study</span>
          <div className="mb-8 h-5 w-28 animate-pulse rounded bg-slate-200" />
          <div className="mb-10 h-12 max-w-3xl animate-pulse rounded bg-slate-200 md:h-16" />
          <div className="h-[250px] animate-pulse rounded-lg bg-slate-100 md:h-[450px] lg:h-[550px]" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_470px]">
            <div>
              <div className="mb-4 h-9 w-56 animate-pulse rounded bg-slate-200" />
              <div className="mb-2 h-5 w-full animate-pulse rounded bg-slate-100" />
              <div className="mb-2 h-5 w-11/12 animate-pulse rounded bg-slate-100" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-slate-100" />
            </div>
            <div className="hidden gap-3 lg:flex">
              <div className="h-24 w-36 animate-pulse rounded-lg bg-slate-100" />
              <div className="h-24 w-36 animate-pulse rounded-lg bg-slate-100" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!cs) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c1e] text-white p-6 text-center font-body">
        <h2 className="text-3xl font-bold font-display mb-4">Case Study Not Found</h2>
        <p className="text-gray-400 mb-6 font-body">The case study you are looking for does not exist or has been removed.</p>
        <Link to="/work" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold font-body transition-all">
          Go Back to Projects
        </Link>
      </div>
    );
  }

  const caseSeo = CASE_STUDY_SEO[slug] || {};
  const displayTitle = caseSeo.displayTitle || cs.title;
  const stats = caseSeo.stats || cs.stats?.map((stat) => {
    if (caseSeo.normalizeAverageStayStat && /average length of stay/i.test(stat.label || "")) {
      return { ...stat, value: "2–3 nights", label: "Average Length of Stay" };
    }
    if (
      caseSeo.normalizeTradeConnectionsStat &&
      /^500\+?$/i.test(String(stat.value || "").trim()) &&
      /qualified trade (deals|connections|enquiries)/i.test(stat.label || "")
    ) {
      return { ...stat, label: "trade connections" };
    }
    return stat;
  });
  const contentBlocks = caseSeo.businessImpactHtml
    ? cs.contentBlocks?.map((block) =>
        block.subheading?.trim().toLowerCase() === "business impact"
          ? { ...block, paragraph: caseSeo.businessImpactHtml }
          : block,
      )
    : cs.contentBlocks;
  const pageTitle = `${displayTitle} | Mélange Digital's Work`;
  const description = caseSeo.description
    ? caseSeo.description.replace(/\s+/g, " ").trim()
    : truncateMetaDescription(cs.metaDescription || cs.description || cs.intro || "");
  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Work", url: "/work" },
    { displayName: caseSeo.displayTitle || cs.breadcrumbTitle || (displayTitle?.length > 40 ? displayTitle.substring(0, 40) + '...' : displayTitle), url: `/work/${cs.slug}` },
  ];

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} data-react-helmet="true" />
        <meta name="description" content={description} />
        <meta property="og:image" content={cs.bannerImage || ""} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`https://melangedigital.co/work/${(CANONICAL_SLUG[slug.toLowerCase()] || (cs && cs.slug) || slug).replace(/\/+$/, "")}`} data-rh="true" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@400;500;600;700;800&family=Baskervville:ital@1&family=Libre+Baskerville:ital@1&family=Lato:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />

      <div className="pt-28 md:pt-32 font-body text-slate-800 pb-14 transition-scrolling max-container">
        <div className="flex flex-col md:flex-col">
          {/* Breadcrumbs */}
          <div className="font-body text-[16px] lg:text-[18px] lg:px-20 px-5 lg:mb-[40px] mb-6">
            <BreadCrumbs breadcrumbs={breadcrumbs} />
          </div>

          {/* Title */}
          <div className="px-5 md:px-16 lg:px-20">
            <div className="mb-10 w-full lg:max-w-[1200px]">
              <h1 className="font-semibold text-hero font-display text-[#0f0330] break-words">
                {displayTitle}
              </h1>
            </div>
          </div>

          {/* Banner Image */}
          {cs.bannerImage && (
            <div className="overflow-hidden mx-6 my-0 -mt-8 md:mt-10 md:my-10 md:mx-16 lg:mx-20 lg:rounded-[20px] rounded-[8px]">
              <img
                id="videoElement"
                src={cs.bannerImage}
                alt={displayTitle}
                className="w-full h-[250px] md:h-[450px] lg:h-[550px] object-cover transition-transform duration-100 ease-out"
                style={{ transformOrigin: "center center" }}
              />
            </div>
          )}
        </div>

        {/* Intro & Stats */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mx-6 md:mx-16 lg:mx-20 mb-0 mt-4 md:mt-8 md:mb-0">
          <div className="mb-8 lg:mb-0 lg:mr-8">
            
            {/* Stats (Mobile only) */}
            {stats && stats.length > 0 && (
              <div className="lg:hidden flex flex-wrap gap-3 mb-[45px]">
                {stats.map((stat, idx) => (
                  <div key={idx} className="w-[145px] min-h-[100px] px-2 py-2 bg-gradient-to-l flex flex-col justify-center items-center from-blue-200 via-purple-200 to-fuchsia-200 rounded-[8px]">
                    <div className="text-zinc-900 min-h-[44px] text-[30px] font-bold font-display flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="text-center text-black text-[11px] leading-tight font-normal font-body px-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Introduction heading — Alan Sans H2 */}
            <h2 className="font-display font-semibold text-display text-[#0f0330] pb-2">
              Introduction
            </h2>
            <p className="text-lg md:text-xl w-auto lg:w-[90%] leading-relaxed font-body text-slate-700">
              {cs.intro}
            </p>
            {caseSeo.clientReportedResults && (
              <p className="mt-4 text-lg md:text-xl w-auto lg:w-[90%] leading-relaxed font-body text-slate-700">
                {caseSeo.clientReportedResults}
              </p>
            )}
          </div>

          {/* Services & Stats (Desktop only) */}
          <div>
            {stats && stats.length > 0 && (
              <div className="lg:flex hidden flex-wrap gap-3 mb-[45px] mt-2 max-w-[470px]">
                {stats.map((stat, idx) => (
                  <div key={idx} className="w-[145px] min-h-[100px] px-2 py-2 bg-gradient-to-l flex flex-col justify-center items-center from-blue-200 via-purple-200 to-fuchsia-200 rounded-[8px]">
                    <div className="text-zinc-900 min-h-[44px] text-[30px] font-bold font-display flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="text-center text-black text-[11px] leading-tight font-normal font-body px-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cs.services && cs.services.length > 0 && (
              <>
                <h3 className="font-display font-semibold text-xl md:text-2xl pb-2 text-[#0f0330]">Services</h3>
                <div className="flex flex-col">
                  {cs.services.map((srv, idx) => (
                    <p key={idx} className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold font-body">
                      {srv}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Approach Section */}
        {cs.approach && cs.approach.length > 0 && (
          <div className="mt-2 lg:mt-4 px-5 md:px-16 lg:px-20 max-container animate-fade-in">
            <h2 className="font-display font-semibold text-display text-[#0f0330] pb-3">
              Our <span className="multiverse-text font-accent italic font-normal">Approach</span>
            </h2>

            <div className="space-y-6">
              {cs.approach.map((section, appIdx) => (
                <div key={appIdx} className="pt-4">
                  <div>
                    <h3 className="text-[20px] md:text-2xl font-semibold font-display text-[#0f0330]">
                      {section.title}
                    </h3>
                  </div>
                  {section.steps && section.steps.length > 0 && (
                    section.listType === 'bullet' ? (
                      <ul className="list-disc list-outside mt-4 text-[16px] md:text-lg space-y-3 ml-6 leading-relaxed font-body text-slate-700">
                        {section.steps.map((step, stepIdx) => (
                          <li key={stepIdx}>{step}</li>
                        ))}
                      </ul>
                    ) : (
                      <ol className="list-decimal list-outside mt-4 text-[16px] md:text-lg space-y-3 ml-6 leading-relaxed font-body text-slate-700">
                        {section.steps.map((step, stepIdx) => (
                          <li key={stepIdx}>{step}</li>
                        ))}
                      </ol>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>


      {/* Dynamic Content Blocks Section */}
      {contentBlocks && contentBlocks.length > 0 && (
        <div className="px-5 md:px-16 lg:px-20 mt-0 md:mt-2 max-container mb-12">
          <div className="space-y-10">
            {contentBlocks.map((block) => (
              <div key={block.id} className="animate-fade-in">
                
                {/* TEXT SECTION */}
                {block.type === 'section' && (
                  <div className="flex flex-col">
                    {block.subheading && (
                      <h2 className="font-display font-semibold text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] text-[#0f0330] mb-4 break-words">
                        {block.subheading}
                      </h2>
                    )}
                    {block.paragraph && (
                      <div
                        className="cs-rendered-content font-body text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-slate-700"
                        dangerouslySetInnerHTML={{ __html: block.paragraph }}
                      />
                    )}
                  </div>
                )}

                {/* IMAGE SECTION — size & fit options */}
                {block.type === 'image' && block.url && (
                  <div className="w-full flex justify-center">
                    <img
                      src={block.url}
                      alt="Case study content"
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
                            src={imgUrl}
                            alt={`Case study image ${imgIdx + 1}`}
                            className={`w-full h-[220px] md:h-[280px] lg:h-[340px] ${getImageFitClass(block.imageFit || 'cover')}`}
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                )}

                {/* VIDEO SECTION */}
                {block.type === 'video' && block.url && (
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      {renderVideo(block.url)}
                    </div>
                  </div>
                )}

                {/* SPLIT SCREEN SECTION */}
                {block.type === 'split' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-6 lg:py-10">
                    <div className={`lg:col-span-7 flex flex-col justify-center ${block.imagePosition === 'left' ? 'lg:order-2 order-2' : 'lg:order-1 order-2'}`}>
                      {block.subheading && (
                        <h2 className="font-display font-semibold text-[28px] md:text-[36px] leading-[34px] md:leading-[42px] text-[#0f0330] mb-6 break-words">
                          {block.subheading}
                        </h2>
                      )}
                      {block.paragraph && (
                        <div
                          className="cs-rendered-content font-body text-[#1a1a1a] text-[18px] md:text-[20px] leading-[32px] opacity-90 break-words"
                          dangerouslySetInnerHTML={{ __html: block.paragraph }}
                        />
                      )}
                    </div>
                    {block.url && (
                      <div className={`lg:col-span-5 w-full flex justify-center ${block.imagePosition === 'left' ? 'lg:order-1 order-1' : 'lg:order-2 order-1'}`}>
                        <div className="relative group w-full">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                          <img
                            src={block.url}
                            alt={block.subheading || "Case study split content"}
                            className={`${getImageSizeClass(block.imageSize)} ${block.imageSize === 'large' ? 'max-h-[600px]' : 'max-h-[480px]'} rounded-[32px] shadow-2xl object-cover relative z-10 border border-black/5 dark:border-white/10`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Section — displayed as blocks */}
      {cs.results && cs.results.length > 0 && (
        <div className="px-5 md:px-16 lg:px-20 mt-12 md:mt-20 max-container mb-16">
          <h2 className="font-display font-semibold text-display text-[#0f0330] pb-6 md:pb-8">
            Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {cs.results.map((res, idx) => (
              <div
                key={idx}
                className="relative group p-5 md:p-6 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-fuchsia-500 rounded-l-2xl"></div>
                <div className="pl-4">
                  <div className="w-7 h-7 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-purple-600 font-bold text-xs font-display">{idx + 1}</span>
                  </div>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-800 font-medium font-body">
                    {res}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Works section */}
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
