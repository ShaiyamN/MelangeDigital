import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Navbar, Footer, BreadCrumbs, BlogCatg } from "../layout";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => { getDocs(collection(db, "blogs")).then((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))).catch((error) => console.error("Error loading blogs:", error)); }, []);
  const visiblePosts = useMemo(() => posts.filter((post) => !selectedCategory || (post.categories || [post.category]).includes(selectedCategory)).sort((a, b) => new Date(b.datePublished || b.date || 0) - new Date(a.datePublished || a.date || 0)), [posts, selectedCategory]);
  return <div className="font-nunito"><Helmet><title>Blog & Insights | Mélange Digital</title><link rel="canonical" href="https://melangedigital.co/blogs" /></Helmet><Navbar /><div className="font-nunito lg:pt-32 pt-24 text-body lg:px-20 px-5 mb-6 max-container"><BreadCrumbs breadcrumbs={[{ displayName: "Home", url: "/" }, { displayName: "Blogs", url: "/blogs" }]} /></div><div className="pb-10 lg:px-[80px] px-5 max-container"><h2 className="font-semibold text-hero font-display pt-10 pb-2">Mélange Blogs</h2><p className="font-normal text-base sm:text-xl mt-3">Insights, ideas, and stories from our team.</p></div><div className="lg:px-[80px] lg:pb-section-y px-5 py-10 max-container"><BlogCatg handleCategorySelect={setSelectedCategory} /><div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-[30px] lg:gap-y-10 gap-y-[30px]">{visiblePosts.map((post) => <article key={post.id} className="bg-white shadow rounded-[10px] overflow-hidden"><Link to={`/blogs/${post.slug}`}>{post.image && <img className="w-full aspect-video object-cover" src={post.image} alt={post.altText || post.title} loading="lazy" />}</Link><div className="py-5 px-4"><p className="text-stone-400 text-base">{(post.categories || [post.category]).filter(Boolean).join(" · ")} {post.date && `· ${post.date}`}</p><Link to={`/blogs/${post.slug}`}><h2 className="headText line-clamp-2 text-xl multiColor font-bold mt-2">{post.title}</h2></Link><p className="text-stone-400 line-clamp-2 text-sm mt-2">{post.description}</p></div></article>)}</div>{!visiblePosts.length && <p className="text-center py-12">No blogs have been published yet.</p>}</div><Footer /></div>;
};
export default Blogs;
