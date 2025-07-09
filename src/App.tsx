import { FaChevronDown } from 'react-icons/fa';
import SkillsCarousel from "./components/skills_carousel";
import Gridimp from "./pages/gridimp";
import Diamond from "./pages/diamond";
import SocialsOverlay from "./components/socials_overlay";
import Socials from "./components/socials";
import Profile from "./pages/profile";

function App() {

  return (<div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <main className="flex flex-col justify-center items-center">
      <div className="w-4/6">
        <section className="flex flex-col items-center justify-center min-h-screen relative">
          <SocialsOverlay/>
          <h1 className="text-6xl font-bold mb-4 text-center">Matthew Pimblott</h1>
          <div className="mb-6">
            <Socials/>
          </div>
          <SkillsCarousel
            items={['Machine Learning', 'Software Development', 'Python', 'Deep Learning', 'Computer' + ' Vision', 'Java', 'Reinforcement Learning', 'PyTorch']}/>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <FaChevronDown size={36} className="animate-bounce text-blue-300"/>
          </div>
        </section>
        <section className="pt-24">
          <Profile/>
        </section>
        <section className="flex flex-col items-center px-4 pt-24"
        >
          <Gridimp/>
          <div className="pt-24">
            <Diamond/>
          </div>
        </section>
      </div>
    </main>
    <footer className="w-full py-6 mt-11 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Matthew Pimblott. All rights reserved.</p>
    </footer>
  </div>);
}

export default App;