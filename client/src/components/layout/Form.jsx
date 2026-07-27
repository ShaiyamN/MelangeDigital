import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Australia","Austria","Bahrain","Bangladesh","Belgium","Brazil","Canada","China","Denmark","Egypt","Finland","France","Germany","Greece","Hong Kong","India","Indonesia","Ireland","Israel","Italy","Japan","Kenya","Kuwait","Malaysia","Mexico","Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Philippines","Poland","Portugal","Qatar","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Thailand","Turkey","UAE","UK","USA","Vietnam","Zimbabwe"
];

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const splashRef = useRef(null);
  const formRef = useRef(null);

  const validateEmail = () => {
    const form = formRef.current;
    const emailFld = form.querySelectorAll("[ftype=email]");
    for (let i = 0; i < emailFld.length; i++) {
      const emailVal = (emailFld[i].value || "").trim();
      if (emailVal.length) {
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert("Please enter a valid email address.");
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  };

  const checkMandatory = () => {
    const mndFields = ["Company", "Last Name"];
    const fldLangVal = ["Company", "Last Name"];
    const form = formRef.current;
    for (let i = 0; i < mndFields.length; i++) {
      const fieldObj = form[mndFields[i]];
      if (fieldObj) {
        const v = (fieldObj.value || "").trim();
        if (!v.length) {
          alert(`${fldLangVal[i]} cannot be empty.`);
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName === "SELECT") {
          if (fieldObj.options[fieldObj.selectedIndex].value === "-None-") {
            alert(`${fldLangVal[i]} cannot be none.`);
            fieldObj.focus();
            return false;
          }
        }
      }
    }
    if (!validateEmail()) return false;

    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
      const service = urlparams.get("service");
      let hidden = form.querySelector("input[name='service']");
      if (!hidden) {
        hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "service";
        form.appendChild(hidden);
      }
      hidden.value = service;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!checkMandatory()) return;

    setSubmitting(true);
    formRef.current.querySelector(".formsubmit").setAttribute("disabled", "true");

    try {
      const fd = new FormData(formRef.current);
      const res = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        body: fd,
      });

      const text = await res.text();
      const match = text.match(/actionvalue[^>]*>([^<]+)/i);
      const actionValue = match ? match[1] : "Submitted successfully.";

      if (splashRef.current) {
        const info = splashRef.current.querySelector("#wf_splash_info");
        if (info) info.textContent = actionValue;
        splashRef.current.style.display = "";
        setTimeout(() => {
          splashRef.current.style.display = "none";
        }, 5000);
      }

      formRef.current.reset();
      setSubmitted(true);
    } catch (err) {
      alert("An error occurred while submitting. Please try again.");
    } finally {
      setSubmitting(false);
      formRef.current.querySelector(".formsubmit").removeAttribute("disabled");
    }
  };

  useEffect(() => {
    const existing = document.getElementById("wf_anal");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "wf_anal";
    s.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9976c7f0ec62a1d67ea015de64cbcc0a132505161f57fef80698543ad61facbff3608cba1176e550436a434fd0790183gid6e31b45257ddb031c904efc2eb586b7265cf2540e1d9526abda91e9615c8a98agidd34d815171ed3cc58926052436f340299184f9807cefc63921dd46b5549b9c2agidb5e59b0260ea8693218d4aa8efe7974a316c5f1d35c91b20d9149cfd6af78597&tw=f9b4ec3d86d9a92a7905b4eb4b66231a75c331def8af7e04100837e4db9ca97d";
    document.body.appendChild(s);
  }, []);

  return (
    <div className="form-container form-bg mx-4 md:mx-6 lg:mx-14 mt-0 py-10">
      {/* Zoho success splash */}
      <div
        ref={splashRef}
        id="wf_splash"
        style={{ display: "none" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[11000] bg-[#F5FAF5] border border-[#A9D3AB] shadow px-4 py-2 rounded flex items-center space-x-2"
      >
        <div className="w-5 h-5 rounded-full bg-[#12AA67] relative">
          <span className="absolute left-[6px] top-[9px] rotate-45 w-[3px] h-[8px] border-b-2 border-r-2 border-white" />
        </div>
        <span id="wf_splash_info" className="text-[#132C14] text-sm"></span>
      </div>

      {!submitted ? (
        <form
          id="webform823188000003418001"
          name="WebToLeads823188000003418001"
          acceptCharset="UTF-8"
          ref={formRef}
          onSubmit={onSubmit}
          className="form-content lg:px-16 px-14 md:px-8 max-w-[900px] mx-auto"
        >
          {/* Zoho required hidden fields */}
          <input type="hidden" name="xnQsjsdp" value="e3a9e694ffc5556ce8c8030bc1a465430d4de9631d65fa0a40a86ce54be9bf09" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="c7fccf0021153629ae2f71be6e6d7a88069eae1f18b2cae6f93d8d88fea6e9db31d2d97200b911a103600576377aac02" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="null" />
          <input type="hidden" name="aG9uZXlwb3Q" value="" />

          {/* Inputs */}
          <div className="mb-4">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              placeholder="Your First Name"
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              placeholder="Your Last Name *"
              required
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="Email"
              name="Email"
              ftype="email"
              autoComplete="off"
              placeholder="Your Email ID"
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              id="Mobile"
              name="Mobile"
              placeholder="Your Mobile Number"
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="Company"
              name="Company"
              placeholder="Your Company Name *"
              required
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="Country"
              name="Country"
              placeholder="Country"
              list="country-list"
              className="w-full px-0 bg-transparent py-2 border-b outline-none border-[#756f6f]"
            />
            <datalist id="country-list">
              {COUNTRIES.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>

          <div className="mb-4 text-left">
            <select
              id="LEADCF34"
              name="LEADCF34"
              className="w-full bg-transparent border-b border-[#756f6f] py-2 outline-none"
              defaultValue="-None-"
            >
              <option value="-None-">Select Service</option>
              <option value="Influencer Marketing">Influencer Marketing</option>
              <option value="Performance Marketing">Performance Marketing</option>
              <option value="Video Production">Video Production</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Content Solution & Design">Content Solution & Design</option>
              <option value="All Products">All Products</option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              name="Description"
              placeholder="Your Message"
              className="w-full px-2 resize-none bg-transparent py-2 border outline-none border-[#756f6f]"
              rows="4"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="submitBtn hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-[50px] formsubmit"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      ) : (
        <div className="Thankyou_Container text-center py-10 px-4">
          <h2 className="text-2xl font-bold text-blue-600">
            Thank you, your details have been submitted successfully
          </h2>
          <p className="text-gray-700 mt-4">
            We have received your details and will get back to you shortly
          </p>
          <div className="flex justify-center mt-12">
            <Link to="/">
              <button className="submitBtn hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-[50px]">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
