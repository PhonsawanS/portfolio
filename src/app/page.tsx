import Home from "@/components/Home"
import About from "@/components/About"
import Project from "@/components/Project"
import Certificate from "@/components/Certificate"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
const page = () => {
  return (
    <>
      <div className="bg-[#f4f4f4]">
        <Home />
        <About />
        <Project />
        <Certificate />
        <Contact />
        <Footer />
      </div>


    </>

  )
}
export default page