const skills = [
  {
    name: "JavaScript",
    icon: "/file.svg",
    description: "Expert in ES6+, DOM manipulation, and event handling.",
  },
  {
    name: "React",
    icon: "/globe.svg",
    description: "Experienced in building dynamic UIs with React and Hooks.",
  },
  {
    name: "Next.js",
    icon: "/next.svg",
    description: "Skilled in SSR, SSG, and API routes using Next.js.",
  },
  {
    name: "CSS",
    icon: "/window.svg",
    description: "Proficient in modern CSS, Flexbox, Grid, and responsive design.",
  },
  {
    name: "Vue.js",
    icon: "/vuedotjs.svg",
    description: "Experienced in building reactive and dynamic web applications using Vue.js.",
    className: "hover:scale-110 hover:shadow-lg hover:shadow-green-500/50", // เพิ่มเอฟเฟกต์สำหรับ Vue.js
  },
];

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`p-4 border rounded shadow bg-gray-100 dark:bg-gray-800 ${
              skill.name === "Vue.js" ? skill.className : ""
            }`} // ใช้เงื่อนไขเพื่อเพิ่มคลาสเฉพาะ Vue.js
          >
            <div className="flex items-center space-x-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 transition-transform duration-300 hover:rotate-6"
                />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
