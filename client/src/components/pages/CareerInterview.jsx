const ARROW = "/about/arrow-top-right-purple.svg";

const STEPS = [
  {
    n: "1",
    title: "Intro call",
    body: "In this initial chat with a recruiter or hiring manager, we'll share details about the role and the team. We'll also dive into your experience and discuss what you're looking for in your next opportunity!",
  },
  {
    n: "2",
    title: "Practical exercise or follow up call",
    body: "This step is all about helping us get to know you even better and giving you insight into what the role is really like. We'll tailor this part of the interview to focus on the specific skills that matter most for the position.",
  },
  {
    n: "3",
    title: "Onsite interview",
    body: "You'll participate in 3-5 interviews with the team you'd be joining, along with a few cross-functional partners. These interviews will mix behavioral and technical questions. Don't worry, we'll walk you through what to expect in advance so you can feel fully prepared and confident for these conversations!",
  },
  {
    n: "4",
    title: "Founders interview",
    body: "In this last step, you'll have the chance to meet our co-founders and learn more about the company's vision and values. This is a great opportunity to discuss how you can contribute to the broader organization and to ask any final questions you may have about our culture and direction.",
  },
  {
    n: "5",
    title: "Reference checks",
    body: "Once we've wrapped up the final interview, you'll provide us with your references so we can gather feedback about your past experiences and contributions. We're excited to learn more about how we can support your growth within our organization.",
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
            <p>You'll participate in 3-5 interviews with the team you'd be joining, along with a few cross-functional partners.</p>
            <button type="button" className="career-cta career-cta--light" onClick={onSeeJobs}>
              <span>See all job openings below</span>
              <span className="career-cta__icon career-cta__icon--down" aria-hidden="true">
                <img src={ARROW} width="12" height="12" alt="" />
              </span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
