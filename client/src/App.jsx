import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect, useLayoutEffect, lazy, Suspense } from "react";
import useLenis from "./components/Hook/useLenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Critical imports - keep as regular imports for initial load
import { Home, Error } from "./components/pages";
import Services from "./components/pages/Services";
import Works from "./components/pages/Works";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import SingaporeTourism from "./components/pages/Individuals/SingaporeTourism";
import SiamMalls from "./components/pages/Individuals/SiamMalls";
import GreenLabel from "./components/pages/Individuals/GreenLabel";
import GangaFashion from "./components/pages/Individuals/GangaFashion";
import AeoSeoService from "./components/pages/Individuals/AeoSeoService";
import SingaporeTourismAeoSeo from "./components/pages/Individuals/SingaporeTourismAeoSeo";

// Lazy load less frequently visited routes
const TermsofService = lazy(() => import("./components/pages/TermsofService"));
const PrivatePolicy = lazy(() => import("./components/pages/PrivatePolicy"));
const Refund = lazy(() => import("./components/pages/Refund"));
const Cookies = lazy(() => import("./components/pages/Cookies"));
const Career = lazy(() => import("./components/pages/Career"));
const ItbTourism = lazy(() => import("./components/pages/ItbTourism"));
const PerformanceLandingPage = lazy(() => import("./components/pages/PerformanceLandingPage"));
const Location = lazy(() => import("./components/pages/Location"));

// const BrandStrategy = lazy(() => import("./components/pages/Individuals/BrandStrategy"));
const BrandStrategyService = lazy(() => import("./components/pages/Individuals/BrandStrategyService"));

const CaseStudyDetail = lazy(() => import("./components/pages/Casestudies/CaseStudyDetail"));
const BlogDetail = lazy(() => import("./components/pages/Individuals/BlogDetail"));
const [Zee5, CostaCruises, Kalon, Duvon, MakeMyTrip, SportzVillage, ActiveClub, KunalRathod, SportzXP, Proportunity, Dhruvak, TravelStop, GenVR, RockHighland, Enerqual, Aartech, SingaporeTBoard, HerHK, MaisonLuxe, VedaNaturals, AkbarTravels, ZambiaTourism, NaviSavi, Rwc, GangaFashions, Versailles, HealthyMithai, JewelHouze, NeoTraders, devBoost] = Array(30).fill(CaseStudyDetail);
// Blog routes use dynamic :slug parameter
// Admin components
const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const ManageCaseStudies = lazy(() => import("./components/admin/ManageCaseStudies"));
const ManageBlogs = lazy(() => import("./components/admin/ManageBlogs"));
const ManageJobs = lazy(() => import("./components/admin/ManageJobs"));
const ManageTeam = lazy(() => import("./components/admin/ManageTeam"));



// Lazy load service pages - import directly from component files
const ContentMarketing = lazy(() => import("./components/pages/Individuals/ContentMarketing"));
const ContentStrategyService = lazy(() => import("./components/pages/Individuals/ContentStrategyService"));

const designDevelopmentService = lazy(() => import("./components/pages/Individuals/designDevelopmentService"));

const DesignSolutions = lazy(() => import("./components/pages/Individuals/DesignSolutions"));
const ECommerce = lazy(() => import("./components/pages/Individuals/ECommerce"));
const ImmersiveBrandStorytellingService = lazy(() => import("./components/pages/Individuals/ImmersiveBrandStorytellingService"));
const InfluencerMarketingService = lazy(() => import("./components/pages/Individuals/InfluencerMarketingService"));
const PerformanceMarketing = lazy(() => import("./components/pages/Individuals/PerformanceMarketing"));
const PrOutreachService = lazy(() => import("./components/pages/Individuals/PrOutreachService"));
const WebDev = lazy(() => import("./components/pages/Individuals/WebDev"));

