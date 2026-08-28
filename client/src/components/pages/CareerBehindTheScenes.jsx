import { useEffect, useRef, useState } from "react";

const IMG = "/careers";
const CDN = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe";

const TOP_CLS = ["career-bts__l", "career-bts__s", "career-bts__l", "career-bts__s"];
const BOT_CLS = ["career-bts__s", "career-bts__l", "career-bts__s", "career-bts__l"];

const SLIDES = [
  [
    `${IMG}/bts-1.png`,
    `${IMG}/bts-5.png`,
    `${IMG}/bts-2.png`,
    `${IMG}/bts-6.png`,
    `${IMG}/why-03.jpg`,
    `${IMG}/bts-3.png`,
    `${IMG}/why-02.jpg`,
    `${IMG}/bts-4.png`,
  ],
  [
    `${CDN}/69308453b43b3dd6d1b99d25_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-202.jpg`,
    `${CDN}/67212b94bf55407e09b6e258_career%20gallery%20img%2007.avif`,
    `${CDN}/693084577b17b71f7de31173_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-401%20(1).jpg`,
    `${CDN}/67211245ca13549557b63451_career%20gallery%20img%2002.avif`,
    `${CDN}/693084c10dcd53b8ba432494_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-474.jpg`,
    `${CDN}/672112467d409c6fa497c735_career%20gallery%20img%2015.webp`,
    `${CDN}/6721124620b28b7a359fee7f_career%20gallery%20img%2016.webp`,
    `${CDN}/672112469082a1060de4f56d_career%20gallery%20img%2014.webp`,
  ],
  [
    `${CDN}/67211246c3733a9e6f4f3927_career%20gallery%20img%2004.webp`,
    `${CDN}/672112455497d6ce1df4409c_career%20gallery%20img%2009.avif`,
    `${CDN}/67211246a183aab7abb1e42d_career%20gallery%20img%2010.webp`,
    `${CDN}/672112465cf7d140297e4224_career%20gallery%20img%2003.webp`,
    `${CDN}/67211245751e4fdd43462d0d_career%20gallery%20img%2005.avif`,
    `${CDN}/672112462c7e7be67ee63c20_career%20gallery%20img%2012.webp`,
    `${CDN}/69308537f4ac90971531f62c_clay%20office%20party%20jan%2031%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-30.jpg`,
    `${CDN}/693085b8806f9997cba4cdd7_clay%20office%20party%20jan%2031%202025%20by%20Luis%20Nieto%20Dickens%20-96.jpg`,
  ],
];

function Tile({ src, cls }) {
  return (
    <div className={cls}>
      <img src={src} alt="" draggable={false} />
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
            {srcs.slice(0, 4).map((src, j) => (
              <Tile key={src} src={src} cls={TOP_CLS[j]} />
            ))}
          </div>
          <div className="career-bts__row career-bts__row--bot">
            {srcs.slice(4, 8).map((src, j) => (
              <Tile key={src} src={src} cls={BOT_CLS[j]} />
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
