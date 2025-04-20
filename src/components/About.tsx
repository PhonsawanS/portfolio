import Image from 'next/image';
const About = () => {
  return (
    <div id="about" className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl shadow-xl rounded-md py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Image */}
          <div className="md:w-1/3">
            <div className="rounded-md overflow-hidden shadow-md">
              <img
                src="/About.jpg"
                alt="Phonsawan Suarab"
                className="w-md h-auto object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium mr-2">Name:</span> Phonsawan Suarab
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Age:</span> 22
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Location:</span> Nakhonsawan, Thailand
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-2">Email:</span> phonsawan.suarab@gmail.com
                </li>
              </ul>

              {/* social media */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3">Social Media</h3>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/_suarab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/assets/instagram.svg"
                      alt="Instagram"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/ssskyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/assets/facebook.svg"
                      alt="Facebook"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a
                    href="https://github.com/PhonsawanS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Image
                      src="/assets/github.svg"
                      alt="GitHub"
                      width={36}
                      height={36}
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3">
            {/* <h3 className="text-2xl font-semibold mb-4">Web Developer & UI/UX Designer</h3> */}
            <p className="text-gray-700 mb-6">
              Hello! I'm Phonsawan. I recently graduated and have a growing interest in back-end development.
              I'm open to learning, practicing, and working with others to improve my skills step by step.
              I believe in learning by doing and look forward to opportunities where I can contribute and grow.
            </p>

            {/* my skills  */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-4 gap-3">
                {/* row 1 */}
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  HTML
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  CSS
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  Javascript
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  React
                </span>

                {/* row 2 */}
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  Next JS
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  TailwindCSS
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  BootStrap
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  Flowbite
                </span>

                {/* row 3 */}
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  Node JS
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  PostgreSQL
                </span>
                <span className="border border-black px-3 py-1.5 rounded-md text-center text-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
                  Sequelize
                </span>
              </div>


            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience & Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="text-sm text-gray-500">2021-2025</div>
                  <h4 className="text-md font-medium">Bachelor's Degree in Computer Engineering</h4>
                  <p className="text-gray-700">Faculty of Engineering, Naresuan University</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;