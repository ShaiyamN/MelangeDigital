import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  Navbar,
  Footer,
  BreadCrumbs,
  WorkSummaryForServicesPage,
} from "../../layout";
import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";

const CaseStudyDetail = () => {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  // Fallback: React Router v6 prioritises literal routes over /:slug,
  // so useParams may return {} for hardcoded routes. Extract from URL instead.
  const slug = paramSlug || location.pathname.replace(/^\/work\//, "");
  const [cs, setCs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "casestudies"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setCs(querySnapshot.docs[0].data());
        } else {
          // If not found, try to redirect back to work or show a placeholder
          setCs(null);
        }
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c0c1e] text-white">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!cs) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c1e] text-white p-6 text-center font-nunito">
        <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
        <p className="text-gray-400 mb-6">The case study you are looking for does not exist or has been removed.</p>
        <Link to="/work" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all">
          Go Back to Projects
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { displayName: "Home", url: "/" },
    { displayName: "Work", url: "/work" },
    { displayName: cs.breadcrumbTitle || (cs.title?.length > 40 ? cs.title.substring(0, 40) + '...' : cs.title), url: `/work/${cs.slug}` },
  ];

  return (
    <div>
      <Helmet>
        <title>{cs.title} | Mélange Digital's Work</title>
        <meta name="title" content={`${cs.title} | Mélange Digital's Work`} data-react-helmet="true" />
        <meta name="description" content={cs.intro?.substring(0, 160)} />
        <meta property="og:image" content={cs.bannerImage || ""} />
        <meta property="og:title" content={`${cs.title} | Mélange Digital's Work`} />
        <meta property="og:description" content={cs.intro?.substring(0, 160)} />
        <link rel="canonical" href={`https://melangedigital.co/work/${cs.slug}`} />
      </Helmet>

      <Navbar />

      <div className="pt-28 md:pt-32 font-nunito pb-14 transition-scrolling max-container">
        <div className="flex flex-col md:flex-col">
          {/* Breadcrumbs */}
          <div className="font-nunito text-[16px] lg:text-[18px] lg:px-20 px-5 lg:mb-[40px] mb-6">
            <BreadCrumbs breadcrumbs={breadcrumbs} />
          </div>

          {/* Title */}
          <div className="px-5 md:px-16 lg:px-20">
            <div className="mb-10 w-full lg:max-w-[1200px]">
              <h1 className="font-semibold text-[44px] leading-[52px] md:text-[50px] lg:leading-[57.60px] break-words">
                {cs.title}
              </h1>
            </div>
          </div>

          {/* Banner Image */}
          {cs.bannerImage && (
            <div className="overflow-hidden mx-6 my-0 -mt-8 md:mt-10 md:my-10 md:mx-16 lg:mx-20 lg:rounded-[20px] rounded-[8px]">
              <img
                id="videoElement"
                src={cs.bannerImage}
                alt={cs.title}
                className="w-full h-[250px] md:h-[450px] lg:h-[550px] object-cover transition-transform duration-100 ease-out"
                style={{ transformOrigin: "center center" }}
              />
            </div>
          )}
        </div>

        {/* Intro & Stats */}
        <div className="flex flex-col lg:flex-row justify-around mx-6 md:mx-16 lg:mx-20 mb-6 mt-6 md:mt-16 md:mb-6">
          <div className="mb-8 lg:mb-0 lg:mr-8">
            
            {/* Stats (Mobile only) */}
            {cs.stats && cs.stats.length > 0 && (
              <div className="lg:hidden flex flex-wrap gap-3 mb-[45px]">
                {cs.stats.map((stat, idx) => (
                  <div key={idx} className="w-[130px] h-[85px] bg-gradient-to-l flex flex-col justify-center items-center from-blue-200 via-purple-200 to-fuchsia-200 rounded-[8px]">
                    <div className="text-zinc-900 h-[50px] text-[32px] font-bold font-nunito flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="text-center text-black text-xs font-normal font-nunito px-1 line-clamp-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="multiverse-text font-bold pb-2 text-[40px] leading-[34px] lg:leading-[40px]">
              Introduction
            </p>
            <p className="text-lg md:text-xl w-auto lg:w-[90%] leading-relaxed">
              {cs.intro}
            </p>
          </div>

          {/* Services & Stats (Desktop only) */}
          <div>
            {cs.stats && cs.stats.length > 0 && (
              <div className="lg:flex hidden gap-3 mb-[45px] mt-2">
                {cs.stats.map((stat, idx) => (
                  <div key={idx} className="w-[130px] h-[85px] bg-gradient-to-l flex flex-col justify-center items-center from-blue-200 via-purple-200 to-fuchsia-200 rounded-[8px]">
                    <div className="text-zinc-900 h-[50px] text-[32px] font-bold font-nunito flex items-center justify-center">
                      {stat.value}
                    </div>
                    <div className="text-center text-black text-xs font-normal font-nunito px-1 line-clamp-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cs.services && cs.services.length > 0 && (
              <>
                <p className="font-bold text-xl md:text-2xl pb-2">Services</p>
                <div className="flex flex-col">
                  {cs.services.map((srv, idx) => (
                    <p key={idx} className="whitespace-nowrap multiverse-text pb-2 text-lg font-semibold">
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
          <div className="mt-10 lg:mt-20 px-5 md:px-16 lg:px-20 max-container animate-fade-in">
            <p className="text-[#000144] font-bold text-[40px] leading-[34px] lg:leading-[40px] pb-3">
              Our <span className="multiverse-text"> Approach </span>
            </p>

            <div className="space-y-6">
              {cs.approach.map((section, appIdx) => (
                <div key={appIdx} className="pt-4">
                  <div>
                    <h3 className="text-[20px] md:text-2xl font-bold">
                      {section.title}
                    </h3>
                  </div>
                  {section.steps && section.steps.length > 0 && (
                    section.listType === 'bullet' ? (
                      <ul className="list-disc list-outside mt-4 text-[16px] md:text-xl space-y-3 ml-6 leading-relaxed">
                        {section.steps.map((step, stepIdx) => (
                          <li key={stepIdx}>{step}</li>
                        ))}
                      </ul>
                    ) : (
                      <ol className="list-decimal list-outside mt-4 text-[16px] md:text-xl space-y-3 ml-6 leading-relaxed">
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

        {/* Results Section */}
        {cs.results && cs.results.length > 0 && (
          <div className="px-5 md:px-16 lg:px-20 mt-12 md:mt-20 max-container">
            <p className="multiverse-text font-bold text-[40px] leading-[34px] lg:leading-[40px] lg:pb-3 pb-4">
              Results
            </p>

            <ul className="list-disc list-outside mt-2 text-[16px] md:text-xl space-y-3 ml-6 leading-relaxed">
              {cs.results.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>
        )}
      </div>


        {/* Dynamic Content Blocks Section */}
        {cs.contentBlocks && cs.contentBlocks.length > 0 && (
          <div className="px-5 md:px-16 lg:px-20 mt-10 md:mt-16 max-container mb-12">
            <div className="space-y-10">
              {cs.contentBlocks.map((block) => (
                <div key={block.id} className="animate-fade-in">
                  
                  {/* TEXT SECTION */}
                  {block.type === 'section' && (
                    <div className="flex flex-col">
                      {block.subheading && (
                        <h3 className="multiverse-text font-bold text-[32px] leading-[36px] lg:leading-[40px] mb-3">
                          {block.subheading}
                        </h3>
                      )}
                      {block.paragraph && (
                        block.isList ? (
                          <ul className="list-disc list-outside mt-2 text-[16px] md:text-[18px] lg:text-[20px] space-y-3 ml-6 leading-relaxed whitespace-pre-wrap">
                            {block.paragraph.split('\n').filter(line => line.trim() !== '').map((line, bIdx) => (
                              <li key={bIdx}>{line}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed whitespace-pre-wrap">
                            {block.paragraph}
                          </p>
                        )
                      )}
                      {/* Bullet list support in content blocks */}
                      {block.bullets && block.bullets.length > 0 && (
                        <ul className="list-disc list-outside mt-3 text-[16px] md:text-[18px] lg:text-[20px] space-y-2 ml-6 leading-relaxed">
                          {block.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* IMAGE SECTION — smaller, contained size */}
                  {block.type === 'image' && block.url && (
                    <div className="w-full flex justify-center">
                      <img
                        src={block.url}
                        alt="Case study content"
                        className="max-w-2xl w-full max-h-[480px] rounded-2xl shadow-lg object-contain"
                      />
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-6 lg:py-10">
                      <div className={`flex flex-col justify-center ${block.imagePosition === 'left' ? 'lg:order-2 order-2' : 'lg:order-1 order-2'}`}>
                        {block.subheading && (
                          <h3 className="multiverse-text font-bold text-[32px] md:text-[40px] leading-[40px] lg:leading-[48px] mb-6 break-words">
                            {block.subheading}
                          </h3>
                        )}
                        {block.paragraph && (
                          block.isList ? (
                            <ul className="list-disc list-outside mt-3 text-[#1a1a1a] text-[18px] md:text-[20px] lg:text-[22px] leading-[32px] space-y-3 ml-6 font-medium opacity-90 break-words">
                              {block.paragraph.split('\n').filter(line => line.trim() !== '').map((line, bIdx) => (
                                <li key={bIdx}>{line}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-[#1a1a1a] text-[18px] md:text-[20px] lg:text-[22px] leading-[32px] whitespace-pre-wrap break-words opacity-90 font-medium">
                              {block.paragraph}
                            </p>
                          )
                        )}
                      </div>
                      {block.url && (
                        <div className={`w-full flex justify-center ${block.imagePosition === 'left' ? 'lg:order-1 order-1' : 'lg:order-2 order-1'}`}>
                          <div className="relative group w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            <img
                              src={block.url}
                              alt={block.subheading || "Case study split content"}
                              className="w-full max-h-[600px] rounded-[32px] shadow-2xl object-cover relative z-10 border border-black/5 dark:border-white/10"
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

      {/* Related Works section */}
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
