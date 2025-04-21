"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {


    const [showMore, setShowMore] = useState(false);
    const visibleCount = 3;

    const projects = [
        {
            title: "Digital Poverty Aid",
            subtitle: "Phitsanulok Province",
            link: "https://digital-poverty-aid-fontend.vercel.app/",
            image: "/DigitalPovertyAid.png",
        }
        // {
        //     title: "project-2",
        //     subtitle: "project-2",
        //     link: "https://ticket-generate-bd.vercel.app/",
        //     image: "/About.jpg",
        // },
        // {
        //     title: "project-3",
        //     subtitle: "project-3",
        //     link: "https://contactform-bd.vercel.app/",
        //     image: "/About.jpg",
        // },
        // {
        //     title: "project-4",
        //     subtitle: "project-4",
        //     link: "https://contactform-bd.vercel.app/",
        //     image: "/About.jpg",
        // },
        // {
        //     title: "project-5",
        //     subtitle: "project-5",
        //     link: "https://contactform-bd.vercel.app/",
        //     image: "/About.jpg",
        // },
        // {
        //     title: "project-6",
        //     subtitle: "project-6",
        //     link: "https://contactform-bd.vercel.app/",
        //     image: "/About.jpg",
        // },
    ]




    const visibleProjects = showMore ? projects : projects.slice(0, visibleCount);


    return (

        <>
            <div id="projects" className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20">
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">Projects</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg">
                    My Web Projects
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-cover bg-center bg-no-repeat p-5 rounded-lg w-full h-auto"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <Link href={project.link} target="_blank">
                                <div
                                    className="bg-white/70 rounded-md left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
                transition duration-500 hover:-translate-y-2 cursor-pointer mt-40 hover:bg-white"
                                >
                                    <div>
                                        <h2 className="font-semibold md:text-base">
                                            {project.title}
                                        </h2>
                                        <h2 className="text-sm md:text-base">{project.subtitle}</h2>
                                    </div>
                                    <div
                                        className="border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                shadow-[2px_2px_0_#000]  group-hover:bg-lime-300 transition"
                                    >
                                        <Image
                                            src="/assets/link-chain.svg"
                                            alt="code icon"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {!showMore && (
                    <button
                        onClick={() => setShowMore(true)}
                        className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mx-auto transition hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
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
                        className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mx-auto transition hover:bg-gray-100 transition-transform duration-300 hover:scale-110"
                    >
                        Show less
                        <Image src="/assets/arrow.svg" alt="right arrow" width={18} height={18} />
                    </button>
                )}



            </div>


        </>
    )
}
export default Project
