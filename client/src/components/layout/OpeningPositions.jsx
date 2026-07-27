import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { closeBtn } from "../../assets/images";

const OpeningPositions = ({ scrollToForm }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "jobs"))
      .then((snapshot) => setJobs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  const closeDetails = () => {
    setSelectedJob(null);
    document.body.style.overflow = "";
  };

  const openDetails = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="lg:px-28 px-5 lg:py-[60px] py-10 bg-[#F3F3F3]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="md:text-[40px] text-[24px] lg:leading-[48px] font-semibold">Open Positions</h2>
        {jobs.length ? jobs.map((job) => (
          <div key={job.id} className="lg:flex items-center justify-between mt-6 pb-7 border-b border-[#CBCBCB]">
            <p className="font-bricolage lg:text-[24px] text-[20px] leading-[30px] text-[#1A1A1A]">{job.title}</p>
            <div className="flex items-center lg:justify-normal justify-end space-x-5 lg:mt-0 mt-5">
              <button className="multiColor underline font-semibold text-[16px]" onClick={() => openDetails(job)}>View Details</button>
              <button className="border border-[#D940FF] rounded-[30px] py-2 px-[12px] font-semibold text-[16px] applyBtn" onClick={scrollToForm}>Apply Now</button>
            </div>
          </div>
        )) : <p className="mt-6 text-[#555]">There are no open positions at the moment.</p>}
      </div>
      <p className="md:text-[20px] text-[18px] md:leading-[26px] leading-[24px] font-bricolage pt-10 font-bold text-center">The role you want doesn't exist yet? Form's waiting below. Tell us what you have got.</p>
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:px-28 font-bricolage z-[1000]">
          <div data-lenis-prevent="true" className="bg-white lg:px-6 lg:py-6 px-5 py-6 w-full max-h-[80vh] mt-10 overflow-y-auto relative z-[1001] custom-scrollbar">
            <h3 className="text-2xl font-bold pr-10">{selectedJob.title}</h3>
            
            {/* Legacy description if it exists */}
            {selectedJob.description && (
              <div className="mt-5 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
            )}
            
            {/* Legacy sections if they exist */}
            {selectedJob.sections?.map((section, index) => (
              <div key={index} className="mt-5">
                <h4 className="font-bold">{section.title}</h4>
                <ul className="list-disc ml-5">
                  {section.items?.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              </div>
            ))}
            
            {/* New Admin Panel Fields */}
            {selectedJob.about && (
              <div className="mt-5 text-[#1A1A1A] leading-relaxed whitespace-pre-wrap about-html-content" dangerouslySetInnerHTML={{ __html: selectedJob.about }} />
            )}
            
            {selectedJob.keyResponsibilities && selectedJob.keyResponsibilities.length > 0 && (
              <div className="mt-5">
                <h4 className="font-bold mb-2 text-lg text-[#1A1A1A]">Key Responsibilities</h4>
                <ul className="list-disc ml-5 text-[#1A1A1A] space-y-1">
                  {selectedJob.keyResponsibilities.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {selectedJob.qualifications && selectedJob.qualifications.length > 0 && (
              <div className="mt-5">
                <h4 className="font-bold mb-2 text-lg text-[#1A1A1A]">Qualifications</h4>
                <ul className="list-disc ml-5 text-[#1A1A1A] space-y-1">
                  {selectedJob.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {selectedJob.benefits && selectedJob.benefits.length > 0 && (
              <div className="mt-5">
                <h4 className="font-bold mb-2 text-lg text-[#1A1A1A]">Benefits</h4>
                <ul className="list-disc ml-5 text-[#1A1A1A] space-y-1">
                  {selectedJob.benefits.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            )}
            
            <img src={closeBtn} alt="Close" className="w-[24px] absolute top-5 right-5 cursor-pointer" onClick={closeDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OpeningPositions;
