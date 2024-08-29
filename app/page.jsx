import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Tech from "./_components/Tech";

function page() {
  return (
    <main>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </main>
  );
}

export default page;
