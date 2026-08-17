import { useEffect, useRef } from "react";

const SCRIPT = "/about/network-sphere.js";

const NetworkSphere = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const start = () => {
      if (typeof window.__initAboutNetworkSphere === "function") {
        window.__initAboutNetworkSphere(root);
      }
    };

    if (typeof window.__initAboutNetworkSphere === "function") {
      start();
      return undefined;
    }

    let script = document.querySelector(`script[src="${SCRIPT}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT;
      script.async = false;
      document.body.appendChild(script);
    }
    script.addEventListener("load", start);
    return () => script.removeEventListener("load", start);
  }, []);

  return (
    <div className="network-sphere-wrap">
      <div
        ref={rootRef}
        className="network-sphere"
        data-network-sphere=""
        role="img"
        aria-label="Interactive sphere of creator and campaign photos. Drag to rotate."
      />
    </div>
  );
};

export default NetworkSphere;
