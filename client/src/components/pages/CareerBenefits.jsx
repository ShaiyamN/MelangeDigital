const IMG = "/careers";

const CARDS = [
  {
    src: "721bcf8d9032",
    title: "Competitive salary and role trajectory",
    body: "Your role and pay grow as the agency does, not on a fixed yearly cycle.",
  },
  {
    src: "e8239f379b89",
    title: "Health Insurance",
    body: "Comprehensive health coverage, wherever you're based.",
  },
  {
    src: "de9f19fa017e",
    title: "Flexible schedules & paid time off",
    body: "Work-life balance matters here. We expect you to actually use your time off.",
  },
  {
    src: "2ffc799da2fa",
    title: "Travel the world for work",
    body: "With teams in India, Singapore, the United Arab Emirates, the United Kingdom, and Zambia, travel isn't just a line item. Shoots and client trips happen across all five markets.",
  },
];

export default function CareerBenefits() {
  return (
    <section className="career-benefits">
      <div className="career-wrap">
        <div className="career-split">
          <h2 className="career-h2">
            Benefits to help you make the <span className="career-italic">best work</span> of your life
          </h2>
          <p className="career-lede">
            We work across five countries and a dozen clients. The benefits reflect that: real growth, real time off, and work worth talking about.
          </p>
        </div>
        <div className="career-benefits__grid">
          {CARDS.map((c) => (
            <article key={c.src} className="career-benefits__card">
              <div className="career-benefits__icon">
                <img src={`${IMG}/${c.src}.avif`} alt="" width="48" height="48" loading="lazy" />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
