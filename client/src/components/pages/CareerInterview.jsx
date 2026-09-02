import MelangeCta from "../layout/MelangeCta";

const STEPS = [
  {
    n: "1",
    title: "Intro call",
    body: "A relaxed first chat with our recruiter or hiring manager. We'll walk you through the role, hear about your experience, and see if it's worth taking further.",
  },
  {
    n: "2",
    title: "Practical exercise or follow-up call",
    body: "Depending on the role, you'll do a short exercise close to real day-to-day work, or a deeper follow-up call. Either way, it's built around the actual skills the role needs.",
  },
  {
    n: "3",
    title: "Onsite interview",
    body: "You'll meet the team you'd actually work with, plus a couple of people from teams you'd collaborate with. Expect real scenarios and questions about how you think, not just what you know. We'll brief you beforehand so you're not walking in blind.",
  },
  {
    n: "4",
    title: "Founders interview",
    body: "A conversation with Sanket and Ekaterina, our founders, about where the agency's headed and where you'd fit. Ask us anything about culture or direction before deciding this is right for you.",
  },
  {
    n: "5",
    title: "Reference checks",
    body: "Once interviews wrap, we'll speak with a couple of references you provide, mainly to understand how you work best. Usually the last step before an offer.",
  },
];

export default function CareerInterview({ onSeeJobs }) {
  return (
    <section className="career-iv">
      <div className="career-wrap">
        <div className="career-split">
          <h2 className="career-h2">
            What to expect in the <span className="career-italic">Interview Process?</span>
          </h2>
        </div>
        <div className="career-iv__grid">
          {STEPS.map((s) => (
            <article key={s.n} className="career-iv__card">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="career-iv__n" aria-hidden="true">
                {s.n}
              </span>
            </article>
          ))}
          <article className="career-iv__card career-iv__apply">
            <h3>Ready to Apply</h3>
            <p>Found a role that fits? The process moves fast, most candidates hear back within a week at each stage.</p>
            <MelangeCta
              className="career-cta--light"
              iconClassName="melange-cta__icon--down"
              onClick={onSeeJobs}
            >
              See all job openings below
            </MelangeCta>
          </article>
        </div>
      </div>
    </section>
  );
}
