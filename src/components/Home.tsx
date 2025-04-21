'use client';
import { Download } from "lucide-react";
import Image from 'next/image';
const Home = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center  text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl shadow-xl rounded-lg py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-sm text-gray-600 mb-2">Hello! I Am</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Phonsawan Suarab</h1>
            <p className="text-lg text-gray-700">I&rsquo;m a Web Developer</p>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all">Contact</a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition-all flex items-center gap-2"
              >
                Resume
                <Download className="w-4 h-4" />

              </a>
            </div>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <div className="w-64 h-64 rounded overflow-hidden border-2 border-gray-300 shadow-lg">
              <Image
                src="/profile.png"
                alt="Phonsawan Suarab"
                width={300} // หรือขนาดที่คุณต้องการ
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;