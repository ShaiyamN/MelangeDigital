import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { DEFAULT_REPORT_SLUG, REPORTS, reportAccessHref } from "../../constants/reportLead";

// /indian-outbound-tourism-report used to stream the PDF itself, so crawlers saw no HTML head and
// read the PDF's headings as several H1s. It is now a page with one H1; the PDF sits behind the buttons.
const report = REPORTS[DEFAULT_REPORT_SLUG];
const TITLE = "The Indian Outbound Inspiration Report 2026 | Mélange Digital";
const DESCRIPTION =
  "We surveyed 4,200 Indian outbound-eligible travellers across 12 cities to find out what triggers a destination decision. Read the 2026 report free.";
const CANONICAL = "https://melangedigital.co/indian-outbound-tourism-report";

const ReportLanding = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={CANONICAL} data-rh="true" />
    </Helmet>
    <Navbar />
    <main className="container mx-auto font-body text-[#1a1a1a] bg-white pt-[110px] lg:pt-[140px] pb-[60px] lg:pb-[100px] px-5 lg:px-[80px] xxl:px-[100px]">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[15px] font-semibold uppercase tracking-wide text-[#7B1CF2] mb-3">Free report</p>
          <h1 className="text-display font-display font-semibold text-[#0f0330] mb-6">{report.title}</h1>
          <p className="text-[18px] lg:text-[20px] mb-6">
            We surveyed 4,200 Indian outbound-eligible travellers across 12 cities to find out what actually
            triggers a destination decision.
          </p>
          <h2 className="text-xl font-bold mb-3 text-black">What&apos;s inside</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-[17px] lg:text-[18px]">
            <li>4,200 respondents across 12 cities, from Tier 1 to Tier 3</li>
            <li>Which inspiration channels move Indian travellers to consider new destinations</li>
            <li>Which of the six Indian traveller cohorts is most likely to choose your destination</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href={report.pdf}
              className="inline-flex items-center rounded-full bg-[#7B1CF2] px-6 py-3 font-semibold text-white hover:bg-[#6512d0]"
            >
              Read the report (PDF)
            </a>
            <Link
              to={reportAccessHref(DEFAULT_REPORT_SLUG)}
              className="inline-flex items-center rounded-full border border-[#7B1CF2] px-6 py-3 font-semibold text-[#7B1CF2] hover:bg-[#F7F3FF]"
            >
              Talk to us about it
            </Link>
          </div>
        </div>
        <img
          src="/destination-marketing-agency/images/report/report-desk-cover.png?v=20260821d"
          alt="The Indian Outbound Inspiration Report 2026 on a desk"
          width="440"
          height="400"
          className="w-full max-w-[520px] h-auto mx-auto rounded-[16px]"
        />
      </div>
    </main>
    <Footer />
  </>
);

export default ReportLanding;
