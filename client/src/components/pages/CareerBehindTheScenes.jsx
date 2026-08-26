import { useEffect, useRef, useState } from "react";

const CDN = "https://cdn.prod.website-files.com/61477f2c24a826836f969afe";

const SLIDES = [
  {
    label: "1 / 4",
    tiles: [
      { src: `${CDN}/69308453b43b3dd6d1b99d25_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-202.jpg`, span: 2, title: "Company retreat in Cape Cod and Massmoca", body: "Join our yearly company retreat" },
      { src: `${CDN}/67212b94bf55407e09b6e258_career%20gallery%20img%2007.avif` },
      { src: `${CDN}/693084577b17b71f7de31173_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-401%20(1).jpg` },
      { src: `${CDN}/67211245ca13549557b63451_career%20gallery%20img%2002.avif`, span: 2 },
    ],
  },
  {
    label: "2 / 4",
    tiles: [
      { src: `${CDN}/693084c10dcd53b8ba432494_clay%20retreat%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-474.jpg`, span: 2, title: "DJ Fridays", body: "On Fridays at 5pm, we turn the lights off and the music on! DJ Fridays are our longest-running ritual." },
      { src: `${CDN}/672112467d409c6fa497c735_career%20gallery%20img%2015.webp` },
      { src: `${CDN}/6721124620b28b7a359fee7f_career%20gallery%20img%2016.webp` },
      { src: `${CDN}/672112469082a1060de4f56d_career%20gallery%20img%2014.webp`, span: 2, title: "Holiday party", body: 'Our 2023 theme was "1920s meets Japanese chic" - full of good music, tarot card readings, a live Butoh performance, and more.' },
    ],
  },
  {
    label: "3 / 4",
    tiles: [
      { src: `${CDN}/67211246c3733a9e6f4f3927_career%20gallery%20img%2004.webp`, span: 2, title: "Coding & snuggles", body: "Sometimes, the best way to ship a PR is with a puppy by your side. We are a dog friendly office." },
      { src: `${CDN}/672112455497d6ce1df4409c_career%20gallery%20img%2009.avif` },
      { src: `${CDN}/67211246a183aab7abb1e42d_career%20gallery%20img%2010.webp` },
      { src: `${CDN}/672112465cf7d140297e4224_career%20gallery%20img%2003.webp`, span: 2, title: "Board games, or art and craft", body: "We love a good board game session - from Catan to Dune to Dungeons & Dragons." },
    ],
  },
  {
    label: "4 / 4",
    tiles: [
      { src: `${CDN}/67211245751e4fdd43462d0d_career%20gallery%20img%2005.avif`, span: 2, title: "Playing sports", body: "We love playing sports together, from our Melange soccer and running team to playing ping pong, pool and tennis." },
      { src: `${CDN}/672112462c7e7be67ee63c20_career%20gallery%20img%2012.webp` },
      { src: `${CDN}/69308537f4ac90971531f62c_clay%20office%20party%20jan%2031%202025%20by%20Luis%20Nieto%20Dickens%20-%20web%20-30.jpg` },
      { src: `${CDN}/693085b8806f9997cba4cdd7_clay%20office%20party%20jan%2031%202025%20by%20Luis%20Nieto%20Dickens%20-96.jpg`, span: 2, title: "Office experiences", body: "We love hanging in the office, whether we're collaborating in common areas or relaxing together between deep-work sessions." },
    ],
  },
];

function Tile({ tile }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl max-md:rounded-lg ${tile.span === 2 ? "col-span-2" : ""}`}>
      <img className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover" alt="" draggable={false} src={tile.src} />
      {tile.title ? (
        <div
          className="relative z-[2] hidden h-full flex-col items-start justify-end gap-2 p-4 text-white md:flex lg:p-6"
          style={{ backgroundImage: "linear-gradient(var(--cc-grad-0), var(--cc-grad-1))" }}
        >
          <div className="mb-3 text-2xl font-semibold leading-[1.8125rem] tracking-[-0.48px]">{tile.title}</div>
          <p className="mb-4 max-w-[31.6rem] leading-[1.375rem]">{tile.body}</p>
        </div>
      ) : null}
    </div>
  );
}

function LifeGallery({ padRef }) {
  const scrollerRef = useRef(null);
  const metrics = useRef({ pad: 64, slideW: 1152 });
  const [pad, setPad] = useState(64);
  const [slideW, setSlideW] = useState(1152);

  useEffect(() => {
    const box = padRef.current;
    if (!box) return;
    const measure = () => {
      const next = { pad: box.offsetLeft, slideW: box.offsetWidth };
      metrics.current = next;
      setPad(next.pad);
      setSlideW(next.slideW);
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
      const step = metrics.current.slideW + 20;
      let i = Math.round(to / step);
      if (Math.abs(to - startScroll) > 80) {
        i = to > startScroll ? Math.floor(startScroll / step) + 1 : Math.ceil(startScroll / step) - 1;
      }
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, i));
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
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
      {SLIDES.map((slide) => (
        <div key={slide.label} className="shrink-0 snap-start" style={{ width: slideW }} aria-label={slide.label} role="group">
          <div className="mt-4 grid aspect-[1152/808] grid-cols-3 grid-rows-2 gap-4 lg:mt-0 lg:gap-6">
            {slide.tiles.map((tile) => (
              <Tile key={tile.src} tile={tile} />
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
    <section className="career-clay overflow-x-hidden py-12 md:py-16 lg:py-32">
      <div ref={padRef} className="cc-wrap">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="cc-pill" style={{ background: "var(--cc-primary)" }}>Behind the scenes</div>
            <h2 className="cc-h2 font-bold">
              We value each other as much as the things we create. We can't wait to jam with you
            </h2>
          </div>
          <p className="cc-lead max-w-sm">
            Craft, attention to detail, and a deep enjoyment of the process are important to how we approach building things at Melange.
          </p>
        </div>
      </div>
      <LifeGallery padRef={padRef} />
    </section>
  );
}
