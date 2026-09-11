import React, { useEffect, useMemo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Navbar, Footer, BreadCrumbs, BlogCatg } from "../layout";

const categoryMap = {
  "content-marketing": "Content Marketing",
  "brand-strategy": "Brand Strategy",
  "ecommerce-management": "E-commerce Management",
  "design-solutions": "Design Solutions",
  "performance-marketing": "Performance Marketing",
  "website-development-seo": "Website Development & SEO",
  "influencer-marketing": "Influencer Marketing",
  "design-development": "Design & Development",
  "design-dev": "Design & Development",
  "content-strategy": "Content Strategy",
  "storytelling": "Storytelling",
  "ips-pr": "PR, IPs & Outreach",
  "pr": "IPs & PR",
  "aeo-seo": "AEO & SEO",
  "ecommerce": "E-Commerce",
};

const formatCategory = (cat) => {
  if (!cat) return "";
  return categoryMap[cat] || cat.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getDocs(collection(db, "blogs"))
      .then((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error("Error loading blogs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const availableCategories = useMemo(() => {
    const catSet = new Set();
    posts.forEach((post) => {
      const cats = post.categories || (post.category ? [post.category] : []);
      cats.forEach((c) => {
        if (c && typeof c === "string" && c.trim()) {
          catSet.add(c.trim());
        }
      });
    });
    return Array.from(catSet);
  }, [posts]);

  const visiblePosts = useMemo(() => {
    return posts
      .filter((post) => {
        if (!selectedCategory || selectedCategory === "all") return true;
        const postCats = post.categories || (post.category ? [post.category] : []);
        return postCats.includes(selectedCategory);
      })
      .sort((a, b) => {
        const dateA = new Date(a.datePublished || a.date || 0).getTime();
        const dateB = new Date(b.datePublished || b.date || 0).getTime();
        return dateB - dateA;
      });
  }, [posts, selectedCategory]);

  // Safely inform Lenis once when blogs finish loading or category changes
  useEffect(() => {
    if (!loading) {
      const id = requestAnimationFrame(() => {
        window.__melangeLenis?.resize();
      });
      return () => cancelAnimationFrame(id);
    }
  }, [loading, visiblePosts.length]);

  return (
    <div className="font-nunito min-h-screen flex flex-col bg-[#fafafa]">
      <Helmet>
        <title>Blog &amp; Insights | Mélange Digital</title>
        <meta
          name="description"
          content="Insights, ideas, and stories from the Mélange Digital team on travel marketing, creator economy, brand strategy, and technology."
        />
        <link rel="canonical" href="https://melangedigital.co/blogs" />
        <meta property="og:title" content="Blog & Insights | Mélange Digital" />
        <meta
          property="og:description"
          content="Insights, ideas, and stories from the Mélange Digital team."
        />
        <meta property="og:url" content="https://melangedigital.co/blogs" />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="lg:pt-32 pt-24 text-body lg:px-20 px-5 mb-4 max-container">
          <BreadCrumbs
            breadcrumbs={[
              { displayName: "Home", url: "/" },
              { displayName: "Blogs", url: "/blogs" },
            ]}
          />
        </div>

        {/* Hero Section */}
        <div className="pb-8 lg:px-[80px] px-5 max-container">
          <h1 className="font-semibold text-hero font-display pt-6 pb-2 text-zinc-900">
            Mélange Blogs
          </h1>
          <p className="font-normal text-base sm:text-xl mt-2 text-zinc-600 max-w-2xl">
            Insights, ideas, and stories on digital growth, brand building, and tourism from our team.
          </p>
        </div>

        {/* Content Section */}
        <div ref={contentRef} className="lg:px-[80px] px-5 pt-6 max-container relative">
          {/* Loading State */}
          {loading ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-[30px] lg:gap-y-10 gap-y-[30px]">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-[14px] overflow-hidden border border-zinc-200/80 animate-pulse shadow-sm"
                >
                  <div className="w-full aspect-video bg-zinc-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-zinc-200 rounded w-1/3" />
                    <div className="h-6 bg-zinc-200 rounded w-4/5" />
                    <div className="h-4 bg-zinc-200 rounded w-full" />
                    <div className="h-4 bg-zinc-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : visiblePosts.length > 0 ? (
            /* Blog Grid */
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-[30px] lg:gap-y-10 gap-y-[30px]">
              {visiblePosts.map((post) => {
                const categoryList = (post.categories || (post.category ? [post.category] : []))
                  .filter(Boolean)
                  .map(formatCategory);

                return (
                  <article
                    key={post.id}
                    className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-[14px] overflow-hidden border border-zinc-200/80 flex flex-col group"
                  >
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="block overflow-hidden relative aspect-video bg-zinc-100"
                    >
                      {post.image ? (
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none"
                          src={post.image}
                          alt={post.altText || post.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/10 to-indigo-600/10 text-purple-600 font-semibold text-lg">
                          Mélange Digital
                        </div>
                      )}
                    </Link>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5 flex-wrap">
                        {categoryList.length > 0 && (
                          <span className="text-purple-600 font-bold">
                            {categoryList.join(" · ")}
                          </span>
                        )}
                        {post.date && categoryList.length > 0 && <span>•</span>}
                        {post.date && <span>{post.date}</span>}
                      </div>

                      <Link to={`/blogs/${post.slug}`} className="group-hover:text-purple-600 transition-colors">
                        <h2 className="line-clamp-2 text-xl font-bold text-zinc-900 group-hover:text-purple-600 transition-colors leading-snug">
                          {post.title}
                        </h2>
                      </Link>

                      {post.description && (
                        <p className="text-zinc-600 line-clamp-2 text-sm mt-2.5 leading-relaxed flex-1">
                          {post.description}
                        </p>
                      )}

                      <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-sm font-semibold text-purple-600">
                        <Link
                          to={`/blogs/${post.slug}`}
                          className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all text-purple-600 hover:text-purple-700"
                        >
                          Read Article
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">No articles found</h3>
              <p className="text-zinc-500 max-w-md mx-auto text-sm">
                {selectedCategory
                  ? "There are no published articles under this category yet. Try selecting another category."
                  : "No blog posts have been published yet."}
              </p>
              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="mt-5 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold text-sm transition-colors cursor-pointer"
                >
                  View All Categories
                </button>
              )}
            </div>
          )}

          {/* Category Filter Dock Section: floats above bottom during scroll, lands below cards with equal padding */}
          <div className="sticky bottom-6 lg:bottom-8 z-30 my-10 lg:my-14 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <BlogCatg
                categories={availableCategories}
                handleCategorySelect={setSelectedCategory}
                activeCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
