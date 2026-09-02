import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../../../firebase";
import { Navbar, Footer, BreadCrumbs } from "../../layout";

import { Helmet } from "react-helmet-async";
import { Insights } from "../../RevamperHome";
import { linkedin, instagram } from "../../../assets/images";
import ReactPlayer from "react-player";


const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState([]);
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
    const fetchBlogAndInsights = async () => {
      setLoading(true);
      try {
        // Query current blog
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data();
          setBlog(blogData);
          
          // Query 3 other blogs for related insights
          const insightsQuery = query(collection(db, "blogs"), limit(4));
          const insightsSnapshot = await getDocs(insightsQuery);
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
        setLoading(false);
      }
    };

    fetchBlogAndInsights();
  }, [slug]);

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

  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Blogs", url: "/blogs" },
    {
      displayName: blog.breadcrumbTitle || (blog.title?.length > 40 ? blog.title.substring(0, 40) + '...' : blog.title),
      url: `/blogs/${blog.slug}`,
    },
  ];

  // Helper to humanize category label
  const formatCategory = (cat) => {
    if (!cat) return "";
    const categoryMap = {
      "content-marketing": "Content Marketing",
      "brand-strategy": "Brand Strategy",
      "ecommerce-management": "E-commerce Management",
      "design-solutions": "Design Solutions",
      "performance-marketing": "Performance Marketing",
      "website-development-seo": "Website Development & SEO",
      // Legacy support for older blogs
      "influencer-marketing": "Influencer Marketing",
      "design-development": "Design & Development",
      "content-strategy": "Content Strategy",
      "ips-pr": "PR, IPs & Outreach",
      "aeo-seo": "AEO & SEO",
      "ecommerce": "E-Commerce"
    };
    return categoryMap[cat] || cat.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
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
        <title>{blog.seoTitle || blog.title}</title>
        <meta name="title" content={`${blog.seoTitle || blog.title}`} data-rh="true" />
        <meta name="description" content={blog.metaDescription || blog.description || ""} data-rh="true" />
        {blog.focusKeywords && <meta name="keywords" content={blog.focusKeywords} data-rh="true" />}
        <meta property="og:image" content={blog.image || ""} data-rh="true" />
        {blog.altText && <meta property="og:image:alt" content={blog.altText} data-rh="true" />}
        <meta property="og:title" content={blog.seoTitle || blog.title} data-rh="true" />
        <meta property="og:description" content={blog.metaDescription || blog.description || ""} data-rh="true" />
        <link rel="canonical" href={`https://melangedigital.co/blogs/${blog.slug}`} data-rh="true" />
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
            ? blog.categories.map(cat => formatCategory(cat)).join(", ")
            : formatCategory(blog.category)} - {blog.date}
        </div>

        {/* Title */}
        <h2 className="text-display font-display my-[16px] lg:font-semibold font-bold font-nunito mt-4 lg:mt-4">
          {blog.title}
        </h2>

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
                  src={blog.image}
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

            {blog.sections && blog.sections.length > 0 && (
              <div className="mt-8 space-y-8">
                {blog.sections.map((section, idx) => (
                  <div key={idx} className="section-block">
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
                ))}
              </div>
            )}

            {blog.hasTable && blog.tableHeaders && blog.tableRows && (
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
            )}

            {/* Dynamic Content Blocks Section */}
            {blog.contentBlocks && blog.contentBlocks.length > 0 && (
              <div className="mt-10 space-y-10">
                {blog.contentBlocks.map((block) => (
                  <div key={block.id} className="animate-fade-in">
                    
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
                          src={block.url}
                          alt="Blog content"
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
                                alt={`Blog image ${imgIdx + 1}`}
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
                                src={block.url}
                                alt={block.subheading || "Blog split content"}
                                className={`w-full ${block.imageSize === 'large' ? 'max-h-[600px]' : 'max-h-[480px]'} rounded-[32px] shadow-2xl object-cover relative z-10 border border-black/5 dark:border-white/10`}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                  </div>
                ))}
              </div>
            )}

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
                Categories
              </p>
              
              <div className="mt-4 space-y-2">
                <Link to="/services/content-marketing" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Content Marketing
                </Link>
                <Link to="/services/brand-strategy" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Brand Strategy
                </Link>
                <Link to="/services/ecommerce" className="block text-zinc-700 text-base font-semibold hover:underline">
                  E-commerce Management
                </Link>
                <Link to="/services/design-solutions" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Design Solutions
                </Link>
                <Link to="/services/performance-marketing" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Performance Marketing
                </Link>
                <Link to="/services/website-development-seo" className="block text-zinc-700 text-base font-semibold hover:underline">
                  Website Development & SEO
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
                  Brand Strategy
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
