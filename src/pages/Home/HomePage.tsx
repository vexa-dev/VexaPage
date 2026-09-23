import { SITE } from "@/data/site";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Services } from "./sections/Services";
import { Team } from "./sections/Team";

export function HomePage() {
  useDocumentTitle(SITE.titles.home);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
}
