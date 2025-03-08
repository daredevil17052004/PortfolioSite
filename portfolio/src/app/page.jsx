import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-background px-20 text-text font-chakra">
      <NavigationBar />

      <div className="mt-20">
        <p className="text-5xl">Hi, My name is <span className="text-accent">Ansh</span> Sharma<span className="text-accent">.</span></p>
        <p className="text-2xl pt-3">A <span className="text-accent">FullStack Developer</span> and a learning <span className="text-accent">Devops Engineer</span></p>
        <div className="mt-3 w-[800px] text-lg">
          <p>I’m a full-stack developer passionate about <span className="text-accent">building scalable, high-performance applications.</span> My expertise spans <span className="text-accent">backend and frontend development</span> , containerization, CI/CD, and infrastructure automation. I thrive at the intersection of code, deployment, and optimization, ensuring robust and efficient software solutions.
          <br /> Beyond coding, I enjoy playing <span className="text-accent">video games, jamming on the piano, and getting lost in a good book. </span><br />
            Let’s build something amazing! 🚀</p>
        </div>

      </div>
    </div>
  );
}
