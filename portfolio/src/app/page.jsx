import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import LampDemo from '@/components/ui/lamp';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="w-full bg-slate-950 text-white font-chakra">
        <div>
          <NavigationBar />
        </div>
        <div>
          <LampDemo />
        </div>
        
      </div>

      {/* About Section */}
      <div id='about' className="w-full bg-slate-900 text-white font-chakra py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl bg-slate-800 p-6 h-full">
              <div className="bg-slate-700 rounded-lg w-full h-64"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-500">My Journey</h3>
              <p className="text-gray-300 mb-6">
                With over 5 years of experience in web development, I specialize in building modern, 
                responsive applications using React, Next.js, and Node.js. My passion lies in creating 
                intuitive user experiences backed by clean, efficient code.
              </p>
              <p className="text-gray-300 mb-6">
                I've collaborated with startups and established companies alike, helping them 
                transform their ideas into reality through thoughtful design and robust implementation.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2">
                   GitHub
                </a>
                <a href="#" className="text-cyan-500 hover:text-cyan-400 flex items-center gap-2">
                   LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full bg-slate-950 text-white font-chakra py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A selection of my recent work spanning web applications, design systems, and open source contributions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-slate-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-400 mb-4">
                    An interactive web application built with React and Next.js, featuring 
                    real-time data visualization and user authentication.
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-cyan-900/30 text-cyan-500 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-cyan-900/30 text-cyan-500 text-xs px-2 py-1 rounded">Next.js</span>
                    <span className="bg-cyan-900/30 text-cyan-500 text-xs px-2 py-1 rounded">Tailwind</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="border border-gray-600 hover:border-cyan-500 px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
              View All Projects 
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full bg-slate-900 text-white font-chakra py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">My Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center">1</div>
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
                <li>• State Management (Redux, Context)</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">2</div>
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js & Express</li>
                <li>• RESTful APIs</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• Authentication & Security</li>
                <li>• GraphQL</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">3</div>
                UI/UX Design
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Figma & Adobe XD</li>
                <li>• Wireframing & Prototyping</li>
                <li>• Design Systems</li>
                <li>• User Research</li>
                <li>• Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id='contact' className="w-full bg-slate-950 text-white font-chakra py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-300 mb-12">
              I'm currently available for freelance work and open to discussing new opportunities.
              Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:contact@example.com" className="bg-slate-900 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800 transition-colors">
                {/* <Mail size={24} className="text-cyan-500" /> */}
                <div className="text-left">
                  <h3 className="font-semibold">Email Me</h3>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </a>
              
              <a href="#" className="bg-slate-900 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800 transition-colors">
                {/* <Linkedin size={24} className="text-cyan-500" /> */}
                <div className="text-left">
                  <h3 className="font-semibold">Connect on LinkedIn</h3>
                  <p className="text-gray-400">linkedin.com/in/alexchen</p>
                </div>
              </a>
            </div>
            
            <div className="mt-12">
              <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg font-medium text-lg">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="font-semibold text-xl text-white">Alex Chen</p>
              <p>© 2025. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" aria-label="GitHub" className="hover:text-white">
                {/* <GitHub size={20} /> */}
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                {/* <Linkedin size={20} /> */}
              </a>
              <a href="#" aria-label="Email" className="hover:text-white">
                {/* <Mail size={20} /> */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}