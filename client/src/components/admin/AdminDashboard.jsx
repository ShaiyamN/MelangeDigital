import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { mLogo } from "../../assets/images";
import { 
  Briefcase, 
  BookOpen, 
  Users, 
  FolderGit, 
  LogOut, 
  ExternalLink,
  LayoutDashboard,
  Sun,
  Moon,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [stats, setStats] = useState({
    caseStudies: 0,
    jobs: 0,
    team: 0,
    blogs: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/admin/login");
      } else {
        setUser(currentUser);
        setLoading(false);
        fetchStats();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    // Always start in light mode — remove any stale dark class
    document.documentElement.classList.remove("dark");
    localStorage.setItem("admin-theme", "light");
  }, []);

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

  const fetchStats = async () => {
    try {
      const collections = ["casestudies", "jobs", "teammembers", "blogs"];
      const counts = await Promise.all(
        collections.map(async (colName) => {
          const querySnapshot = await getDocs(collection(db, colName));
          return querySnapshot.size;
        })
      );
      setStats({
        caseStudies: counts[0],
        jobs: counts[1],
        team: counts[2],
        blogs: counts[3]
      });
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#090914] transition-colors duration-500">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-200 dark:border-purple-900 border-t-purple-600 dark:border-t-purple-500 rounded-full animate-spin"></div>
          <span className="text-slate-500 dark:text-slate-400 font-medium font-bricolage">Initializing Console...</span>
        </div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Case Studies",
      description: "Manage portfolio projects, client success stories, stats, and approaches.",
      count: stats.caseStudies,
      icon: FolderGit,
      color: "from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-500/20",
      link: "/admin/manage-case-studies"
    },
    {
      title: "Blog Articles",
      description: "Draft, edit, and publish newsletters and digital marketing articles.",
      count: stats.blogs,
      icon: BookOpen,
      color: "from-purple-500 to-fuchsia-600",
      shadowColor: "shadow-purple-500/20",
      link: "/admin/manage-blogs"
    },
    {
      title: "Job Listings",
      description: "Open new roles, adjust qualifications, edit benefits, and close listings.",
      count: stats.jobs,
      icon: Briefcase,
      color: "from-teal-500 to-emerald-600",
      shadowColor: "shadow-teal-500/20",
      link: "/admin/manage-jobs"
    },
    {
      title: "Team Members",
      description: "Add new crew members, edit positions, bios, and LinkedIn profiles.",
      count: stats.team,
      icon: Users,
      color: "from-orange-500 to-rose-600",
      shadowColor: "shadow-orange-500/20",
      link: "/admin/manage-team"
    }
  ];

  return (
    <div className={`${theme} min-h-screen font-bricolage bg-slate-50 text-slate-800 dark:bg-[#090914] dark:text-white transition-colors duration-500 relative overflow-hidden`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#090914]/70 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/5 transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
              <img src={mLogo} alt="Logo" className="w-[100px] sm:w-[120px]" />
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-slate-600 dark:text-slate-300 text-sm font-semibold tracking-wide">Control Center</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Logged in as</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{user?.email}</span>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl shadow-sm transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              {theme === "light" ? <Moon className="w-4 h-4 sm:w-5 sm:h-5" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-red-50 hover:border-red-200 dark:bg-white/5 dark:hover:bg-red-500/10 dark:hover:border-red-500/30 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:-translate-y-0.5 shadow-sm"
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" /> 
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
              Welcome back, Admin
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl font-medium">
              Manage your website's content seamlessly. Changes made here are instantly reflected on the live site.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">System Online & Synced</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.link}
                className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 flex flex-col justify-between shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:border-purple-300/50 dark:hover:border-purple-500/30 overflow-hidden"
              >
                {/* Hover Gradient Splash */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`}></div>

                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} ${item.shadowColor} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white transition-colors">
                        {item.count}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Entries</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/80 dark:border-white/10 pt-5 mt-auto">
                  <span className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Manage Collection
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
