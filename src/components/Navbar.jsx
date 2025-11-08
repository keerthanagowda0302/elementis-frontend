import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-2xl font-light tracking-widest text-white">
          ELEMENTIS
        </Link>
        <div className="space-x-8 text-white/80">
          <Link to="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link to="/community" className="hover:text-emerald-400 transition">
            Community
          </Link>
        </div>
      </div>
    </nav>
  );
}