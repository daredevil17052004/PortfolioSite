'use client'
import { useEffect, useState } from 'react'
import React from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
                >
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                    )}

                    <div className="p-4 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                            <p className="text-gray-600 text-sm">{project.description}</p>

                            {project.technologies && project.technologies.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-4 flex gap-4">
                            {project.live_demo && (
                                <a
                                    href={project.live_demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Live
                                </a>
                            )}
                            {project.repo && (
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    

    );
};

export default Projects;
