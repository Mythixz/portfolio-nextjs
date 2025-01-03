const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "CSS", level: 70 },
  ];
  
  export default function Skills() {
    return (
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 border rounded shadow bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <div className="bg-gray-300 h-2 rounded mt-2">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.level > 80 ? 'green' : 'blue',
                  }}
                                  ></div>
              </div>
              <p className="mt-2 text-sm">{skill.level}%</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  