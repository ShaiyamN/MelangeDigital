import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, writeBatch } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, Plus, Trash2, Edit2, X, Info, Sun, Moon,
  Image as ImageIcon, Briefcase, Tag, Target, TrendingUp,
  Layers, FolderGit, LayoutTemplate, Video, ExternalLink,
  Bold, GripVertical, Home, Briefcase as WorkIcon, ArrowUp, ArrowDown
} from "lucide-react";
import CloudinaryUpload from "./CloudinaryUpload";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ─── Sortable Card Component ──────────────────────────────────────────────────
const SortableCard = ({ cs, cardIdx, total, reorderMode, onEdit, onDelete, isDragOverlay = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: cs.id, disabled: !reorderMode });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
    zIndex: isDragging ? 50 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group flex flex-col bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 dark:shadow-none transition-all duration-200
        ${reorderMode ? "ring-2 ring-amber-300 dark:ring-amber-500/40 hover:ring-amber-400 dark:hover:ring-amber-400/60" : "hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1"}
        ${isDragOverlay ? "shadow-2xl rotate-1 scale-105 ring-2 ring-amber-400" : ""}
      `}
    >
      <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {cs.bannerImage ? (
          <img src={cs.bannerImage} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
            <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-sm font-medium">No cover image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Position badge */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-xs font-bold text-white">
            #{cardIdx + 1}
          </span>
        </div>

        {/* Drag handle — only visible in reorder mode */}
        {reorderMode && (
          <div
            {...attributes}
            {...listeners}
            className="absolute top-4 left-4 w-9 h-9 bg-amber-500/90 hover:bg-amber-500 backdrop-blur-md rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing text-white shadow-lg transition-all"
            title="Drag to reorder"
          >
            <GripVertical className="w-5 h-5" />
          </div>
        )}

        {!reorderMode && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[75%]">
            {cs.services?.slice(0, 2).map((srv, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-lg text-xs font-bold text-blue-700 dark:text-blue-300 border border-slate-200/50 dark:border-white/10 shadow-sm truncate max-w-[120px]">
                {srv}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-bold text-lg leading-tight mb-2 text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {cs.title}
          </h3>
          {!reorderMode && (
            <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed">
              {cs.intro}
            </p>
          )}
          {reorderMode && (
            <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mt-1 flex items-center gap-1">
              <GripVertical className="w-3 h-3" /> Drag to reorder
            </p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4 mt-4">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md truncate max-w-[130px]">
            /{cs.slug}
          </span>
          {!reorderMode && (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a
                href={`/work/${cs.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-50 hover:bg-emerald-50 dark:bg-white/5 dark:hover:bg-emerald-500/20 rounded-xl text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                title="View Live"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => onEdit(cs)}
                className="p-2 bg-slate-50 hover:bg-blue-50 dark:bg-white/5 dark:hover:bg-blue-500/20 rounded-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                title="Edit Case Study"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(cs.id)}
                className="p-2 bg-slate-50 hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 rounded-xl text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                title="Delete Case Study"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
          {reorderMode && cs.showOnHome && (
            <span className="text-[10px] font-bold px-2 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-lg flex items-center gap-1">
              <Home className="w-3 h-3" /> On Home
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ManageCaseStudies = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("admin-theme") || "light");
  const [caseStudies, setCaseStudies] = useState([]);   // Work page order
  const [homeCaseStudies, setHomeCaseStudies] = useState([]); // Home page order (showOnHome only)
  const [editingCase, setEditingCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // reorderMode: null | 'work' | 'home'
  const [reorderMode, setReorderMode] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [savingOrder, setSavingOrder] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [breadcrumbTitle, setBreadcrumbTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [intro, setIntro] = useState("");
  const [services, setServices] = useState([""]);
  const [stats, setStats] = useState([{ value: "", label: "" }]);
  const [approach, setApproach] = useState([{ title: "", steps: [""] }]);
  const [results, setResults] = useState([""]);
  const [filters, setFilters] = useState(["all"]);
  const [contentBlocks, setContentBlocks] = useState([]);
  const [showOnHome, setShowOnHome] = useState(false);

  const navigate = useNavigate();

  // DnD sensors
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin/login");
      } else {
        setUser(currentUser);
        fetchCaseStudies();
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

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "casestudies"));
      const list = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));

      // Work page order — sorted by sortOrder, fallback createdAt
      const workSorted = [...list].sort((a, b) => {
        if (a.sortOrder !== undefined && b.sortOrder !== undefined) return a.sortOrder - b.sortOrder;
        if (a.sortOrder !== undefined) return -1;
        if (b.sortOrder !== undefined) return 1;
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      });
      setCaseStudies(workSorted);

      // Home page order — only showOnHome items, sorted by homeOrder, fallback sortOrder
      const homeItems = list.filter(cs => cs.showOnHome);
      homeItems.sort((a, b) => {
        if (a.homeOrder !== undefined && b.homeOrder !== undefined) return a.homeOrder - b.homeOrder;
        if (a.homeOrder !== undefined) return -1;
        if (b.homeOrder !== undefined) return 1;
        if (a.sortOrder !== undefined && b.sortOrder !== undefined) return a.sortOrder - b.sortOrder;
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      });
      setHomeCaseStudies(homeItems);
    } catch (err) {
      console.error("Error fetching case studies:", err);
    } finally {
      setLoading(false);
    }
  };

  // ── DnD handlers ──────────────────────────────────────────────────────────
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    if (reorderMode === 'work') {
      const oldIndex = caseStudies.findIndex(cs => cs.id === active.id);
      const newIndex = caseStudies.findIndex(cs => cs.id === over.id);
      const newOrder = arrayMove(caseStudies, oldIndex, newIndex);
      const updated = newOrder.map((cs, i) => ({ ...cs, sortOrder: i }));
      setCaseStudies(updated);
      await persistOrder(updated, 'sortOrder');
    } else if (reorderMode === 'home') {
      const oldIndex = homeCaseStudies.findIndex(cs => cs.id === active.id);
      const newIndex = homeCaseStudies.findIndex(cs => cs.id === over.id);
      const newOrder = arrayMove(homeCaseStudies, oldIndex, newIndex);
      const updated = newOrder.map((cs, i) => ({ ...cs, homeOrder: i }));
      setHomeCaseStudies(updated);
      await persistOrder(updated, 'homeOrder');
    }
  };

  const persistOrder = async (items, field) => {
    setSavingOrder(true);
    try {
      const batch = writeBatch(db);
      items.forEach((cs) => {
        const ref = doc(db, "casestudies", cs.id);
        batch.update(ref, { [field]: cs[field] });
      });
      await batch.commit();
    } catch (err) {
      console.error("Error saving order:", err);
    } finally {
      setSavingOrder(false);
    }
  };

  // Get the active card being dragged for the overlay
  const activeCard = activeId
    ? (reorderMode === 'work' ? caseStudies : homeCaseStudies).find(cs => cs.id === activeId)
    : null;

  // ── CRUD helpers ──────────────────────────────────────────────────────────
  const slugify = (text) =>
    text.toLowerCase().trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!editingCase) setSlug(slugify(val));
  };

  const handleOpenAddModal = () => {
    setEditingCase(null);
    setTitle(""); setBreadcrumbTitle(""); setSlug(""); setBannerImage("");
    setIntro(""); setServices([""]); setStats([{ value: "", label: "" }]);
    setApproach([{ title: "", steps: [""] }]); setResults([""]);
    setFilters(["all"]); setContentBlocks([]); setShowOnHome(false);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (cs) => {
    setEditingCase(cs);
    setTitle(cs.title || ""); setBreadcrumbTitle(cs.breadcrumbTitle || "");
    setSlug(cs.slug || ""); setBannerImage(cs.bannerImage || "");
    setIntro(cs.intro || "");
    setServices(cs.services?.length ? cs.services : [""]);
    setStats(cs.stats?.length ? cs.stats : [{ value: "", label: "" }]);
    setApproach(cs.approach?.length ? cs.approach : [{ title: "", steps: [""] }]);
    setResults(cs.results?.length ? cs.results : [""]);
    setFilters(
      cs.filters?.length
        ? cs.filters
        : (cs.categories?.length ? cs.categories : (cs.category ? [cs.category] : ["all"]))
    );
    setContentBlocks(cs.contentBlocks || []);
    setShowOnHome(cs.showOnHome || false);
    setIsModalOpen(true);
  };

  const addRow = (setter, state, defaultValue) => setter([...state, defaultValue]);
  const removeRow = (setter, state, index) => {
    if (state.length === 1) return;
    const copy = [...state]; copy.splice(index, 1); setter(copy);
  };
  const updateRow = (setter, state, index, key, value) => {
    const copy = [...state];
    copy[index] = key === null ? value : { ...copy[index], [key]: value };
    setter(copy);
  };

  const addContentBlock = (type) => {
    let newBlock = { id: Date.now().toString(), type };
    if (type === "section")     newBlock = { ...newBlock, subheading: "", paragraph: "", isList: false, isBold: false };
    else if (type === "image")  newBlock = { ...newBlock, url: "", imageSize: "medium", imageFit: "contain" };
    else if (type === "video")  newBlock = { ...newBlock, url: "" };
    else if (type === "split")  newBlock = { ...newBlock, subheading: "", paragraph: "", isList: false, isBold: false, url: "", imagePosition: "left" };
    else if (type === "image-row") newBlock = { ...newBlock, images: ["", ""], columns: 2 };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const removeContentBlock = (index) => {
    const copy = [...contentBlocks]; copy.splice(index, 1); setContentBlocks(copy);
  };
  const updateContentBlock = (index, field, value) => {
    const copy = [...contentBlocks]; copy[index][field] = value; setContentBlocks(copy);
  };
  const updateImageRowSlot = (blockIdx, imgIdx, url) => {
    const copy = [...contentBlocks];
    const images = [...(copy[blockIdx].images || [])];
    images[imgIdx] = url; copy[blockIdx].images = images; setContentBlocks(copy);
  };
  const setImageRowColumns = (blockIdx, cols) => {
    const copy = [...contentBlocks];
    let imgs = [...(copy[blockIdx].images || [])];
    while (imgs.length < cols) imgs.push("");
    imgs = imgs.slice(0, cols);
    copy[blockIdx].images = imgs; copy[blockIdx].columns = cols; setContentBlocks(copy);
  };
  const moveContentBlock = (index, direction) => {
    if (direction === -1 && index === 0) return;
    if (direction === 1 && index === contentBlocks.length - 1) return;
    const copy = [...contentBlocks];
    [copy[index], copy[index + direction]] = [copy[index + direction], copy[index]];
    setContentBlocks(copy);
  };

  const availableFilters = [
    { label: "All", filter: "all" },
    { label: "Brand Strategy", filter: "filter1" },
    { label: "Influencer Marketing", filter: "filter2" },
    { label: "Design & Development", filter: "filter3" },
    { label: "Content Strategy", filter: "filter4" },
    { label: "Storytelling", filter: "filter5" },
    { label: "IPs & PR", filter: "filter6" },
    { label: "AEO & SEO", filter: "filter7" },
  ];

  const handleFilterToggle = (filterValue) => {
    setFilters(prev =>
      prev.includes(filterValue) ? prev.filter(f => f !== filterValue) : [...prev, filterValue]
    );
  };

  const addApproachStep = (apprIdx) => {
    const copy = [...approach]; copy[apprIdx].steps.push(""); setApproach(copy);
  };
  const removeApproachStep = (apprIdx, stepIdx) => {
    const copy = [...approach];
    if (copy[apprIdx].steps.length === 1) return;
    copy[apprIdx].steps.splice(stepIdx, 1); setApproach(copy);
  };
  const updateApproachStep = (apprIdx, stepIdx, value) => {
    const copy = [...approach]; copy[apprIdx].steps[stepIdx] = value; setApproach(copy);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const cleanServices = services.filter(s => s.trim() !== "");
    const cleanStats = stats.filter(st => st.value.trim() !== "" && st.label.trim() !== "");
    const cleanResults = results.filter(r => r.trim() !== "");
    const cleanApproach = approach.map(app => ({
      title: app.title.trim(),
      steps: app.steps.filter(st => st.trim() !== "")
    })).filter(app => app.title !== "" && app.steps.length > 0);
    const cleanFilters = filters.filter(f => f.trim() !== "");

    const sortOrder = editingCase?.sortOrder !== undefined ? editingCase.sortOrder : caseStudies.length;
    const homeOrder = editingCase?.homeOrder !== undefined ? editingCase.homeOrder : homeCaseStudies.length;

    const csData = {
      title, breadcrumbTitle,
      slug: slugify(slug) || slugify(title),
      bannerImage, intro,
      services: cleanServices, stats: cleanStats,
      approach: cleanApproach, results: cleanResults,
      filters: cleanFilters, contentBlocks, showOnHome,
      sortOrder, homeOrder,
      createdAt: editingCase?.createdAt ?? new Date().toISOString()
    };

    try {
      if (editingCase) {
        await updateDoc(doc(db, "casestudies", editingCase.id), csData);
      } else {
        await addDoc(collection(db, "casestudies"), csData);
      }
      setIsModalOpen(false);
      fetchCaseStudies();
    } catch (err) {
      console.error("Error saving case study:", err);
    }
  };

  const handleDelete = async (csId) => {
    if (!window.confirm("Are you sure you want to delete this case study?")) return;
    try {
      await deleteDoc(doc(db, "casestudies", csId));
      fetchCaseStudies();
    } catch (err) {
      console.error("Error deleting case study:", err);
    }
  };

  // Current list being shown in reorder mode
  const activeList = reorderMode === 'home' ? homeCaseStudies : caseStudies;

  return (
    <div className={`${theme} min-h-screen font-bricolage bg-slate-50 text-slate-800 dark:bg-[#090914] dark:text-white transition-colors duration-500`}>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#090914]/70 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/5 transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/admin/dashboard"
              className="p-2 sm:p-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Manage Case Studies
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">
                Control the portfolio and success stories
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Reorder toggles */}
            <button
              onClick={() => setReorderMode(reorderMode === 'work' ? null : 'work')}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl font-bold transition-all border text-sm ${reorderMode === 'work' ? "bg-indigo-100 dark:bg-indigo-500/20 border-indigo-300 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400"}`}
            >
              <WorkIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{reorderMode === 'work' ? "Done (Work)" : "Order: Work Page"}</span>
              <span className="sm:hidden">Work</span>
            </button>
            <button
              onClick={() => setReorderMode(reorderMode === 'home' ? null : 'home')}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl font-bold transition-all border text-sm ${reorderMode === 'home' ? "bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-300" : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400"}`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">{reorderMode === 'home' ? "Done (Home)" : "Order: Home Page"}</span>
              <span className="sm:hidden">Home</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Create Case Study</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Reorder mode banners */}
        {reorderMode === 'work' && (
          <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl flex items-center gap-3">
            <GripVertical className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-indigo-800 dark:text-indigo-300">Work Page Order</p>
              <p className="text-xs text-indigo-700 dark:text-indigo-400">
                Drag the <strong>grip handle</strong> on each card to reorder. This controls the order on the <strong>/work</strong> page. Changes save automatically.
                {savingOrder && <span className="ml-2 text-indigo-500">Saving…</span>}
              </p>
            </div>
          </div>
        )}
        {reorderMode === 'home' && (
          <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-2xl flex items-center gap-3">
            <Home className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300">Home Page Order</p>
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Only case studies marked <strong>"Feature on Homepage"</strong> appear here ({homeCaseStudies.length} items). Drag to set the order on the home page.
                {savingOrder && <span className="ml-2 text-amber-500">Saving…</span>}
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (reorderMode ? activeList : caseStudies).length === 0 ? (
          <div className="text-center py-24 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-slate-200/80 dark:border-white/10 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
              <FolderGit className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {reorderMode === 'home' ? "No homepage case studies" : "No case studies found"}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              {reorderMode === 'home' ? 'Enable "Feature on Homepage" on case studies to manage home page order.' : "Create your first case study to showcase your work."}
            </p>
            {!reorderMode && (
              <button onClick={handleOpenAddModal} className="px-6 py-3 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold rounded-xl hover:bg-blue-200 dark:hover:bg-blue-500/30 transition-colors">
                Create Case Study
              </button>
            )}
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={(reorderMode ? activeList : caseStudies).map(cs => cs.id)}
              strategy={rectSortingStrategy}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {(reorderMode ? activeList : caseStudies).map((cs, cardIdx) => (
                  <SortableCard
                    key={cs.id}
                    cs={cs}
                    cardIdx={cardIdx}
                    total={(reorderMode ? activeList : caseStudies).length}
                    reorderMode={!!reorderMode}
                    onEdit={handleOpenEditModal}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </SortableContext>

            {/* Drag overlay — ghost card that follows cursor */}
            <DragOverlay adjustScale={false}>
              {activeCard ? (
                <SortableCard
                  cs={activeCard}
                  cardIdx={0}
                  total={1}
                  reorderMode={true}
                  onEdit={() => {}}
                  onDelete={() => {}}
                  isDragOverlay={true}
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        )}

        {/* ── Modal Form ─────────────────────────────────────────────────── */}
        {isModalOpen && (
          <div data-lenis-prevent="true" className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md flex justify-center items-start sm:items-center overflow-y-auto z-[100] p-0 sm:p-4 md:p-6">
            <div className="bg-white dark:bg-[#0c0c1e] sm:rounded-[2.5rem] w-full min-h-screen sm:min-h-0 sm:max-w-[1400px] shadow-2xl relative text-slate-800 dark:text-white flex flex-col sm:max-h-[95vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">

              {/* Modal Header */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  {editingCase ? "Edit Case Study" : "Create Case Study"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2.5 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 rounded-xl text-slate-500 dark:text-slate-300 transition-colors shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <form id="cs-form" onSubmit={handleSave} className="space-y-10">

                  {/* General Info */}
                  <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-8">
                    <div className="space-y-6">
                      <div className="bg-slate-50 dark:bg-black/20 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-white/5">
                        <CloudinaryUpload label="Case Study Banner Image" currentImageUrl={bannerImage} onUploadSuccess={setBannerImage} />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <Briefcase className="w-4 h-4 text-blue-500" /> Case Study Title (Headline)
                        </label>
                        <input type="text" required value={title} onChange={(e) => handleTitleChange(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
                          placeholder="e.g. A Strategic Rebranding that drove 4 New Acquisitions..." />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                          <Tag className="w-4 h-4 text-blue-500" /> Breadcrumb Title (Short Name)
                        </label>
                        <input type="text" value={breadcrumbTitle} onChange={(e) => setBreadcrumbTitle(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
                          placeholder="e.g. Acme Corp Branding (Optional)" />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">URL Slug</label>
                        <input type="text" required value={slug} onChange={(e) => setSlug(e.target.value)}
                          className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-mono text-sm"
                          placeholder="a-strategic-rebranding" />
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 p-5 rounded-xl flex items-center justify-between">
                        <div>
                          <label className="flex items-center gap-2 text-blue-900 dark:text-blue-300 text-sm font-bold mb-1">
                            <Target className="w-4 h-4" /> Feature on Homepage
                          </label>
                          <p className="text-xs text-blue-700 dark:text-blue-400">Display this case study in the 'Stories in Action' section on the main page.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked={showOnHome} onChange={(e) => setShowOnHome(e.target.checked)} />
                          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="relative group h-full flex flex-col">
                        <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Introduction Text</label>
                        <textarea required value={intro} onChange={(e) => setIntro(e.target.value)}
                          className="w-full flex-1 min-h-[150px] px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium resize-none"
                          placeholder="Provide a description of the client background, challenge, and goals..." />
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100 dark:border-white/5" />

                  {/* Services & Stats */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-50 dark:bg-white/2 border border-slate-200/80 dark:border-white/5 p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><Layers className="w-5 h-5 text-indigo-500" /> Services Rendered</h4>
                        <button type="button" onClick={() => addRow(setServices, services, "")} className="text-xs font-bold px-3 py-1.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-500/30">+ Add Service</button>
                      </div>
                      <div className="space-y-3">
                        {services.map((item, idx) => (
                          <div key={idx} className="flex gap-2">
                            <input type="text" value={item} onChange={(e) => updateRow(setServices, services, idx, null, e.target.value)}
                              className="flex-1 px-4 py-2.5 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 text-sm font-medium"
                              placeholder="e.g. Brand Strategy" />
                            <button type="button" disabled={services.length === 1} onClick={() => removeRow(setServices, services, idx)}
                              className="p-2.5 bg-white hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 border border-slate-200 dark:border-white/10 rounded-xl text-red-500 dark:text-red-400 transition-colors disabled:opacity-30">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-white/2 border border-slate-200/80 dark:border-white/5 p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><TrendingUp className="w-5 h-5 text-emerald-500" /> Result Metrics</h4>
                        <button type="button" onClick={() => addRow(setStats, stats, { value: "", label: "" })} className="text-xs font-bold px-3 py-1.5 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-500/30">+ Add Metric</button>
                      </div>
                      <div className="space-y-3">
                        {stats.map((item, idx) => (
                          <div key={idx} className="flex gap-2 bg-white dark:bg-black/20 p-2 rounded-xl border border-slate-200 dark:border-white/10">
                            <div className="flex-1 grid grid-cols-2 gap-2">
                              <input type="text" value={item.value} onChange={(e) => updateRow(setStats, stats, idx, "value", e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-sm font-bold text-center placeholder-slate-400"
                                placeholder="Value (e.g. 200%)" />
                              <input type="text" value={item.label} onChange={(e) => updateRow(setStats, stats, idx, "label", e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs text-center placeholder-slate-400"
                                placeholder="Label (e.g. Growth)" />
                            </div>
                            <button type="button" disabled={stats.length === 1} onClick={() => removeRow(setStats, stats, idx)}
                              className="p-2 self-center bg-slate-50 hover:bg-red-50 border border-slate-200 dark:bg-white/5 dark:hover:bg-red-500/20 rounded-lg dark:border-white/5 text-red-500 dark:text-red-400 transition-colors disabled:opacity-30">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100 dark:border-white/5" />

                  {/* Approach & Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Approach */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><Target className="w-5 h-5 text-purple-500" /> Strategic Approach</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Phases and actionable steps</p>
                        </div>
                        <button type="button" onClick={() => addRow(setApproach, approach, { title: "", steps: [""] })} className="text-xs font-bold px-3 py-1.5 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-500/30">+ Add Phase</button>
                      </div>
                      <div className="space-y-4">
                        {approach.map((app, appIdx) => (
                          <div key={appIdx} className="bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 p-5 rounded-2xl relative">
                            <button type="button" disabled={approach.length === 1} onClick={() => removeRow(setApproach, approach, appIdx)}
                              className="absolute top-4 right-4 p-2 bg-white dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-500/20 border border-slate-200 dark:border-white/5 rounded-xl text-red-500 dark:text-red-400 transition-colors disabled:opacity-30">
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="max-w-[85%] pr-2">
                              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Phase Title</label>
                              <input type="text" value={app.title} onChange={(e) => updateRow(setApproach, approach, appIdx, "title", e.target.value)}
                                className="w-full px-3 py-2 bg-white border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 focus:outline-none focus:border-purple-500 dark:bg-black/20 dark:text-white text-sm font-bold transition-colors"
                                placeholder="e.g. Phase 1: Deep Dive Research" />
                            </div>
                            <div className="mt-4 space-y-2 border-t border-slate-200 dark:border-white/5 pt-4">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Action Steps</span>
                                <button type="button" onClick={() => addApproachStep(appIdx)} className="text-[10px] font-bold px-2 py-1 bg-white dark:bg-white/5 text-purple-600 dark:text-purple-400 rounded-md border border-slate-200 dark:border-white/10 hover:bg-purple-50 dark:hover:bg-purple-500/20">+ Step</button>
                              </div>
                              {app.steps.map((step, stepIdx) => (
                                <div key={stepIdx} className="flex gap-2 items-center">
                                  <span className="text-slate-400 text-xs font-bold w-4">{stepIdx + 1}.</span>
                                  <input type="text" value={step} onChange={(e) => updateApproachStep(appIdx, stepIdx, e.target.value)}
                                    className="flex-1 px-3 py-2 bg-white border border-slate-200 dark:border-white/10 rounded-lg text-slate-900 focus:outline-none focus:border-purple-500 dark:bg-black/20 dark:text-white text-sm transition-colors"
                                    placeholder="Describe the action..." />
                                  <button type="button" disabled={app.steps.length === 1} onClick={() => removeApproachStep(appIdx, stepIdx)} className="p-1.5 text-red-500 dark:text-red-400 hover:text-red-600 disabled:opacity-20">
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results + Content Blocks + Filters */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><TrendingUp className="w-5 h-5 text-blue-500" /> Descriptive Results</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Displayed as result blocks at the end of the page</p>
                        </div>
                        <button type="button" onClick={() => addRow(setResults, results, "")} className="text-xs font-bold px-3 py-1.5 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-500/30">+ Add Result</button>
                      </div>
                      <div className="space-y-3 bg-slate-50 dark:bg-white/2 border border-slate-200/80 dark:border-white/5 p-5 rounded-2xl">
                        {results.map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                            <input type="text" value={item} onChange={(e) => updateRow(setResults, results, idx, null, e.target.value)}
                              className="flex-1 px-4 py-2.5 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-sm font-medium"
                              placeholder="e.g. Expanded global presence significantly" />
                            <button type="button" disabled={results.length === 1} onClick={() => removeRow(setResults, results, idx)}
                              className="p-2.5 bg-white hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 border border-slate-200 dark:border-white/10 rounded-xl text-red-500 dark:text-red-400 transition-colors disabled:opacity-30">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Dynamic Content Builder */}
                      <div className="mt-8 bg-slate-50 dark:bg-white/2 border border-slate-200/80 dark:border-white/5 p-5 rounded-2xl">
                        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><LayoutTemplate className="w-5 h-5 text-indigo-500" /> Dynamic Content Blocks</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add text sections, photos, and videos in any order</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button type="button" onClick={() => addContentBlock('section')} className="text-xs font-bold px-3 py-1.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-500/30">+ Text</button>
                            <button type="button" onClick={() => addContentBlock('image')} className="text-xs font-bold px-3 py-1.5 bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-500/30">+ Image</button>
                            <button type="button" onClick={() => addContentBlock('image-row')} className="text-xs font-bold px-3 py-1.5 bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 rounded-lg hover:bg-rose-200 dark:hover:bg-rose-500/30">+ Image Row</button>
                            <button type="button" onClick={() => addContentBlock('video')} className="text-xs font-bold px-3 py-1.5 bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-500/30">+ Video</button>
                            <button type="button" onClick={() => addContentBlock('split')} className="text-xs font-bold px-3 py-1.5 bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 rounded-lg hover:bg-teal-200 dark:hover:bg-teal-500/30">+ Split Screen</button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {contentBlocks.map((block, idx) => (
                            <div key={block.id} className="relative p-4 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl">
                              <div className="absolute top-2 right-2 flex gap-1">
                                <button type="button" onClick={() => moveContentBlock(idx, -1)} disabled={idx === 0} className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30"><ArrowUp className="w-4 h-4" /></button>
                                <button type="button" onClick={() => moveContentBlock(idx, 1)} disabled={idx === contentBlocks.length - 1} className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white disabled:opacity-30"><ArrowDown className="w-4 h-4" /></button>
                                <button type="button" onClick={() => removeContentBlock(idx)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/20 rounded"><Trash2 className="w-4 h-4" /></button>
                              </div>

                              {/* TEXT SECTION */}
                              {block.type === 'section' && (
                                <div className="space-y-3 pt-4">
                                  <div className="text-xs font-bold text-indigo-500 flex items-center gap-1 mb-2"><LayoutTemplate className="w-4 h-4" /> Text Section</div>
                                  <input type="text" value={block.subheading || ''} onChange={(e) => updateContentBlock(idx, 'subheading', e.target.value)} placeholder="Subheading (optional)" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" />
                                  <div className="cs-quill-editor">
                                    <ReactQuill
                                      key={block.id}
                                      theme="snow"
                                      value={block.paragraph || ''}
                                      onChange={(val) => updateContentBlock(idx, 'paragraph', val)}
                                      placeholder="Write and format your content here (bold, bullets, headings, links)..."
                                      modules={{
                                        toolbar: [
                                          [{ header: [1, 2, 3, false] }],
                                          [{ size: ['small', false, 'large', 'huge'] }],
                                          ['bold', 'italic', 'underline', 'strike'],
                                          [{ color: [] }, { background: [] }],
                                          [{ list: 'ordered' }, { list: 'bullet' }],
                                          [{ indent: '-1' }, { indent: '+1' }],
                                          [{ align: [] }],
                                          ['blockquote', 'link'],
                                          ['clean']
                                        ]
                                      }}
                                      formats={['header','size','bold','italic','underline','strike','color','background','list','bullet','indent','align','blockquote','link']}
                                    />
                                  </div>
                                </div>
                              )}

                              {/* IMAGE BLOCK */}
                              {block.type === 'image' && (
                                <div className="space-y-3 pt-4">
                                  <div className="text-xs font-bold text-pink-500 flex items-center gap-1 mb-2"><ImageIcon className="w-4 h-4" /> Image Upload</div>
                                  <CloudinaryUpload onUploadSuccess={(url) => updateContentBlock(idx, 'url', url)} currentImageUrl={block.url} label="Upload Image Block" />
                                  <div className="grid grid-cols-2 gap-3 mt-2">
                                    <div>
                                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Image Size</label>
                                      <select value={block.imageSize || 'medium'} onChange={(e) => updateContentBlock(idx, 'imageSize', e.target.value)}
                                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value="extra-small">Extra Small</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="extra-large">Extra Large</option>
                                        <option value="large">Full Width</option>
                                      </select>
                                    </div>
                                    <div>
                                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Image Fit</label>
                                      <select value={block.imageFit || 'contain'} onChange={(e) => updateContentBlock(idx, 'imageFit', e.target.value)}
                                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value="contain">Fit to Size</option>
                                        <option value="cover">Crop</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* IMAGE ROW BLOCK */}
                              {block.type === 'image-row' && (
                                <div className="space-y-3 pt-4">
                                  <div className="text-xs font-bold text-rose-500 flex items-center justify-between gap-1 mb-2">
                                    <div className="flex items-center gap-1"><ImageIcon className="w-4 h-4" /> Image Row</div>
                                    <div className="flex items-center gap-2">
                                      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Columns:</label>
                                      <select value={block.columns || 2} onChange={(e) => setImageRowColumns(idx, parseInt(e.target.value))}
                                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value={2}>2 Images</option>
                                        <option value={3}>3 Images</option>
                                      </select>
                                      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold ml-2">Fit:</label>
                                      <select value={block.imageFit || 'cover'} onChange={(e) => updateContentBlock(idx, 'imageFit', e.target.value)}
                                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value="contain">Fit Full Image</option>
                                        <option value="cover">Crop</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className={`grid gap-3 ${(block.columns || 2) === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                                    {(block.images || ["", ""]).map((imgUrl, imgIdx) => (
                                      <div key={imgIdx} className="border border-dashed border-rose-200 dark:border-rose-500/30 rounded-xl p-2">
                                        <p className="text-[10px] font-bold text-rose-400 mb-1">Image {imgIdx + 1}</p>
                                        <CloudinaryUpload onUploadSuccess={(url) => updateImageRowSlot(idx, imgIdx, url)} currentImageUrl={imgUrl} label={`Image ${imgIdx + 1}`} />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* VIDEO BLOCK */}
                              {block.type === 'video' && (
                                <div className="space-y-3 pt-4">
                                  <div className="text-xs font-bold text-orange-500 flex items-center gap-1 mb-2"><Video className="w-4 h-4" /> Video Link</div>
                                  <input type="url" value={block.url || ''} onChange={(e) => updateContentBlock(idx, 'url', e.target.value)} placeholder="Paste YouTube or Drive video link here..." className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500" />
                                </div>
                              )}

                              {/* SPLIT SCREEN BLOCK */}
                              {block.type === 'split' && (
                                <div className="space-y-3 pt-4">
                                  <div className="text-xs font-bold text-teal-500 flex items-center justify-between gap-1 mb-2">
                                    <div className="flex items-center gap-1"><LayoutTemplate className="w-4 h-4" /> Split Screen (Image & Text)</div>
                                    <div className="flex items-center gap-2">
                                      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Image Side:</label>
                                      <select value={block.imagePosition || 'left'} onChange={(e) => updateContentBlock(idx, 'imagePosition', e.target.value)}
                                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                      </select>
                                      <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold ml-2">Size:</label>
                                      <select value={block.imageSize || 'medium'} onChange={(e) => updateContentBlock(idx, 'imageSize', e.target.value)}
                                        className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white outline-none cursor-pointer">
                                        <option value="extra-small">Extra Small</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="extra-large">Extra Large</option>
                                        <option value="large">Full Width</option>
                                      </select>
                                    </div>
                                  </div>
                                  <input type="text" value={block.subheading || ''} onChange={(e) => updateContentBlock(idx, 'subheading', e.target.value)} placeholder="Subheading (optional)" className="w-full px-4 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-teal-500" />
                                  <div className="cs-quill-editor">
                                    <ReactQuill
                                      key={`split-${block.id}`}
                                      theme="snow"
                                      value={block.paragraph || ''}
                                      onChange={(val) => updateContentBlock(idx, 'paragraph', val)}
                                      placeholder="Write and format your content here (bold, bullets, headings, links)..."
                                      modules={{
                                        toolbar: [
                                          [{ header: [1, 2, 3, false] }],
                                          [{ size: ['small', false, 'large', 'huge'] }],
                                          ['bold', 'italic', 'underline', 'strike'],
                                          [{ color: [] }, { background: [] }],
                                          [{ list: 'ordered' }, { list: 'bullet' }],
                                          [{ indent: '-1' }, { indent: '+1' }],
                                          [{ align: [] }],
                                          ['blockquote', 'link'],
                                          ['clean']
                                        ]
                                      }}
                                      formats={['header','size','bold','italic','underline','strike','color','background','list','bullet','indent','align','blockquote','link']}
                                    />
                                  </div>
                                  <CloudinaryUpload onUploadSuccess={(url) => updateContentBlock(idx, 'url', url)} currentImageUrl={block.url || ''} label="Upload Split Image" />
                                </div>
                              )}
                            </div>
                          ))}

                          {contentBlocks.length === 0 && (
                            <div className="text-center py-6 text-sm text-slate-500 dark:text-slate-400 italic">No content blocks yet. Click the buttons above to add.</div>
                          )}
                        </div>
                      </div>

                      {/* Filters */}
                      <div className="mt-8 bg-slate-50 dark:bg-white/2 border border-slate-200/80 dark:border-white/5 p-5 rounded-2xl">
                        <div className="mb-4">
                          <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white"><Tag className="w-5 h-5 text-fuchsia-500" /> Category Filters</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1"><Info className="w-3.5 h-3.5" /> Used for sorting on the frontend</p>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {availableFilters.map((filt) => (
                            <label key={filt.filter} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-black/20 rounded-xl border border-slate-200 dark:border-white/10 cursor-pointer hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50 transition-all text-sm shadow-sm select-none">
                              <input type="checkbox" checked={filters.includes(filt.filter)} onChange={() => handleFilterToggle(filt.filter)}
                                className="rounded text-fuchsia-600 focus:ring-fuchsia-500 border-slate-300 dark:border-white/20 bg-transparent w-4 h-4 cursor-pointer" />
                              <span className="font-semibold text-slate-700 dark:text-slate-300">{filt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </form>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c0c1e]/80 backdrop-blur-md flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-auto">
                <button type="button" onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-300 font-bold transition-all w-full sm:w-auto">
                  Cancel
                </button>
                <button form="cs-form" type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">
                  {editingCase ? "Save Case Study" : "Create Case Study"}
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManageCaseStudies;
