import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import SkillsCarousel from "./components/skills_carousel";
import Gridimp from "./pages/gridimp";
import Diamond from "./pages/diamond";
import SocialsOverlay from "./components/socials_overlay";
import Socials from "./components/socials";

function App() {

  return (<div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      <SocialsOverlay />
      <h1 className="text-6xl font-bold mb-4 text-center">Matthew Pimblott</h1>
      <div className="mb-6">
        <Socials />
      </div>
      <SkillsCarousel items={['Machine Learning', 'Software Development', 'Deep Learning', 'Computer Vision']}/>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FaChevronDown size={36} className="animate-bounce text-blue-300"/>
      </div>
    </section>
    <main className="flex flex-col items-center px-4 mb-12">
      <div className="w-4/6">
        <Gridimp/>
        <div className="pt-36">
          <Diamond/>
        </div>
      </div>
    </main>
    <footer className="w-full py-6 mt-auto text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Matthew Pimblott. All rights reserved.</p>
    </footer>
  </div>);
}

export default App;