// Lazy load sub-services - import directly from component files
const MarketResearch = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/MarketResearch"));
const BrandAudit = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/BrandAudit"));
const CompAndCategory = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/CompAndCategory"));
const AudProfile = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/AudProfile"));
const BrandExp = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/BrandExp"));
const CommDesign = lazy(() => import("./components/pages/Individuals/subServices/brandStrategy/CommDesign"));
const Branding = lazy(() => import("./components/pages/Individuals/subServices/designSolution/Branding"));
const GraphicDesign = lazy(() => import("./components/pages/Individuals/subServices/designSolution/GraphicDesing"));
const DataVis = lazy(() => import("./components/pages/Individuals/subServices/designSolution/DataVis"));
const EcoMarket = lazy(() => import("./components/pages/Individuals/subServices/Ecommerce/MarketResearch"));
const DtoC = lazy(() => import("./components/pages/Individuals/subServices/Ecommerce/DtoC"));
const MarketPlace = lazy(() => import("./components/pages/Individuals/subServices/Ecommerce/MarketPlace"));
const PaidCamp = lazy(() => import("./components/pages/Individuals/subServices/Ecommerce/PaidCamp"));
const AdCopywriting = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/AdCopywriting"));
const Articles = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/Articles"));
const B2bMarketing = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/B2bMarketing"));
const InfluencerMarketing = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/InfluencerMarketing"));
const MotionGraphics = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/MotionGraphics"));
const Photography = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/Photography"));
const SocialMedia = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/SocialMedia"));
const Videography = lazy(() => import("./components/pages/Individuals/subServices/ContentMarketing/Videography"));
const Ads = lazy(() => import("./components/pages/Individuals/subServices/Performance Marketing/Ads"));
const Analytics = lazy(() => import("./components/pages/Individuals/subServices/Performance Marketing/Analytics"));
const Automation = lazy(() => import("./components/pages/Individuals/subServices/Performance Marketing/Automation"));
const Media = lazy(() => import("./components/pages/Individuals/subServices/Performance Marketing/Media"));
const Content = lazy(() => import("./components/pages/Individuals/subServices/Website/Content"));
const Seo = lazy(() => import("./components/pages/Individuals/subServices/Website/Seo"));
const Ui = lazy(() => import("./components/pages/Individuals/subServices/Website/UserInterface"));
const Webdev = lazy(() => import("./components/pages/Individuals/subServices/Website/Webdev"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Drop pin-spacers / scrub state left behind by the previous page (e.g. Stories in Action)
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

/** Static destination marketing landing — full document load, not SPA. */
const TOURISM_LANDING = "/destination-marketing-agency/";

function TourismLandingRedirect() {
  useEffect(() => {
    window.location.replace(TOURISM_LANDING);
  }, []);
  return null;
}

// Hook to handle tab visibility change (only title changes)
function useTabVisibility() {
  useEffect(() => {
    const awayTitle = "Missing you already";
    // Store the page-specific title set by Helmet — don't overwrite it on mount
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        originalTitle = document.title; // capture current Helmet title before changing
        document.title = awayTitle;
      } else {
        document.title = originalTitle; // restore the page-specific title
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
}

function App() {
  useTabVisibility(); // Use the tab visibility hook here
  useLenis();


  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route exact path="/" Component={Home} />

          {/* Dynamic templates */}
          <Route exact path="/work/:slug" Component={CaseStudyDetail} />
          <Route exact path="/blogs" Component={Blogs} />
          <Route exact path="/blogs/:slug" Component={BlogDetail} />

          {/* Admin routes */}
          <Route exact path="/admin/login" Component={AdminLogin} />
          <Route exact path="/admin/dashboard" Component={AdminDashboard} />
          <Route exact path="/admin/manage-case-studies" Component={ManageCaseStudies} />
          <Route exact path="/admin/manage-blogs" Component={ManageBlogs} />
          <Route exact path="/admin/manage-jobs" Component={ManageJobs} />
          <Route exact path="/admin/manage-team" Component={ManageTeam} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/work" Component={Works} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/careers" Component={Career} />
          {/* Static landing; legacy /tourism → new slug */}
          <Route path="/tourism" element={<TourismLandingRedirect />} />
          <Route path="/tourism/" element={<TourismLandingRedirect />} />
          <Route path="/destination-marketing-agency" element={<TourismLandingRedirect />} />
          <Route path="/destination-marketing-agency/" element={<TourismLandingRedirect />} />
          <Route exact path="/location/:locationId" Component={Location} />
          <Route
            exact
            path="/performance-marketing"
            Component={PerformanceLandingPage}
          />
          <Route exact path="/singapore-tourism" Component={SingaporeTourism} />
          <Route exact path="/singapore-tourism-aeo-seo" Component={SingaporeTourismAeoSeo} />
          <Route exact path="/siam-malls" Component={SiamMalls} />
          <Route exact path="/work/green-label" Component={GreenLabel} />
          <Route exact path="/ganga-fashion" Component={GangaFashion} />
          <Route exact path="/work/zee5" Component={Zee5} />
          <Route exact path="/work/costa-cruises" Component={CostaCruises} />
          <Route exact path="/work/kalon" Component={Kalon} />
          <Route exact path="/work/duvon" Component={Duvon} />
          <Route exact path="/work/make-my-trip" Component={MakeMyTrip} />
          <Route exact path="/work/sportz-village" Component={SportzVillage} />
          <Route exact path="/work/active-club" Component={ActiveClub} />
          <Route exact path="/work/kunal-rathod" Component={KunalRathod} />
          <Route exact path="/work/sportz-village-xp" Component={SportzXP} />
          <Route exact path="/work/proportunity" Component={Proportunity} />
          <Route exact path="/work/dhruvak" Component={Dhruvak} />
          <Route exact path="/work/travel-stop" Component={TravelStop} />
          <Route exact path="/work/GenVR" Component={GenVR} />
          <Route exact path="/work/rock-highland" Component={RockHighland} />
          <Route exact path="/work/aartech-solonics" Component={Aartech} />
          <Route exact path="/work/enerqual" Component={Enerqual} />
          <Route exact path="/work/resorts-world-cruises" Component={Rwc} />
          <Route exact path="/work/ganga-fashions" Component={GangaFashions} />
          <Route
            exact
            path="/work/versailles-dental-clinic"
            Component={Versailles}
          />
          <Route exact path="/work/healthy-mithai" Component={HealthyMithai} />
          <Route exact path="/work/jewel-houze" Component={JewelHouze} />
          <Route exact path="/work/neoTraders" Component={NeoTraders} />
          <Route exact path="/work/devBoost" Component={devBoost} />
          <Route
            exact
            path="/work/singapore-tourism-board"
            Component={SingaporeTBoard}
          />
          
          <Route
            exact
            path="/work/singapore-tourism-board-stb"
            Component={SingaporeTBoard}
          />
          <Route
            exact
            path="/work/her-hk"
            Component={HerHK}
          />
          <Route
            exact
            path="/work/maison-luxe"
            Component={MaisonLuxe}
          />
          <Route
            exact
            path="/work/veda-naturals"
            Component={VedaNaturals}
          />
          <Route
            exact
            path="/work/akbar-travels"
            Component={AkbarTravels}
          />
          <Route
            exact
            path="/work/zambia-tourism"
            Component={ZambiaTourism}
          />
          <Route
            exact
            path="/work/navi-savi"
            Component={NaviSavi}
          />
          <Route
            exact
            path="/services/brand-strategy"
            Component={BrandStrategyService}
          />
          <Route
            exact
            path="/services/influencer-marketing"
            Component={InfluencerMarketingService}
          />
          <Route
            exact
            path="/services/immersive-brand-storytelling"
            Component={ImmersiveBrandStorytellingService}
          />
          <Route
            exact
            path="/services/design-and-development"
            Component={designDevelopmentService}
          />
          <Route
            exact
            path="/services/content-strategy-and-production"
            Component={ContentStrategyService}
          />
          <Route exact path="/services/pr-and-outreach" Component={PrOutreachService} />
          <Route exact path="/services/aeo-seo" Component={AeoSeoService} />
          <Route
            exact
            path="/services/content-marketing"
            Component={ContentMarketing}
          />
          <Route exact path="/services/ecommerce" Component={ECommerce} />
          <Route
            exact
            path="/services/design-solutions"
            Component={DesignSolutions}
          />
          <Route
            exact
            path="/services/performance-marketing"
            Component={PerformanceMarketing}
          />
          <Route path="/services/website-development-seo" Component={WebDev} />
          <Route
            exact
            path="/services/brand-strategy/market-research"
            Component={MarketResearch}
          />
          <Route
            exact
            path="/services/content-marketing/social-media"
            Component={SocialMedia}
          />
          <Route
            exact
            path="/services/content-marketing/influencer-marketing"
            Component={InfluencerMarketing}
          />
          <Route
            exact
            path="/services/content-marketing/video-graphy"
            Component={Videography}
          />
          <Route
            exact
            path="/services/content-marketing/photo-graphy"
            Component={Photography}
          />
          <Route
            exact
            path="/services/content-marketing/motion-graphics"
            Component={MotionGraphics}
          />
          <Route
            exact
            path="/services/content-marketing/articles"
            Component={Articles}
          />
          <Route
            exact
            path="/services/content-marketing/ad-copywriting"
            Component={AdCopywriting}
          />
          <Route
            exact
            path="/services/content-marketing/b2b-marketing"
            Component={B2bMarketing}
          />
          <Route
            exact
            path="/services/performance-marketing/ads"
            Component={Ads}
          />
          <Route
            path="/services/performance-marketing/media-buying-planning"
            Component={Media}
          />
          <Route
            exact
            path="/services/performance-marketing/automation"
            Component={Automation}
          />
          <Route
            exact
            path="/services/performance-marketing/analytics"
            Component={Analytics}
          />
          <Route
            exact
            path="/services/website-development-seo/web-development"
            Component={Webdev}
          />
          <Route
            exact
            path="/services/website-development-seo/ui-ux"
            Component={Ui}
          />
          <Route
            exact
            path="/services/website-development-seo/content"
            Component={Content}
          />
          <Route
            exact
            path="/services/website-development-seo/seo"
            Component={Seo}
          />
          <Route
            exact
            path="/services/brand-strategy/market-research"
            Component={MarketResearch}
          />
          <Route
            exact
            path="/services/brand-strategy/brand-audit"
            Component={BrandAudit}
          />
          <Route
            exact
            path="/services/brand-strategy/competition-category-benchmarking"
            Component={CompAndCategory}
          />
          <Route
            exact
            path="/services/brand-strategy/audience-profiling"
            Component={AudProfile}
          />
          <Route
            exact
            path="/services/brand-strategy/brand-experience"
            Component={BrandExp}
          />

          <Route
            exact
            path="/services/brand-strategy/communication-design"
            Component={CommDesign}
          />
          <Route
            exact
            path="/services/design-solutions/branding"
            Component={Branding}
          />
          <Route
            exact
            path="/services/design-solutions/graphic-design"
            Component={GraphicDesign}
          />
          <Route
            exact
            path="/services/design-solutions/data-visualization"
            Component={DataVis}
          />

          <Route
            exact
            path="/services/ecommerce/market-research"
            Component={EcoMarket}
          />
          <Route exact path="/services/ecommerce/d2c" Component={DtoC} />
          <Route
            exact
            path="/services/ecommerce/marketplace-management"
            Component={MarketPlace}
          />
          <Route
            exact
            Component={ZambiaTourism}
          />
          <Route
            exact
            path="/work/navi-savi"
            Component={NaviSavi}
          />
          <Route
            exact
            path="/services/brand-strategy"
            Component={BrandStrategyService}
          />
          <Route
            exact
            path="/services/influencer-marketing"
            Component={InfluencerMarketingService}
          />
          <Route
            exact
            path="/services/immersive-brand-storytelling"
            Component={ImmersiveBrandStorytellingService}
          />
          <Route
            exact
            path="/services/design-and-development"
            Component={designDevelopmentService}
          />
          <Route
            exact
            path="/services/content-strategy-and-production"
            Component={ContentStrategyService}
          />
          <Route exact path="/services/pr-and-outreach" Component={PrOutreachService} />
          <Route exact path="/services/aeo-seo" Component={AeoSeoService} />
          <Route
            exact
            path="/services/content-marketing"
            Component={ContentMarketing}
          />
          <Route exact path="/services/ecommerce" Component={ECommerce} />
          <Route
            exact
            path="/services/design-solutions"
            Component={DesignSolutions}
          />
          <Route
            exact
            path="/services/performance-marketing"
            Component={PerformanceMarketing}
          />
          <Route path="/services/website-development-seo" Component={WebDev} />
          <Route
            exact
            path="/services/brand-strategy/market-research"
            Component={MarketResearch}
          />
          <Route
            exact
            path="/services/content-marketing/social-media"
            Component={SocialMedia}
          />
          <Route
            exact
            path="/services/content-marketing/influencer-marketing"
            Component={InfluencerMarketing}
          />
          <Route
            exact
            path="/services/content-marketing/video-graphy"
            Component={Videography}
          />
          <Route
            exact
            path="/services/content-marketing/photo-graphy"
            Component={Photography}
          />
          <Route
            exact
            path="/services/content-marketing/motion-graphics"
            Component={MotionGraphics}
          />
          <Route
            exact
            path="/services/content-marketing/articles"
            Component={Articles}
          />
          <Route
            exact
            path="/services/content-marketing/ad-copywriting"
            Component={AdCopywriting}
          />
          <Route
            exact
            path="/services/content-marketing/b2b-marketing"
            Component={B2bMarketing}
          />
          <Route
            exact
            path="/services/performance-marketing/ads"
            Component={Ads}
          />
          <Route
            path="/services/performance-marketing/media-buying-planning"
            Component={Media}
          />
          <Route
            exact
            path="/services/performance-marketing/automation"
            Component={Automation}
          />
          <Route
            exact
            path="/services/performance-marketing/analytics"
            Component={Analytics}
          />
          <Route
            exact
            path="/services/website-development-seo/web-development"
            Component={Webdev}
          />
          <Route
            exact
            path="/services/website-development-seo/ui-ux"
            Component={Ui}
          />
          <Route
            exact
            path="/services/website-development-seo/content"
            Component={Content}
          />
          <Route
            exact
            path="/services/website-development-seo/seo"
            Component={Seo}
          />
          <Route
            exact
            path="/services/brand-strategy/market-research"
            Component={MarketResearch}
          />
          <Route
            exact
            path="/services/brand-strategy/brand-audit"
            Component={BrandAudit}
          />
          <Route
            exact
            path="/services/brand-strategy/competition-category-benchmarking"
            Component={CompAndCategory}
          />
          <Route
            exact
            path="/services/brand-strategy/audience-profiling"
            Component={AudProfile}
          />
          <Route
            exact
            path="/services/brand-strategy/brand-experience"
            Component={BrandExp}
          />

          <Route
            exact
            path="/services/brand-strategy/communication-design"
            Component={CommDesign}
          />
          <Route
            exact
            path="/services/design-solutions/branding"
            Component={Branding}
          />
          <Route
            exact
            path="/services/design-solutions/graphic-design"
            Component={GraphicDesign}
          />
          <Route
            exact
            path="/services/design-solutions/data-visualization"
            Component={DataVis}
          />

          <Route
            exact
            path="/services/ecommerce/market-research"
            Component={EcoMarket}
          />
          <Route exact path="/services/ecommerce/d2c" Component={DtoC} />
          <Route
            exact
            path="/services/ecommerce/marketplace-management"
            Component={MarketPlace}
          />
          <Route
            exact
            path="/services/ecommerce/paid-campaigns"
            Component={PaidCamp}
          />
          <Route exact path="/terms-of-service" Component={TermsofService} />
          <Route exact path="/privacy-policy" Component={PrivatePolicy} />
          <Route
            exact
            path="/cancellation-and-refund-policy"
            Component={Refund}
          />
          <Route exact path="/cookie-policy" Component={Cookies} />
          {/* Keep catch-all last so it never steals real routes */}
          <Route path="*" Component={Error} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
