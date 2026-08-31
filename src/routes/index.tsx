import { createFileRoute } from "@tanstack/react-router";

import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import About from "../components/site/About";
import Services from "../components/site/Services";
import WhyRoofix from "../components/site/WhyRoofix";
import BeforeAfter from "../components/site/BeforeAfter";
import RecentProjects from "../components/site/RecentProjects";
import Process from "../components/site/Process";
import WhyChoose from "../components/site/WhyChoose";
import CTA from "../components/site/CTA";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";

const title = "Roofix Coatings | Roof Painting & Restoration Specialist";
const description =
  "Professional roof painting and restoration designed to refresh, protect and extend the life of Australian roofs. Get a free quote from Roofix Coatings.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyRoofix />
        <BeforeAfter />
        <RecentProjects />
        <Process />
        <WhyChoose />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
