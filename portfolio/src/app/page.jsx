'use client'
import NavigationBar from "@/components/NavigationBar";
import LetterGlitch from "@/components/LetterGlitch/LetterGlitch";
import Animation from "@/components/Animation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-transparent px-20 text-text font-chakra">
      {/* LetterGlitch as Background */}
      <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>

      <NavigationBar />
      <div className="mt-20 relative flex justify-between items-center ">
        <div>
          <p className="text-5xl">
            Hi, My name is <span className="text-accent">Ansh</span> Sharma
            <span className="text-accent">.</span>
          </p>
          <p className="text-2xl pt-3">
            A <span className="text-accent">FullStack Developer</span> and a learning{" "}
            <span className="text-accent">DevOps Engineer</span>
          </p>
          <div className="mt-3 w-[800px] text-lg">
            <p>
              I’m a full-stack developer passionate about{" "}
              <span className="text-accent">building scalable, high-performance applications.</span> My expertise spans{" "}
              <span className="text-accent">backend and frontend development</span>, containerization, CI/CD, and infrastructure automation. I thrive at the intersection of code, deployment, and optimization, ensuring robust and efficient software solutions.
              <br /> Beyond coding, I enjoy playing{" "}
              <span className="text-accent">video games, jamming on the piano, and getting lost in a good book. </span>
              <br />
              Let’s build something amazing! 🚀
            </p>
          </div>
        </div>
        <div>
          <Animation />
        </div>
      </div>

      {/* call to action */}
      <div className="mt-10 flex flex-col justify-between items-start h-40">
        <div>
          <Link href='/projects'>
            <button className="p-[3px] relative" >
              <div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg" />
              <div
                className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-300 text-white hover:bg-transparent">
                See my Work 👀
              </div>
            </button>
          </Link>
        </div>


        <div>
          <p className=" text-lg">Loving my work?</p>
        </div>

        <div className="">
          <span className="text-xl">Let's get in touch, </span><Link href="/contact" className="text-xl underline hover:decoration-accent hover:text-accent transition-all duration-300 underline-offset-4">contact me here.</Link>
        </div>
      </div>
    </div>
  );
}
