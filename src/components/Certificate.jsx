"use client"

import React, { useState } from 'react';
import Image from "next/image";

const Certificate = () => {

  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleCount = 3;

  const certificates = [
    {
      image: "Certificate/CyberTopTalent.png",
      title: "Thailand Cyber Top Talent",
      issuer: "NCSA Thailand",
      year: 2023,
      id: "AWS-123456",
    },
    {
      image: "Certificate/CyberProfessional.png",
      title: "หลักสูตรด้านความปลอดภัยไซเบอร์ระดับเชี่ยวชาญ",
      issuer: "NCSA Thailand",
      year: 2023,
    },
    {
      image: "Certificate/buildrealworld.png",
      title: "Build Real-World Ai Applications with Gemini and Imagen",
      issuer: "Google Cloud",
      year: 2025,
    },
    {
      image: "Certificate/FullStack.jpg",
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Dr. Angela Yu",
      year: 2025,
    },
    {
      image: "Certificate/designinvertex.png",
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      year: 2025,
    },
    {
      image: "Certificate/JavaScript.png",
      title: "Introduction to JavaScript",
      issuer: "Born to Dev",
      year: 2023,
    },
    {
      image: "Certificate/CyberBasic.png",
      title: "หลักสูตรด้านความปลอดภัยไซเบอร์ระดับพื้นฐาน",
      issuer: "NCSA Thailand",
      year: 2023,
    },
  ]

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const visibleCertificate = showMore ? certificates : certificates.slice(0, visibleCount);

  return (
    <div id="certificate" className="p-8 bg-white mt-10">
      <div className="flex items-center justify-center mb-6">
        <img
          src="assets/certificate.svg"
          alt="certificate Icon"
          className="w-8 h-8 mr-2 "
        />
        <h2 className=" text-3xl font-bold">Certifications</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {visibleCertificate.map((cert, index) => (
          <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md">
            <div className="flex items-start mb-3">
              <img
                src={cert.image}
                className="mr-4 w-16 h-16 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(cert.image)}
                alt={cert.title}
              />
              <div>
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-600">{cert.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl max-h-screen p-4">
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}


      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mt-10 mx-auto transition hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
        >
          Show more
          <Image
            src="/assets/arrow.svg"
            alt="right arrow"
            width={18}
            height={18}
          />
        </button>
      )}

      {showMore && (
        <button
          onClick={() => setShowMore(false)}
          className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mt-10  mx-auto transition hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
        >
          Show less
          <Image src="/assets/arrow.svg" alt="right arrow" width={18} height={18} />
        </button>
      )}

    </div>
  );
};

export default Certificate;