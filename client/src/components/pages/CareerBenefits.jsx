const CARDS = [
  { src: "721bcf8d9032", title: "Competitive salary and role trajectory", body: "Your role and pay grow as the agency does, not on a fixed yearly cycle." },
  { src: "e8239f379b89", title: "Health Insurance", body: "Comprehensive health coverage, wherever you're based." },
  { src: "de9f19fa017e", title: "Flexible schedules & paid time off", body: "Work-life balance matters here. We expect you to actually use your time off." },
  { src: "2ffc799da2fa", title: "Travel the world for work", body: "With teams in India, the UK, the UAE, Singapore and Zambia, travel isn't just a line item. Shoots and client trips happen across all five markets." },
];

export default function CareerBenefits() {
  return (
    <section className="career-clay overflow-x-hidden" style={{ background: "var(--cc-surface-4)" }}>
      <div className="cc-wrap">
        <div className="career-clay__head">
          <div className="cc-pill" style={{ background: "var(--cc-pink)" }}>Company benefits</div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="cc-h2 max-w-xl">Benefits to help you make the best work of your life</h2>
            <p className="cc-lead max-w-xl">
              We work across five countries and a dozen clients. The benefits reflect that: real growth, real time off, and work worth talking about.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div key={c.src} className="cc-card">
              <div className="cc-icon">
                <img alt="" src={`/assets/careers/${c.src}.avif`} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
