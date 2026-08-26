function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  { n: "1", color: "var(--cc-n1)", title: "Intro call", body: "In this initial chat with a recruiter or hiring manager, we'll share details about the role and the team. We'll also dive into your experience and discuss what you're looking for in your next opportunity!" },
  { n: "2", color: "var(--cc-n2)", title: "Practical exercise or follow up call", body: "This step is all about helping us get to know you even better and giving you insight into what the role is really like. We'll tailor this part of the interview to focus on the specific skills that matter most for the position." },
  { n: "3", color: "var(--cc-n3)", title: "Onsite interview", body: "You'll participate in 3-5 interviews with the team you'd be joining, along with a few cross-functional partners. These interviews will mix behavioral and technical questions. Don't worry, we'll walk you through what to expect in advance so you can feel fully prepared and confident for these conversations!" },
  { n: "4", color: "var(--cc-n4)", title: "Founders interview", body: "In this last step, you'll have the chance to meet our co-founders and learn more about the company's vision and values. This is a great opportunity to discuss how you can contribute to the broader organization and to ask any final questions you may have about our culture and direction." },
  { n: "5", color: "var(--cc-primary)", title: "Reference checks", body: "Once we've wrapped up the final interview, you'll provide us with your references so we can gather feedback about your past experiences and contributions. We're excited to learn more about how we can support your growth within our organization." },
];

export default function CareerInterview({ onSeeJobs }) {
  return (
    <section className="career-clay overflow-x-hidden py-12 md:py-16 lg:pb-32 lg:pt-24">
      <div className="cc-wrap">
        <div className="mb-10 flex flex-col gap-6 md:mb-16 lg:flex-row lg:justify-between">
          <div className="max-w-xl">
            <div className="cc-pill" style={{ background: "var(--cc-green)" }}>Interview guides</div>
            <h2 className="cc-h2">What to expect in the interview process</h2>
          </div>
          <p className="cc-lead max-w-md">
            We'd love to get to know you better, and for you to learn about us too! Here's what you can typically expect from an interview process at Melange. Some positions might have more or fewer interviews, or have them in a different order.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="cc-step">
              <div className="cc-step-n" style={{ color: s.color }}>{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
          <div className="cc-apply">
            <h3>Ready to apply?</h3>
            <p>You'll participate in 3-5 interviews with the team you'd be joining, along with a few cross-functional partners.</p>
            <button type="button" className="cc-cta cc-cta--light" onClick={onSeeJobs}>
              See all job openings below
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
