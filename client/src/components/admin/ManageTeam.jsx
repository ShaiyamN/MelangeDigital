import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Edit2, X, Sun, Moon, Image as ImageIcon, Users, Linkedin, User as UserIcon, Sparkles } from "lucide-react";
import CloudinaryUpload from "./CloudinaryUpload";

const ManageTeam = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem("admin-theme") || "light");
  const [team, setTeam] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [bio, setBio] = useState("");
  const [funFactLabel, setFunFactLabel] = useState("");
  const [funFactValue, setFunFactValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin/login");
      } else {
        setUser(currentUser);
        fetchTeam();
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

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "teammembers"));
      const teamList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeam(teamList);
    } catch (err) {
      console.error("Error fetching team members:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAddModal = () => {
    setEditingMember(null);
    setName("");
    setPosition("");
    setImage("");
    setLinkedin("");
    setBio("");
    setFunFactLabel("");
    setFunFactValue("");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (member) => {
    setEditingMember(member);
    setName(member.name || "");
    setPosition(member.position || "");
    setImage(member.image || "");
    setLinkedin(member.linkedin || "");
    setBio(member.bio || "");
    setFunFactLabel(member.funFact?.label || "");
    setFunFactValue(member.funFact?.value || "");
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const memberData = {
      name,
      position,
      image,
      linkedin,
      bio,
      funFact: {
        label: funFactLabel,
        value: funFactValue
      }
    };

    try {
      if (editingMember) {
        const memberRef = doc(db, "teammembers", editingMember.id);
        await updateDoc(memberRef, memberData);
      } else {
        await addDoc(collection(db, "teammembers"), memberData);
      }
      setIsModalOpen(false);
      fetchTeam();
    } catch (err) {
      console.error("Error saving team member:", err);
    }
  };

  const handleDelete = async (memberId) => {
    if (!window.confirm("Are you sure you want to delete this team member?")) return;
    try {
      await deleteDoc(doc(db, "teammembers", memberId));
      fetchTeam();
    } catch (err) {
      console.error("Error deleting team member:", err);
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
              className="p-2 sm:p-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all shadow-sm hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Manage Team Members
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">Edit profiles in the "Creative Crew" carousel</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button 
              onClick={handleOpenAddModal}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-400 hover:to-rose-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" /> <span className="hidden sm:inline">Add Team Member</span><span className="sm:hidden">New</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-orange-200 dark:border-orange-900 border-t-orange-500 dark:border-t-orange-400 rounded-full animate-spin"></div>
          </div>
        ) : team.length === 0 ? (
          <div className="text-center py-24 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-slate-200/80 dark:border-white/10 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-orange-50 dark:bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No team members found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Add people to build your creative crew.</p>
            <button onClick={handleOpenAddModal} className="px-6 py-3 bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 font-bold rounded-xl hover:bg-orange-200 dark:hover:bg-orange-500/30 transition-colors">
              Add First Member
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="group flex flex-col bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl overflow-hidden hover:border-orange-300 dark:hover:border-orange-500/30 shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span className="text-sm font-medium">No photo</span>
                    </div>
                  )}
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top tags */}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-lg text-white transition-colors" title="View LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  
                  {/* Bottom details */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-xl leading-tight text-white mb-1">{member.name}</h3>
                    <p className="text-orange-300 text-sm font-medium">{member.position}</p>
                    
                    {/* Hover revealed bio */}
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 mt-2">
                      <p className="text-slate-300 text-xs line-clamp-2">{member.bio}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between bg-white dark:bg-transparent">
                  <div className="flex-1 min-w-0 mr-4">
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                      {member.funFact?.label || "Fun Fact"}
                    </span>
                    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                      {member.funFact?.value || "No fun fact provided"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button 
                      onClick={() => handleOpenEditModal(member)}
                      className="p-2.5 bg-slate-50 hover:bg-orange-50 dark:bg-white/5 dark:hover:bg-orange-500/20 rounded-xl text-slate-600 hover:text-orange-600 dark:text-slate-400 dark:hover:text-orange-400 transition-colors"
                      title="Edit Profile"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(member.id)}
                      className="p-2.5 bg-slate-50 hover:bg-red-50 dark:bg-white/5 dark:hover:bg-red-500/20 rounded-xl text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                      title="Delete Profile"
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
            <div className="bg-white dark:bg-[#0c0c1e] sm:rounded-[2.5rem] w-full min-h-screen sm:min-h-0 sm:max-w-3xl shadow-2xl relative text-slate-800 dark:text-white flex flex-col sm:max-h-[95vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
              
              {/* Modal Header */}
              <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-slate-50/50 dark:bg-white/5">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  {editingMember ? "Edit Team Member" : "Add Team Member"}
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
                <form id="team-form" onSubmit={handleSave} className="space-y-8">
                  
                  {/* Photo Upload */}
                  <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5">
                    <CloudinaryUpload 
                      label="Profile Picture (Portrait ratio recommended)" 
                      currentImageUrl={image} 
                      onUploadSuccess={setImage} 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                        <UserIcon className="w-4 h-4 text-orange-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                        placeholder="e.g. Jason Dias"
                      />
                    </div>

                    <div className="relative group">
                      <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                        Position / Job Title
                      </label>
                      <input
                        type="text"
                        required
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                        placeholder="e.g. Director of Growth"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                        <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn URL
                      </label>
                      <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">
                      Short Bio
                    </label>
                    <textarea
                      required
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium resize-none"
                      placeholder="Describe their style, superpowers, or role inside the creative crew..."
                    />
                  </div>

                  {/* Fun Fact Section */}
                  <div className="bg-orange-50 dark:bg-orange-500/5 border border-orange-100 dark:border-orange-500/10 p-6 rounded-2xl">
                    <h4 className="font-bold flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-4">
                      <Sparkles className="w-5 h-5" /> Fun Fact (Card Overlay)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 dark:text-slate-400 text-xs font-bold mb-2">Label</label>
                        <input
                          type="text"
                          value={funFactLabel}
                          onChange={(e) => setFunFactLabel(e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition-all text-sm font-medium placeholder-slate-400"
                          placeholder="e.g. Coffee Order"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 dark:text-slate-400 text-xs font-bold mb-2">Value</label>
                        <input
                          type="text"
                          value={funFactValue}
                          onChange={(e) => setFunFactValue(e.target.value)}
                          className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-orange-500 transition-all text-sm font-medium placeholder-slate-400"
                          placeholder="e.g. Double Espresso"
                        />
                      </div>
                    </div>
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
                  form="team-form"
                  type="submit"
                  className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-400 hover:to-rose-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  {editingMember ? "Save Changes" : "Add Member"}
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManageTeam;
