import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SkillsCarousel from "./components/skills_carousel";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="bg-gray-900 h-screen w-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-center">Matthew Pimblott</h1>
        <div className="flex gap-x-4">
          <a href="https://github.com/mpimblott" className="hover:text-blue-300"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/matthew-pimblott/" className="hover:text-blue-300"><FaLinkedin size={30} /></a>
        </div>
        <SkillsCarousel items={['Machine Learning','Software Development', 'Deep Learning', 'Computer Vision']} />
      </div>
    </div>
  );
}

export default App;