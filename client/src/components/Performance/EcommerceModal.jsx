import { useEffect, useRef, useState } from "react";
import { popup } from "../../assets/performancePage";
import axios from "axios";

export default function EcommerceModal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const [submitted, setSubmitted] = useState(false); // Submission state
  const [alertVisible, setAlertVisible] = useState(false); // Alert state

  // Open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Lock background scroll
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // 🔒 Prevent page scroll
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const formRef = useRef();

  const addUserToLeadsFromPerfomance = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      Last_Name: name,
      Email: email,
    };

    // Start 1s timer regardless of Zoho response
    setTimeout(() => {
      setShowModal(false); // ✅ Close popup
      // setAlertVisible(true); // ✅ Show alert
      setName(""); // Reset form
      setEmail("");
      setLoading(false);
      alert(" Thank you for submitting!")

      // Auto-hide alert after 1s
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    }, 2000);

    // Still call Zoho API but don’t wait for it
    try {
      await axios.post("https://melange-server-ljcl.onrender.com/token-generate", { data });
    } catch (error) {
      console.error("Zoho error:", error); // Just log it
    }
  };

  const handleClose = () => setShowModal(false);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-start py-20 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl  mx-auto rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Image */}
        <div className="mb-6">
          <img
            src={popup}
            alt="Action Flow Diagram"
            className="w-full object-contain"
          />
        </div>

        {/* Title and Description */}
        <h2 className="text-xl font-semibold text-center mb-1">
          Download The $250K MRR Ecommerce Action Flow
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          (We'll send a full breakdown of the action flow to your email inbox)
        </p>

        {/* Form */}
        <form
          className="space-y-3"
          ref={formRef}
          onSubmit={addUserToLeadsFromPerfomance}
        >
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            name="name"
            placeholder="Enter your Full Name"
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded px-4 py-2 text-sm"
            required
          />
          <p className="text-xs text-gray-500 text-center">
            Your information is 100% secure
          </p>
          <button
            type="submit"
            disabled={loading}
            className="submitBtn hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-[50px]"
          >
            {loading ? <div className="form-loader mr-2"></div> : "Submit"}
          </button>
        </form>

        {alertVisible && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm z-[9999] transition-opacity duration-1000 ease-in-out opacity-100">
            Thank you for submitting!
          </div>
        )}
      </div>
    </div>
  );
}
