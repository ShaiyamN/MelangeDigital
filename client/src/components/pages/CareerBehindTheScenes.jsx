import { useEffect, useRef, useState } from "react";

const IMG = "/Career Pages";

const TOP_CLS = ["career-bts__l", "career-bts__s", "career-bts__l", "career-bts__s"];
const BOT_CLS = ["career-bts__s", "career-bts__l", "career-bts__s", "career-bts__l"];

const SLIDES = [
  [
    { src: `${IMG}/Team 4.jpg`, pos: "86.6% 66.8%" },
    { src: `${IMG}/Team 1.jpg`, pos: "45.9% 48.3%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.30.13 PM.jpeg`, pos: "50% 50%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.35.36 PM.jpeg`, pos: "50% 40%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.42.32 PM.jpeg`, pos: "50.1% 54.1%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.30.13 PM (2).jpeg`, pos: "50% 40%" },
    { src: `${IMG}/Team 3.jpg`, pos: "50% 50%" },
    { src: `${IMG}/Team 2.jpg`, pos: "35.5% 59.7%" },
  ],
  [
    { src: `${IMG}/WhatsApp Image 2026-08-31 at 2.09.03 PM (3).jpeg`, pos: "46.2% 41.2%" },
    { src: `${IMG}/WhatsApp Image 2026-08-31 at 2.09.03 PM (1).jpeg`, pos: "50% 71%" },
    { src: `${IMG}/From blueprint to build-up in under 10 days.From ideation to impact.From vision to victory.✨What (1).jpg`, pos: "43.4% 20.6%" },
    { src: `${IMG}/WhatsApp Image 2026-08-31 at 2.09.03 PM (4).jpeg`, pos: "54.9% 43.3%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.35.57 PM.jpeg`, pos: "50% 50%" },
    { src: `${IMG}/Image_20260123_184650_098 (1).jpeg`, pos: "50% 50%" },
    { src: `${IMG}/Singapore-just-got-louder-2.jpg`, pos: "55.8% 62.5%" },
    { src: `${IMG}/Copy of AOS03206.JPG`, pos: "50% 50%" },
  ],
  [
    { src: `${IMG}/From blueprint to build-up in under 10 days.From ideation to impact.From vision to victory.✨What (2).jpg`, pos: "51.2% 34.7%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.34.41 PM.jpeg`, pos: "50% 40%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.30.13 PM (1).jpeg`, pos: "50% 40%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.33.13 PM.jpeg`, pos: "73.5% 38.9%" },
    { src: `${IMG}/IMG_4395.jpg`, pos: "69.8% 58.4%" },
    { src: `${IMG}/WhatsApp Image 2026-08-31 at 2.09.03 PM (7).jpeg`, pos: "50% 50%" },
    { src: `${IMG}/From blueprint to build-up in under 10 days.From ideation to impact.From vision to victory.✨What.jpg`, pos: "74.9% 41.9%" },
    { src: `${IMG}/WhatsApp Image 2026-09-03 at 5.41.35 PM.jpeg`, pos: "50% 40%" },
  ],
];

function Tile({ tile, cls }) {
  return (
    <div className={cls}>
      <img src={tile.src} alt="" draggable={false} style={{ objectPosition: tile.pos }} />
    </div>
  );
}

function LifeGallery({ padRef }) {
  const scrollerRef = useRef(null);
  const metrics = useRef({ pad: 104, slideW: 1105 });
  const [pad, setPad] = useState(104);

  useEffect(() => {
    const box = padRef.current;
    const el = scrollerRef.current;
    if (!box || !el) return;
    const measure = () => {
      const cs = getComputedStyle(box);
      const pl = parseFloat(cs.paddingLeft) || 0;
      const slide = el.querySelector(".career-bts__slide");
      const next = { pad: box.offsetLeft + pl, slideW: slide?.offsetWidth || 1105 };
      metrics.current = next;
      setPad(next.pad);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [padRef]);

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    e.preventDefault();
    const startX = e.clientX;
    const startScroll = el.scrollLeft;
    el.classList.add("is-dragging");
    const move = (ev) => {
      el.scrollLeft = startScroll - (ev.clientX - startX);
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      const to = el.scrollLeft;
      const step = metrics.current.slideW + 73;
      const last = (SLIDES.length - 1) * step;
      const current = Math.round(Math.min(startScroll, last) / step);
      let i = current;
      if (Math.abs(to - startScroll) > 80) {
        i = to > startScroll ? current + 1 : current - 1;
      } else {
        i = Math.round(to / step);
      }
      i = Math.max(0, Math.min(SLIDES.length - 1, i));
      el.scrollTo({ left: i * step, behavior: "smooth" });
      setTimeout(() => el.classList.remove("is-dragging"), 320);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div
      ref={scrollerRef}
      className="life-gallery"
      style={{ paddingLeft: pad, paddingRight: pad, scrollPaddingLeft: pad }}
      onMouseDown={onMouseDown}
    >
      {SLIDES.map((srcs, i) => (
        <div key={i} className="career-bts__slide" aria-label={`${i + 1} / ${SLIDES.length}`} role="group">
          <div className="career-bts__row career-bts__row--top">
            {srcs.slice(0, 4).map((t, j) => (
              <Tile key={t.src} tile={t} cls={TOP_CLS[j]} />
            ))}
          </div>
          <div className="career-bts__row career-bts__row--bot">
            {srcs.slice(4, 8).map((t, j) => (
              <Tile key={t.src} tile={t} cls={BOT_CLS[j]} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CareerBehindTheScenes() {
  const padRef = useRef(null);
  return (
    <section className="career-bts">
      <div ref={padRef} className="career-wrap">
        <div className="career-split">
          <h2 className="career-h2">
            Behind the Scenes at <span className="career-italic">Melange Digital</span>
          </h2>
          <p className="career-lede">
            The work on our site starts with a team that likes being around each other, on set, at trade shows, and sometimes after a shoot wraps. We tell other people's stories for a living. Here's a little of&nbsp;ours.
          </p>
        </div>
      </div>
      <LifeGallery padRef={padRef} />
    </section>
  );
}
