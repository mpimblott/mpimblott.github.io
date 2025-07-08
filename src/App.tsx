import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-xl font-bold mb-4">Matthew Pimblott</h1>
      <div className="flex gap-x-4">
        <a href="https://github.com/mpimblott" className="hover:text-blue-300"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/matthew-pimblott/" className="hover:text-blue-300"><FaLinkedin size={30} /></a>
      </div>
    </div>
  );
}

export default App;