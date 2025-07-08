import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Matt</h1>
      <div className="flex flex-row gap-x-80">
        <a href="#" className="hover:text-blue-300"><FaGithub size={20} /></a>
        <a href="#" className="hover:text-blue-300"><FaLinkedin size={20} /></a>
      </div>
    </div>
  );
}

export default App;