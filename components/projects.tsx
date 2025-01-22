import React from "react";

interface Project {
  name: string;
  description: string;
  link?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "Weather App",
    description: "Dynamic weather app using Vue.js and TypeScript, integrated with a real-time Weather API.",
    link: "https://github.com/Mythixz/vue-weather-check",
    demo: "https://myweatherapp.com",
  },
  {
    name: "Expense Tracker",
    description: "Track and categorize expenses with TailwindCSS and interactive charts.",
    link: "https://github.com/Mythixz/expense-tracker",
    demo: "https://myexpensetracker.com",
  },
  {
    name: "To-Do List App",
    description: "Simple and interactive To-Do List app built with Vue.js and CRUD operations.",
    link: "https://github.com/Mythixz/vue-TodoList",
    demo: "https://mytodolistapp.com",
  },
  {
    name: "Bainisys Government Website",
    description:
      "Collaborated with the government to redesign and develop a cargo transportation platform integrated with Thailand's National Single Window system.",
    link: "https://example.com/bainisys-website",
  },
  {
    name: "Melody Minecraft Server",
    description:
      "Created and managed a custom Minecraft server with unique gameplay modes, serving over 150 active players daily and generating significant revenue.",
    link: "https://example.com/melody-server",
  },
  {
    name: "KRK Minecraft Server",
    description:
      "Engineered the backend system for a Minecraft server associated with a YouTube channel with over 5 million subscribers, ensuring reliability and scalability.",
    link: "https://example.com/krk-server",
  },
];

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-custom-gradient">Featured Projects</span>
        </h1>
        <p className="text-lg text-gray-400">
          A showcase of my recent work, demonstrating my skills in development and design.
        </p>
      </section>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-purple-500 transition-transform transform hover:scale-105 hover:opacity-95 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex space-x-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-purple-500"
                >
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 underline hover:text-purple-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
