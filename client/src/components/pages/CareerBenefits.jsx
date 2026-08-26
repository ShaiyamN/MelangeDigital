const CARDS = [
  { src: "721bcf8d9032", title: "Competitive salary and role trajectory", body: "Your roles, responsibilities, and compensation will grow as we do." },
  { src: "e8239f379b89", title: "Health insurance", body: "Fully funded, high quality health, dental & vision coverage options for NYC teammates. Insurance options for remote teammates may vary by location." },
  { src: "032d2e46c063", title: "Visa and green card sponsorship", body: "We know it can be an arduous process, but we're here to help you succeed." },
  { src: "de9f19fa017e", title: "Flexible schedules & paid time off", body: "Work-life balance matters. We expect everyone to take their vacation weeks off." },
  { src: "bc054e41616f", title: "Socials & retreats", body: "We love hanging out: from DJ Fridays to daily team lunches to soccer. We also gather in-person at a special retreat each year." },
  { src: "2ffc799da2fa", title: "Personal comfort", body: "Order whatever equipment you think will help you work more enjoyably. Lunch and dinner are provided in office every day." },
  { src: "d4039ce56f47", title: "Flexible in-person culture", body: "We love the energy of in-person collaboration while also offering the flexibility to work from home when needed." },
  { src: "19c657379131", title: "Parental and family benefits", body: "We support current and future parents with IVF fertility benefits, egg freezing, and 4 months of paid parental leave." },
];

export default function CareerBenefits() {
  return (
    <section className="career-clay overflow-x-hidden py-16 md:py-24 lg:py-32" style={{ background: "var(--cc-surface-4)" }}>
      <div className="cc-wrap">
        <div className="mb-10 md:mb-16">
          <div className="cc-pill" style={{ background: "var(--cc-pink)" }}>Company benefits</div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="cc-h2 max-w-xl">Benefits to help you make the best work of your life</h2>
            <p className="cc-lead max-w-xl">
              We think a lot about the impact that software has on a global scale, but also just how powerful each individual becomes when given the tools to be successful.
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
