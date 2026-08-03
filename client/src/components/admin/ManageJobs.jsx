import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Edit2, X, Sun, Moon, Briefcase, CheckCircle2, GraduationCap, Heart, FileText } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ManageJobs = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("admin-theme") || "light");
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [benefits, setBenefits] = useState("");
  const [isActive, setIsActive] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin/login");
      } else {
        setUser(currentUser);
        fetchJobs();
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

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"));
      const jobsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobsList);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setEditingJob(null);
    setTitle("");
    setAbout("");
    setResponsibilities("");
    setQualifications("");
    setBenefits("");
    setIsActive(true);
    setIsModalOpen(true);
  };

  const arrayToHtmlList = (arr) => {
    if (Array.isArray(arr)) {
      const validItems = arr.filter(item => typeof item === 'string' && item.trim() !== '');
      if (validItems.length > 0) {
        return "<ul>" + validItems.map(item => `<li>${item}</li>`).join("") + "</ul>";
      }
      return "";
    }
    return typeof arr === "string" ? arr : "";
  };

  const handleOpenEditModal = (job) => {
    setEditingJob(job);
    setTitle(job.title || "");
    setAbout(job.about || "");
    setResponsibilities(arrayToHtmlList(job.keyResponsibilities));
    setQualifications(arrayToHtmlList(job.qualifications));
    setBenefits(arrayToHtmlList(job.benefits));
    setIsActive(job.active !== undefined ? job.active : true);
    setIsModalOpen(true);
  };

  const quillModules = {
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
  };

  const quillFormats = ['header','size','bold','italic','underline','strike','color','background','list','bullet','indent','align','blockquote','link'];

  const handleSave = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      about,
      keyResponsibilities: responsibilities,
      qualifications: qualifications,
      benefits: benefits,
      active: isActive
    };

    try {
      if (editingJob) {
        // Update
        const jobRef = doc(db, "jobs", editingJob.id);
        await updateDoc(jobRef, jobData);
      } else {
        // Create
        await addDoc(collection(db, "jobs"), jobData);
      }
      setIsModalOpen(false);
      fetchJobs();
    } catch (err) {
      console.error("Error saving job:", err);
    }
  };

  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job posting?")) return;
    try {
      await deleteDoc(doc(db, "jobs", jobId));
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <div className={`${theme} min-h-screen font-bricolage bg-slate-50 text-slate-800 dark:bg-[#090914] dark:text-white transition-colors duration-500`}>
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-[#090914]/70 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/5 transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link 
              to="/admin/dashboard" 
              className="p-2 sm:p-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Manage Job Listings
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">Define open roles on your careers page</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button 
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" /> <span className="hidden sm:inline">Add New Job</span><span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-teal-200 dark:border-teal-900 border-t-teal-500 dark:border-t-teal-400 rounded-full animate-spin"></div>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-24 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-slate-200/80 dark:border-white/10 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-teal-50 dark:bg-teal-500/10 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No job listings found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Create your first job listing to start hiring.</p>
            <button onClick={handleOpenAddModal} className="px-6 py-3 bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 font-bold rounded-xl hover:bg-teal-200 dark:hover:bg-teal-500/30 transition-colors">
              Add New Job
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="group flex flex-col bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:border-teal-300 dark:hover:border-teal-500/30 shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    job.active 
                      ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                  }`}>
                    {job.active ? "Active" : "Draft"}
                  </div>
                  <div className="p-3 bg-teal-50 dark:bg-teal-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-2xl leading-tight mb-4 text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-8">
                    {job.about}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-6 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> Rich Content
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleOpenEditModal(job)}
                      className="p-2.5 bg-slate-50 hover:bg-teal-50 dark:bg-white/5 dark:hover:bg-teal-500/20 rounded-xl text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
                      title="Edit Job"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(job.id)}
                      className="p-2.5 bg-slate-50 hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 rounded-xl text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                      title="Delete Job"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Form */}
        {isModalOpen && (
          <div data-lenis-prevent="true" className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md flex justify-center items-start sm:items-center overflow-y-auto z-[100] p-0 sm:p-4 md:p-6">
            <div className="bg-white dark:bg-[#0c0c1e] sm:rounded-[2.5rem] w-full min-h-screen sm:min-h-0 sm:max-w-4xl shadow-2xl relative text-slate-800 dark:text-white flex flex-col sm:max-h-[95vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
              
              {/* Modal Header */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  {editingJob ? "Edit Job Listing" : "Create Job Listing"}
                </h2>
                <div className="flex items-center gap-4">
                  {/* Status Toggle in Header */}
                  <label className="hidden sm:flex items-center gap-3 cursor-pointer p-2 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm">
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{isActive ? 'Active' : 'Draft'}</span>
                    <div className="relative inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-slate-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 dark:after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </div>
                  </label>
                  
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2.5 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 rounded-xl text-slate-500 dark:text-slate-300 transition-colors shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Status Toggle */}
              <div className="sm:hidden px-6 py-4 border-b border-slate-100 dark:border-white/10 bg-white dark:bg-[#0c0c1e] flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Listing Status</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 dark:after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <form id="job-form" onSubmit={handleSave} className="space-y-10">
                  
                  {/* Basic Info Section */}
                  <div className="space-y-6">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                        <FileText className="w-4 h-4 text-teal-500" /> Job Title
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all font-medium text-lg"
                        placeholder="e.g. Senior Brand Strategist"
                      />
                    </div>

                    <div className="relative group">
                      <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                        About the Role
                      </label>
                      <ReactQuill
                        theme="snow"
                        value={about}
                        onChange={setAbout}
                        modules={quillModules}
                        formats={quillFormats}
                        className="bg-white dark:bg-black/20 rounded-xl text-slate-900 dark:text-white [&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:border-slate-200 [&_.ql-toolbar]:dark:border-white/10 [&_.ql-container]:rounded-b-xl [&_.ql-container]:border-slate-200 [&_.ql-container]:dark:border-white/10 [&_.ql-container]:min-h-[200px]"
                        placeholder="Describe the overall scope and excitement of this position..."
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    {[
                      { 
                        id: "resp",
                        label: "Key Responsibilities", 
                        icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />,
                        state: responsibilities, 
                        setter: setResponsibilities, 
                        placeholder: "e.g. Lead brand workshops with clients",
                        bgColor: "bg-blue-50 dark:bg-blue-500/5",
                      },
                      { 
                        id: "qual",
                        label: "Qualifications", 
                        icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
                        state: qualifications, 
                        setter: setQualifications, 
                        placeholder: "e.g. 3-5 years of digital agency experience",
                        bgColor: "bg-indigo-50 dark:bg-indigo-500/5",
                      },
                      { 
                        id: "ben",
                        label: "Benefits", 
                        icon: <Heart className="w-5 h-5 text-rose-500" />,
                        state: benefits, 
                        setter: setBenefits, 
                        placeholder: "e.g. Comprehensive health coverage",
                        bgColor: "bg-rose-50 dark:bg-rose-500/5",
                      }
                    ].map((sec) => (
                      <div key={sec.id} className={`${sec.bgColor} p-5 sm:p-6 rounded-2xl border border-slate-200/50 dark:border-white/5`}>
                        <div className="flex items-center justify-between mb-5">
                          <h4 className="font-bold flex items-center gap-2 text-slate-800 dark:text-white">
                            {sec.icon} {sec.label}
                          </h4>
                        </div>
                        <ReactQuill
                          theme="snow"
                          value={sec.state}
                          onChange={sec.setter}
                          modules={quillModules}
                          formats={quillFormats}
                          className="bg-white dark:bg-black/20 rounded-xl text-slate-900 dark:text-white [&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:border-slate-200 [&_.ql-toolbar]:dark:border-white/10 [&_.ql-container]:rounded-b-xl [&_.ql-container]:border-slate-200 [&_.ql-container]:dark:border-white/10 [&_.ql-container]:min-h-[150px]"
                          placeholder={sec.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                </form>
              </div>
              
              {/* Modal Footer (Sticky) */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c0c1e]/80 backdrop-blur-md flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-auto">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-300 font-bold transition-all w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  form="job-form"
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  {editingJob ? "Save Job" : "Publish Job"}
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManageJobs;
