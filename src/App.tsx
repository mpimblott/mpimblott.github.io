import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import SkillsCarousel from "./components/skills_carousel";
import Gridimp from "./pages/gridimp";
import Diamond from "./pages/diamond";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <section className="flex flex-col items-center justify-center min-h-screen relative">
        <h1 className="text-6xl font-bold mb-4 text-center">Matthew Pimblott</h1>
        <div className="flex gap-x-4 mb-6">
          <a href="https://github.com/mpimblott" className="hover:text-blue-300"><FaGithub size={30}/></a>
          <a href="https://www.linkedin.com/in/matthew-pimblott/" className="hover:text-blue-300"><FaLinkedin
            size={30}/></a>
        </div>
        <SkillsCarousel items={['Machine Learning', 'Software Development', 'Deep Learning', 'Computer Vision']}/>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <FaChevronDown size={36} className="animate-bounce text-blue-300"/>
        </div>
      </section>
      <main className="flex flex-col items-center w-full px-4 mb-12">
        <Gridimp/>
        <Diamond/>
      </main>
      <footer className="w-full py-6 mt-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Matthew Pimblott. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;