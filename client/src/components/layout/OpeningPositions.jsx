import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { closeBtn } from "../../assets/images";
import MelangeCta from "./MelangeCta";

const OpeningPositions = ({ scrollToForm, onApply }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "jobs"))
      .then((snapshot) =>
        setJobs(
          snapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .filter((job) => job.active !== false),
        ),
      )
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  const hasText = (html) =>
    typeof html === "string" && html.replace(/<[^>]*>/g, "").trim().length > 0;

  const closeDetails = () => {
    setSelectedJob(null);
    document.body.style.overflow = "";
  };

  const openDetails = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const applyFor = (title) => {
    if (onApply) onApply(title);
    scrollToForm();
  };

  return (
    <section id="open-positions" className="career-open">
      <div className="career-wrap">
        <h2 className="career-h2">Open Positions</h2>
        {jobs.length ? (
          <ul className="career-open__list">
            {jobs.map((job) => (
              <li key={job.id} className="career-open__row">
                <p className="career-open__title">{job.title}</p>
                <div className="career-open__actions">
                  <button type="button" className="career-open__link" onClick={() => openDetails(job)}>
                    View Details
                  </button>
                  <MelangeCta className="career-open__apply" onClick={() => applyFor(job.title)}>
                    Apply Now
                  </MelangeCta>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="career-open__empty">There are no open positions at the moment.</p>
        )}
        <p className="career-open__note">
          Don&apos;t see the right role? The form below is still open. Tell us what you&apos;ve got.
        </p>
      </div>

      {selectedJob && (
        <div className="career-open__modal" role="presentation" onClick={closeDetails}>
          <div
            className="career-open__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-job-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="career-job-title" className="career-open__dialog-title">
              {selectedJob.title}
            </h3>

            {hasText(selectedJob.description) && (
              <div
                className="career-open__dialog-body about-html-content cs-rendered-content"
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              />
            )}

            {selectedJob.sections?.map((section, index) => (
              <div key={index} className="career-open__dialog-body">
                <h4 className="career-open__dialog-h4">{section.title}</h4>
                <ul className="career-open__dialog-list">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {hasText(selectedJob.about) && (
              <div
                className="career-open__dialog-body about-html-content cs-rendered-content"
                dangerouslySetInnerHTML={{ __html: selectedJob.about }}
              />
            )}

            {((Array.isArray(selectedJob.keyResponsibilities) && selectedJob.keyResponsibilities.some(Boolean)) ||
              hasText(selectedJob.keyResponsibilities)) && (
              <div className="career-open__dialog-body">
                <h4 className="career-open__dialog-h4">Key Responsibilities</h4>
                {Array.isArray(selectedJob.keyResponsibilities) ? (
                  <ul className="career-open__dialog-list">
                    {selectedJob.keyResponsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div
                    className="about-html-content cs-rendered-content"
                    dangerouslySetInnerHTML={{ __html: selectedJob.keyResponsibilities }}
                  />
                )}
              </div>
            )}

            {((Array.isArray(selectedJob.qualifications) && selectedJob.qualifications.some(Boolean)) ||
              hasText(selectedJob.qualifications)) && (
              <div className="career-open__dialog-body">
                <h4 className="career-open__dialog-h4">Qualifications</h4>
                {Array.isArray(selectedJob.qualifications) ? (
                  <ul className="career-open__dialog-list">
                    {selectedJob.qualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div
                    className="about-html-content cs-rendered-content"
                    dangerouslySetInnerHTML={{ __html: selectedJob.qualifications }}
                  />
                )}
              </div>
            )}

            {((Array.isArray(selectedJob.benefits) && selectedJob.benefits.some(Boolean)) ||
              hasText(selectedJob.benefits)) && (
              <div className="career-open__dialog-body">
                <h4 className="career-open__dialog-h4">Benefits</h4>
                {Array.isArray(selectedJob.benefits) ? (
                  <ul className="career-open__dialog-list">
                    {selectedJob.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <div
                    className="about-html-content cs-rendered-content"
                    dangerouslySetInnerHTML={{ __html: selectedJob.benefits }}
                  />
                )}
              </div>
            )}

            <button type="button" className="career-open__close" aria-label="Close" onClick={closeDetails}>
              <img src={closeBtn} alt="" width="24" height="24" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OpeningPositions;
