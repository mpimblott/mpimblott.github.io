import { FaChevronDown } from 'react-icons/fa';
import SkillsCarousel from "../skills_carousel";
import Gridimp from "../sections/gridimp";
import Diamond from "../sections/diamond";
import SocialsOverlay from "../socials_overlay";
import Socials from "../socials";
import Profile from "../sections/profile";

function Home() {

  return (<div className="flex flex-col min-h-screen bg-gray-900 text-white">
    <main className="flex flex-col justify-center items-center">
      <div className="w-4/6">
        <section className="flex flex-col items-center justify-center min-h-screen relative">
          <SocialsOverlay/>
          <h1 className="text-6xl font-bold mb-4 text-center">Matthew Pimblott</h1>
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">ML Engineer and Software Developer</h1>
          <div className="mb-6">
            <Socials/>
          </div>
          <SkillsCarousel
            items={['Machine Learning', 'Software Development', 'Python', 'Deep Learning', 'Computer' + ' Vision', 'Java', 'Reinforcement Learning', 'PyTorch']}/>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <FaChevronDown size={36} className="animate-bounce text-blue-300"/>
          </div>
        </section>
        <section className="pt-48">
          <Profile/>
        </section>
        <section className="flex flex-col items-center pt-48"
        >
          <Gridimp/>
          <div className="pt-48">
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

export default Home;