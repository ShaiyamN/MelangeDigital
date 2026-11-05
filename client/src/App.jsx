import {
  Route,
  Routes,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";

import { useEffect, useLayoutEffect, useRef, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import useLenis from "./hooks/useLenis";
import { deorphan } from "./utils/deorphan";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Primary navigation pages stay eager for instant navigation without Suspense flashes
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Services from "./components/pages/Services";
import Works from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Career from "./components/pages/Career";

// Secondary content & dynamic routes: load on demand
const Blogs = lazy(() => import("./components/pages/Blogs"));
const BlogDetail = lazy(() => import("./components/pages/BlogDetail"));
const ServiceDetail = lazy(() => import("./components/pages/Services/ServiceDetail"));
const CaseStudyDetail = lazy(() => import("./components/pages/Casestudies/CaseStudyDetail"));
const Location = lazy(() => import("./components/pages/Location"));

// Legal / Policy routes
const TermsofService = lazy(() => import("./components/pages/TermsofService"));
const PrivatePolicy = lazy(() => import("./components/pages/PrivatePolicy"));
const Refund = lazy(() => import("./components/pages/Refund"));
const Cookies = lazy(() => import("./components/pages/Cookies"));

// Admin components
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const ManageCaseStudies = lazy(() => import("./components/admin/ManageCaseStudies"));
const ManageBlogs = lazy(() => import("./components/admin/ManageBlogs"));
const ManageJobs = lazy(() => import("./components/admin/ManageJobs"));
const ManageTeam = lazy(() => import("./components/admin/ManageTeam"));

function DeorphanCopy() {
  const { pathname } = useLocation();

  useEffect(() => {
    let raf;
    let applying = false;
    const run = () => {
      if (applying) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        applying = true;
        deorphan(document.body);
        applying = false;
      });
    };
    run();
    const mo = new MutationObserver(run);
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Drop pin-spacers / scrub state left behind by the previous page
    ScrollTrigger.getAll().forEach((st) => st.kill());

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const lenis = window.__melangeLenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [pathname]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      ScrollTrigger.refresh(true);
      window.__melangeLenis?.resize();
    }, 80);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}

// Hook to handle tab visibility change (only title changes)
function useTabVisibility() {
  useEffect(() => {
    const awayTitle = "Missing you already";
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        originalTitle = document.title;
        document.title = awayTitle;
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
}

function BlogSlugRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/blogs/${slug}`} replace />;
}

function getServerSchemas(pathname) {
  return Array.from(document.querySelectorAll("script[data-seo-route]"))
    .filter((script) => script.getAttribute("data-seo-route") === pathname)
    .flatMap((script) => {
      try {
        return [JSON.parse(script.textContent || "")];
      } catch (error) {
        console.error(`Invalid server JSON-LD for ${pathname}:`, error);
        return [];
      }
    });
}

function RouteStructuredData() {
  const { pathname } = useLocation();
  const hasSkippedInitialLoad = useRef(false);
  const [routeData, setRouteData] = useState(() => ({
    path: pathname,
    schemas: getServerSchemas(pathname),
  }));
  const schemas = routeData.path === pathname ? routeData.schemas : [];

  useEffect(() => {
    if (window.__PRERENDERING__) return;
    if (!hasSkippedInitialLoad.current) {
      hasSkippedInitialLoad.current = true;
      return;
    }

    let active = true;
    fetch(`/api/seo/schema?path=${encodeURIComponent(pathname)}`, {
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (!Array.isArray(result.schemas)) {
          throw new Error("Invalid schema response");
        }
        if (active) setRouteData({ path: pathname, schemas: result.schemas });
      })
      .catch((error) => {
        if (active) {
          console.error(`Failed to load JSON-LD for ${pathname}:`, error);
          setRouteData({ path: pathname, schemas: [] });
        }
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  if (!schemas.length) return null;

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={`${pathname}-${index}`}
          type="application/ld+json"
          data-seo-route={pathname}
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

function App() {
  useTabVisibility();
  useLenis();

  return (
    <>
      <ScrollToTop />
      <DeorphanCopy />
      <RouteStructuredData />
      <Suspense fallback={<div className="min-h-screen bg-transparent" aria-hidden="true" />}>
        <Routes>
          {/* Canonical core pages */}
          <Route exact path="/" Component={Home} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/services/:slug" Component={ServiceDetail} />
          {/* Legacy sub-service redirects */}
          <Route path="/services/*" element={<Navigate to="/services" replace />} />

          <Route exact path="/work" Component={Works} />
          {/* Legacy case study redirects */}
          <Route exact path="/singapore-tourism" element={<Navigate to="/work/singapore-tourism-board" replace />} />
          <Route exact path="/singapore-tourism-aeo-seo" element={<Navigate to="/work/singapore-tourism-board" replace />} />
          <Route exact path="/siam-malls" element={<Navigate to="/work/siam-malls" replace />} />
          <Route exact path="/ganga-fashion" element={<Navigate to="/work/ganga-fashions" replace />} />
          <Route exact path="/work/GenVR" element={<Navigate to="/work/genvr" replace />} />
          <Route exact path="/work/neoTraders" element={<Navigate to="/work/neotraders" replace />} />
          <Route exact path="/work/devBoost" element={<Navigate to="/work/devboost" replace />} />
          <Route exact path="/work/singapore-tourism-board-stb" element={<Navigate to="/work/singapore-tourism-board" replace />} />

          {/* Dynamic work case studies */}
          <Route exact path="/work/:slug" Component={CaseStudyDetail} />

          {/* Content & info pages */}
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/careers" Component={Career} />
          <Route exact path="/blogs" Component={Blogs} />
          <Route exact path="/blogs/:slug" Component={BlogDetail} />
          <Route exact path="/blog" element={<Navigate to="/blogs" replace />} />
          <Route exact path="/blog/:slug" Component={BlogSlugRedirect} />
          <Route exact path="/location/:locationId" Component={Location} />

          {/* Destination marketing redirects */}
          <Route exact path="/destination-marketing" element={<Navigate to="/" replace />} />
          <Route exact path="/destination-marketing-agency" element={<Navigate to="/" replace />} />

          {/* Legal / Policy pages */}
          <Route exact path="/terms-of-service" Component={TermsofService} />
          <Route exact path="/privacy-policy" Component={PrivatePolicy} />
          <Route exact path="/cancellation-and-refund-policy" Component={Refund} />
          <Route exact path="/cookie-policy" Component={Cookies} />

          {/* Admin routes */}
          <Route exact path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route exact path="/admin/login" Component={AdminLogin} />
          <Route exact path="/admin/dashboard" Component={AdminDashboard} />
          <Route exact path="/admin/manage-case-studies" Component={ManageCaseStudies} />
          <Route exact path="/admin/manage-blogs" Component={ManageBlogs} />
          <Route exact path="/admin/manage-jobs" Component={ManageJobs} />
          <Route exact path="/admin/manage-team" Component={ManageTeam} />

          {/* Keep catch-all last so it never steals real routes */}
          <Route path="*" Component={Error} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
