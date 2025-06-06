import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0758A8] text-white py-6 bottom-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
       
        <div className="w-1/3 hidden md:block" />
        <div className="text-center w-full md:w-1/3 text-sm text-white/80">
          © 2024 American
        </div>
        <div className="flex justify-center md:justify-end gap-4 w-full md:w-1/3 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-blue-300 hover:text-white" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-blue-300 hover:text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-blue-300 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
