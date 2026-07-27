import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Edit2, X, Sun, Moon, Image as ImageIcon, Calendar, User, AlignLeft, Tag, BookOpen, Check, Table, PlusCircle, LayoutTemplate, Type, FileText, Target, Video, ArrowUp, ArrowDown } from "lucide-react";
import CloudinaryUpload from "./CloudinaryUpload";

const ManageBlogs = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("admin-theme") || "light");
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [breadcrumbTitle, setBreadcrumbTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("Mélange Digital");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("content-strategy"); // Legacy
  const [categories, setCategories] = useState(["content-strategy"]);
  // SEO State
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeywords, setFocusKeywords] = useState("");
  const [altText, setAltText] = useState("");

  // Content Sections
  const [sections, setSections] = useState([]);

  // Comparison Table
  const [hasTable, setHasTable] = useState(false);
  const [tableHeaders, setTableHeaders] = useState(["Column 1", "Column 2"]);
  const [tableRows, setTableRows] = useState([["", ""]]);
  const [contentBlocks, setContentBlocks] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin/login");
      } else {
        setUser(currentUser);
        fetchBlogs();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("admin-theme", newTheme);
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsList);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!editingBlog) {
      setSlug(slugify(val));
    }
  };

  const handleOpenAddModal = () => {
    setEditingBlog(null);
    setTitle("");
    setBreadcrumbTitle("");
    setSlug("");
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    setDate(new Date().toLocaleDateString("en-US", options));
    setAuthor("Mélange Digital");
    setDescription("");
    setContent("");
    setImage("");
    setCategory("content-strategy");
    setCategories(["content-strategy"]);
    // Reset new fields
    setSeoTitle("");
    setMetaDescription("");
    setFocusKeywords("");
    setAltText("");
    setSections([]);
    setHasTable(false);
    setTableHeaders(["Column 1", "Column 2"]);
    setTableRows([["", ""]]);
    setContentBlocks([]);

    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setEditingBlog(blog);
    setTitle(blog.title || "");
    setBreadcrumbTitle(blog.breadcrumbTitle || "");
    setSlug(blog.slug || "");
    setDate(blog.date || "");
    setAuthor(blog.author || "Mélange Digital");
    setDescription(blog.description || "");
    setContent(blog.content || "");
    setImage(blog.image || "");
    setCategory(blog.category || "content-strategy");
    
    // Load new fields
    setCategories(blog.categories || (blog.category ? [blog.category] : ["content-strategy"]));
    setSeoTitle(blog.seoTitle || "");
    setMetaDescription(blog.metaDescription || "");
    setFocusKeywords(blog.focusKeywords || "");
    setAltText(blog.altText || "");
    setSections(blog.sections || []);
    setHasTable(blog.hasTable || false);
    setTableHeaders(blog.tableHeaders || ["Column 1", "Column 2"]);
    setTableRows(blog.tableRows ? blog.tableRows.map(row => Array.isArray(row) ? row : row.cells || []) : [["", ""]]);
    setContentBlocks(blog.contentBlocks || []);

    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const blogData = {
      title,
      breadcrumbTitle,
      slug: slugify(slug) || slugify(title),
      date,
      author,
      description,
      content,
      image,
      category: categories.length > 0 ? categories[0] : category, // Fallback for old code
      categories,
      seoTitle,
      metaDescription,
      focusKeywords,
      altText,
      sections,
      hasTable,
      tableHeaders,
      tableRows: tableRows.map(row => ({ cells: row })),
      contentBlocks
    };

    try {
      if (editingBlog) {
        const blogRef = doc(db, "blogs", editingBlog.id);
        await updateDoc(blogRef, blogData);
      } else {
        await addDoc(collection(db, "blogs"), blogData);
      }
      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
    }
  };

  const handleDelete = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await deleteDoc(doc(db, "blogs", blogId));
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // --- Helper Functions for Complex State ---
  const toggleCategory = (catValue) => {
    setCategories((prev) => 
      prev.includes(catValue) ? prev.filter((c) => c !== catValue) : [...prev, catValue]
    );
  };

  const addSection = () => {
    setSections([...sections, { id: Date.now().toString(), subheading: "", paragraph: "" }]);
  };

  const updateSection = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const removeSection = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const addTableRow = () => {
    setTableRows([...tableRows, Array(tableHeaders.length).fill("")]);
  };

  const addTableColumn = () => {
    setTableHeaders([...tableHeaders, `Column ${tableHeaders.length + 1}`]);
    setTableRows(tableRows.map(row => [...row, ""]));
  };

  const updateTableHeader = (colIndex, value) => {
    const newHeaders = [...tableHeaders];
    newHeaders[colIndex] = value;
    setTableHeaders(newHeaders);
  };

  const updateTableCell = (rowIndex, colIndex, value) => {
    const newRows = [...tableRows];
    newRows[rowIndex][colIndex] = value;
    setTableRows(newRows);
  };

  const removeTableColumn = (colIndex) => {
    if (tableHeaders.length <= 1) return;
    const newHeaders = [...tableHeaders];
    newHeaders.splice(colIndex, 1);
    setTableHeaders(newHeaders);
    setTableRows(tableRows.map(row => {
      const newRow = [...row];
      newRow.splice(colIndex, 1);
      return newRow;
    }));
  };

  const removeTableRow = (rowIndex) => {
    if (tableRows.length <= 1) return;
    const newRows = [...tableRows];
    newRows.splice(rowIndex, 1);
    setTableRows(newRows);
  };

  const addContentBlock = (type) => {
    let newBlock = { id: Date.now().toString(), type };
    if (type === "section") {
      newBlock = { ...newBlock, subheading: "", paragraph: "" };
    } else if (type === "image") {
      newBlock = { ...newBlock, url: "" };
    } else if (type === "video") {
      newBlock = { ...newBlock, url: "" };
    } else if (type === "split") {
      newBlock = { ...newBlock, subheading: "", paragraph: "", url: "", imagePosition: "right" };
    }
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const removeContentBlock = (index) => {
    const copy = [...contentBlocks];
    copy.splice(index, 1);
    setContentBlocks(copy);
  };

  const updateContentBlock = (index, field, value) => {
    const copy = [...contentBlocks];
    copy[index][field] = value;
    setContentBlocks(copy);
  };

  const moveContentBlock = (index, direction) => {
    if (direction === -1 && index === 0) return;
    if (direction === 1 && index === contentBlocks.length - 1) return;
    const copy = [...contentBlocks];
    const temp = copy[index];
    copy[index] = copy[index + direction];
    copy[index + direction] = temp;
    setContentBlocks(copy);
  };



  return (
    <div className={`${theme} min-h-screen font-bricolage bg-slate-50 text-slate-800 dark:bg-[#090914] dark:text-white transition-colors duration-500`}>
      
      {/* Sticky Header with Glassmorphism */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#090914]/70 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/5 transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/admin/dashboard" 
              className="p-2 sm:p-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all shadow-sm hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Manage Blogs
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">Write, edit, and publish articles</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button 
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" /> <span className="hidden sm:inline">Write Article</span><span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-purple-200 dark:border-purple-900 border-t-purple-600 dark:border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-24 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-slate-200/80 dark:border-white/10 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-purple-50 dark:bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No blogs published yet</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Create your first article to share insights with the world.</p>
            <button onClick={handleOpenAddModal} className="px-6 py-3 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 font-bold rounded-xl hover:bg-purple-200 dark:hover:bg-purple-500/30 transition-colors">
              Write First Article
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                className="group flex flex-col bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:border-purple-300 dark:hover:border-purple-500/30 shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span className="text-sm font-medium">No cover image</span>
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-lg text-xs font-bold text-purple-700 dark:text-purple-300 border border-slate-200/50 dark:border-white/10 shadow-sm uppercase tracking-wider">
                      {blog.category.replace("-", " ")}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                    <h3 className="font-bold text-xl leading-tight mb-3 text-slate-900 dark:text-white line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-5 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleOpenEditModal(blog)}
                        className="p-2.5 bg-slate-50 hover:bg-purple-50 dark:bg-white/5 dark:hover:bg-purple-500/20 rounded-xl text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
                        title="Edit Blog"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
                        className="p-2.5 bg-slate-50 hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 rounded-xl text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                        title="Delete Blog"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Form */}
        {isModalOpen && (
          <div data-lenis-prevent="true" className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md flex justify-center items-start sm:items-center overflow-y-auto z-[100] p-0 sm:p-4 md:p-6">
            <div className="bg-white dark:bg-[#0c0c1e] sm:rounded-[2.5rem] w-full min-h-screen sm:min-h-0 sm:max-w-5xl shadow-2xl relative text-slate-800 dark:text-white flex flex-col sm:max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
              
              {/* Modal Header */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  {editingBlog ? "Edit Article" : "Write New Article"}
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2.5 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 rounded-xl text-slate-500 dark:text-slate-300 transition-colors shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <form id="blog-form" onSubmit={handleSave} className="space-y-8">
                  
                  {/* Banner Upload Section */}
                  <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5">
                    <CloudinaryUpload 
                      label="Article Banner Image" 
                      currentImageUrl={image} 
                      onUploadSuccess={setImage} 
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-6">
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <AlignLeft className="w-4 h-4 text-purple-500" /> Article Title
                        </label>
                        <input
                          type="text"
                          required
                          value={title}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-white dark:focus:bg-black/40 transition-all font-medium"
                          placeholder="e.g. The rise of creator storefronts"
                        />
                      </div>

                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <Tag className="w-4 h-4 text-purple-500" /> Breadcrumb Title (Short Name)
                        </label>
                        <input
                          type="text"
                          value={breadcrumbTitle}
                          onChange={(e) => setBreadcrumbTitle(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-white dark:focus:bg-black/40 transition-all font-medium"
                          placeholder="e.g. Creator Storefronts (Optional)"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          URL Slug
                        </label>
                        <input
                          type="text"
                          required
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-white dark:focus:bg-black/40 transition-all font-mono text-sm"
                          placeholder="the-rise-of-creator-storefronts"
                        />
                      </div>
                      

                      
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-3">
                          <Tag className="w-4 h-4 text-indigo-500" /> Categories
                        </label>
                        <div className="flex flex-wrap gap-4 p-4 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl">
                          {[
                            { id: "brand-strategy", label: "Brand Strategy" },
                            { id: "influencer-marketing", label: "Influencer Marketing" },
                            { id: "design-development", label: "Design & Development" },
                            { id: "content-strategy", label: "Content Strategy" },
                            { id: "ips-pr", label: "PR, IPs & Outreach" },
                            { id: "aeo-seo", label: "AEO & SEO" },
                            { id: "ecommerce", label: "E-Commerce" }
                          ].map(cat => (
                            <label key={cat.id} className="flex items-center gap-2 cursor-pointer group/cb">
                              <div className={`w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border transition-all ${categories.includes(cat.id) ? 'bg-indigo-500 border-indigo-500' : 'border-slate-300 dark:border-slate-600 group-hover/cb:border-indigo-400'}`}>
                                {categories.includes(cat.id) && <Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                              <span className="text-sm font-medium leading-tight text-slate-700 dark:text-slate-300 group-hover/cb:text-indigo-600 dark:group-hover/cb:text-indigo-400 transition-colors whitespace-nowrap">{cat.label}</span>
                              <input type="checkbox" className="hidden" checked={categories.includes(cat.id)} onChange={() => toggleCategory(cat.id)} />
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <Calendar className="w-4 h-4 text-emerald-500" /> Publish Date
                        </label>
                        <input
                          type="text"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 focus:bg-white dark:focus:bg-black/40 transition-all font-medium"
                          placeholder="e.g. Dec 2, 2025"
                        />
                      </div>
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <User className="w-4 h-4 text-blue-500" /> Author Name
                        </label>
                        <input
                          type="text"
                          required
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white dark:focus:bg-black/40 transition-all font-medium"
                          placeholder="e.g. Mélange Digital"
                        />
                      </div>
                      
                      <div className="relative group">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          Short Description <span className="text-xs text-slate-400 font-normal">(SEO & Card)</span>
                        </label>
                        <textarea
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-white dark:focus:bg-black/40 transition-all resize-none font-medium"
                          placeholder="Provide a compelling 2-line summary..."
                        />
                      </div>
                    </div>
                  </div>
                  {/* SEO Section */}
                  <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      <Tag className="w-5 h-5 text-indigo-500" /> SEO Optimization
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-6">
                        <div className="relative group">
                          <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Title Tag (Optional)</label>
                          <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full px-4 py-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white" placeholder="Leaves empty to use Article Title" />
                        </div>
                        <div className="relative group">
                          <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Focus Keywords</label>
                          <input type="text" value={focusKeywords} onChange={(e) => setFocusKeywords(e.target.value)} className="w-full px-4 py-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white" placeholder="e.g. digital marketing, seo, growth..." />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="relative group">
                          <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Meta Description (Optional)</label>
                          <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={5} className="w-full px-4 py-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white resize-none" placeholder="150-160 characters summary for search engines. Leaves empty to use Short Description." />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="relative group">
                    <label className="flex justify-between items-end text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                      <span>Full Blog Content</span>
                      <span className="text-xs font-mono font-normal text-slate-400 px-2 py-1 bg-slate-100 dark:bg-white/5 rounded-md">Supports HTML</span>
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={14}
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 focus:bg-white dark:focus:bg-black/60 transition-all font-mono text-sm leading-relaxed custom-scrollbar shadow-inner"
                      placeholder="<p>Start writing your amazing article here...</p>"
                    />
                  </div>

                  {/* Dynamic Sections Builder */}
                  <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <LayoutTemplate className="w-5 h-5 text-emerald-500" /> Content Sections
                      </h3>
                      <button type="button" onClick={addSection} className="flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-500/30 transition-colors text-sm font-bold">
                        <PlusCircle className="w-4 h-4" /> Add Section
                      </button>
                    </div>
                    {sections.map((section, idx) => (
                      <div key={section.id} className="p-5 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl relative group/sec space-y-4">
                        <button type="button" onClick={() => removeSection(idx)} className="absolute top-4 right-4 p-1.5 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-lg opacity-0 group-hover/sec:opacity-100 transition-opacity hover:bg-red-100 dark:hover:bg-red-500/20">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="pr-8 flex gap-4">
                          <div className="flex-1">
                            <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-bold mb-2 uppercase tracking-wider">Section Subheading</label>
                            <input type="text" value={section.subheading} onChange={(e) => updateSection(idx, "subheading", e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white font-semibold" placeholder="e.g. Introduction" />
                          </div>
                          <div className="w-32">
                            <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-bold mb-2 uppercase tracking-wider">Level</label>
                            <select value={section.headingLevel || 'h2'} onChange={(e) => updateSection(idx, "headingLevel", e.target.value)} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white font-semibold cursor-pointer outline-none">
                              <option value="h2">H2 (Main)</option>
                              <option value="h3">H3 (Sub)</option>
                              <option value="h4">H4 (Minor)</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-bold mb-2 uppercase tracking-wider">Paragraph Content</label>
                          <textarea value={section.paragraph} onChange={(e) => updateSection(idx, "paragraph", e.target.value)} rows={4} className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 dark:text-white resize-y custom-scrollbar" placeholder="Section content..." />
                        </div>
                      </div>
                    ))}
                    {sections.length === 0 && (
                      <p className="text-slate-500 dark:text-slate-400 text-sm text-center italic">No sections added. You can use sections instead of or alongside the Full Blog Content above.</p>
                    )}
                  </div>

                  {/* Comparison Table Builder */}
                  <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <Table className="w-5 h-5 text-blue-500" /> Comparison Table
                      </h3>
                      <button type="button" onClick={() => setHasTable(!hasTable)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${hasTable ? 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-500/30' : 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-500/30'}`}>
                        {hasTable ? "Remove Table" : <><PlusCircle className="w-4 h-4" /> Enable Table</>}
                      </button>
                    </div>
                    {hasTable && (
                      <div className="overflow-x-auto custom-scrollbar border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-black/40">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr>
                              {tableHeaders.map((header, cIdx) => (
                                <th key={cIdx} className="p-3 border-b border-r border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 min-w-[150px]">
                                  <div className="flex items-center justify-between gap-2">
                                    <input type="text" value={header} onChange={(e) => updateTableHeader(cIdx, e.target.value)} className="w-full bg-transparent border-none focus:ring-0 p-0 text-slate-800 dark:text-white font-bold text-sm" placeholder="Header..." />
                                    {tableHeaders.length > 1 && (
                                      <button type="button" onClick={() => removeTableColumn(cIdx)} className="text-red-400 hover:text-red-600">
                                        <X className="w-4 h-4" />
                                      </button>
                                    )}
                                  </div>
                                </th>
                              ))}
                              <th className="p-3 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 w-[50px]">
                                <button type="button" onClick={addTableColumn} className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 dark:bg-blue-500/20 dark:text-blue-400">
                                  <Plus className="w-4 h-4" />
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableRows.map((row, rIdx) => (
                              <tr key={rIdx} className="group/tr">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-0 border-b border-r border-slate-200 dark:border-white/10">
                                    <textarea value={cell} onChange={(e) => updateTableCell(rIdx, cIdx, e.target.value)} rows={2} className="w-full h-full bg-transparent border-none focus:ring-1 focus:ring-blue-500 p-3 text-slate-700 dark:text-slate-300 text-sm resize-none" placeholder="Data..." />
                                  </td>
                                ))}
                                <td className="p-3 border-b border-slate-200 dark:border-white/10 text-center">
                                  {tableRows.length > 1 && (
                                    <button type="button" onClick={() => removeTableRow(rIdx)} className="p-1.5 text-slate-400 hover:text-red-500 opacity-0 group-hover/tr:opacity-100 transition-opacity">
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td colSpan={tableHeaders.length + 1} className="p-3 text-center bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                                <button type="button" onClick={addTableRow} className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mx-auto">
                                  <PlusCircle className="w-4 h-4" /> Add Row
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Content Builder */}
                  <div className="mt-8 bg-slate-50 dark:bg-black/20 border border-slate-200/80 dark:border-white/5 p-6 rounded-2xl">
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                          <LayoutTemplate className="w-5 h-5 text-indigo-500" /> Dynamic Content Blocks
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add text sections, photos, videos, and split-screens</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={() => addContentBlock('section')} className="text-xs font-bold px-3 py-1.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-500/30">+ Text</button>
                        <button type="button" onClick={() => addContentBlock('image')} className="text-xs font-bold px-3 py-1.5 bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-500/30">+ Image</button>
                        <button type="button" onClick={() => addContentBlock('video')} className="text-xs font-bold px-3 py-1.5 bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-500/30">+ Video</button>
                        <button type="button" onClick={() => addContentBlock('split')} className="text-xs font-bold px-3 py-1.5 bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-500/30">+ Split Screen</button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {contentBlocks.map((block, idx) => (
                        <div key={block.id} className="relative p-4 bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl">
                          <div className="absolute top-2 right-2 flex gap-1">
                            <button type="button" onClick={() => moveContentBlock(idx, -1)} disabled={idx === 0} className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30"><ArrowUp className="w-4 h-4" /></button>
                            <button type="button" onClick={() => moveContentBlock(idx, 1)} disabled={idx === contentBlocks.length - 1} className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30"><ArrowDown className="w-4 h-4" /></button>
                            <button type="button" onClick={() => removeContentBlock(idx)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/20 rounded"><Trash2 className="w-4 h-4" /></button>
                          </div>

                          {block.type === 'section' && (
                            <div className="space-y-3 pt-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-indigo-500 flex items-center gap-1"><LayoutTemplate className="w-4 h-4" /> Text Section</span>
                                <select value={block.headingLevel || 'h2'} onChange={(e) => updateContentBlock(idx, 'headingLevel', e.target.value)} className="px-2 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 outline-none">
                                  <option value="h2">H2 (Main)</option>
                                  <option value="h3">H3 (Sub)</option>
                                  <option value="h4">H4 (Minor)</option>
                                </select>
                              </div>
                              <input type="text" value={block.subheading || ''} onChange={(e) => updateContentBlock(idx, 'subheading', e.target.value)} placeholder="Subheading (optional)" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
                              <textarea value={block.paragraph || ''} onChange={(e) => updateContentBlock(idx, 'paragraph', e.target.value)} placeholder="Paragraph content" rows="3" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 custom-scrollbar"></textarea>
                              <label className="flex items-center gap-2 mt-2 cursor-pointer w-fit">
                                <input type="checkbox" checked={block.isList || false} onChange={(e) => updateContentBlock(idx, 'isList', e.target.checked)} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Format text as bullet list (each new line is a bullet point)</span>
                              </label>
                            </div>
                          )}

                          {block.type === 'image' && (
                            <div className="space-y-3 pt-4">
                              <div className="text-xs font-bold text-pink-500 flex items-center gap-1 mb-2"><ImageIcon className="w-4 h-4" /> Image Upload</div>
                              <CloudinaryUpload onUploadSuccess={(url) => updateContentBlock(idx, 'url', url)} currentImageUrl={block.url} label="Upload Image Block" />
                            </div>
                          )}

                          {block.type === 'video' && (
                            <div className="space-y-3 pt-4">
                              <div className="text-xs font-bold text-orange-500 flex items-center gap-1 mb-2"><Video className="w-4 h-4" /> Video Link</div>
                              <input type="url" value={block.url || ''} onChange={(e) => updateContentBlock(idx, 'url', e.target.value)} placeholder="Paste YouTube or Drive video link here..." className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500" />
                            </div>
                          )}

                          {block.type === 'split' && (
                            <div className="space-y-3 pt-4">
                              <div className="text-xs font-bold text-teal-500 flex items-center justify-between gap-1 mb-2">
                                <span className="flex items-center gap-1"><LayoutTemplate className="w-4 h-4" /> Split Screen (Text & Image)</span>
                                <div className="flex items-center gap-2">
                                  <select value={block.headingLevel || 'h2'} onChange={(e) => updateContentBlock(idx, 'headingLevel', e.target.value)} className="px-2 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 outline-none">
                                    <option value="h2">H2</option>
                                    <option value="h3">H3</option>
                                    <option value="h4">H4</option>
                                  </select>
                                  <select value={block.imagePosition || 'right'} onChange={(e) => updateContentBlock(idx, 'imagePosition', e.target.value)} className="px-2 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 outline-none">
                                    <option value="right">Img Right</option>
                                    <option value="left">Img Left</option>
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <input type="text" value={block.subheading || ''} onChange={(e) => updateContentBlock(idx, 'subheading', e.target.value)} placeholder="Subheading" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-teal-500" />
                                  <textarea value={block.paragraph || ''} onChange={(e) => updateContentBlock(idx, 'paragraph', e.target.value)} placeholder="Text Content" rows="5" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-teal-500 custom-scrollbar"></textarea>
                                  <label className="flex items-center gap-2 cursor-pointer w-fit">
                                    <input type="checkbox" checked={block.isList || false} onChange={(e) => updateContentBlock(idx, 'isList', e.target.checked)} className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer" />
                                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Format as bullet list</span>
                                  </label>
                                </div>
                                <div className="border border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-3 bg-slate-50/50 dark:bg-white/5 flex flex-col justify-center">
                                  <CloudinaryUpload onUploadSuccess={(url) => updateContentBlock(idx, 'url', url)} currentImageUrl={block.url} label="Upload Image" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Modal Footer (Sticky) */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 backdrop-blur-md flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-auto">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-300 font-bold transition-all w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  form="blog-form"
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  {editingBlog ? "Save Changes" : "Publish Article"}
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManageBlogs;
