const skills = [
  {
    name: "JavaScript",
    icon: "/file.svg",
    description: "Expert in ES6+, DOM manipulation, and event handling.",
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    name: "React",
    icon: "/globe.svg",
    description: "Experienced in building dynamic UIs with React and Hooks.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Next.js",
    icon: "/next.svg",
    description: "Skilled in SSR, SSG, and API routes using Next.js.",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    name: "CSS",
    icon: "/window.svg",
    description: "Proficient in modern CSS, Flexbox, Grid, and responsive design.",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Vue.js",
    icon: "/vuedotjs.svg",
    description: "Experienced in building reactive and dynamic web applications using Vue.js.",
    gradient: "from-teal-400 to-teal-600",
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-5xl font-bold mb-12 text-center">
        <span className="text-gray-400">My</span> <span className="text-purple-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`p-6 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-md transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 object-contain"
              />
              <h3 className="text-2xl font-bold">{skill.name}</h3>
            </div>
            <p className="mt-4 text-white text-opacity-90">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
