import AboutPage from "@/app/pages/About";
import HeaderAndFooter from "@/components/HeaderAndFooter";
import ProjectPage from "./pages/Project";
import SkillsPage from "./pages/Skills";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import HomePage from "./pages/Home";


export default function Home() {
  return (
<section className=" container min-w-min m-auto justify-center items-center ">
<main  className="flex min-h-screen flex-col items-center justify-between p-24">
    
    {/* header and footer */}
    <HeaderAndFooter />
    <HomePage />
   
  </main>

  <AboutPage />
  <ProjectPage />
  <SkillsPage />
  <BlogPage />
  <ContactPage />
</section>
    
  );
}
