import React from "react";

const About: React.FC = () => {
  const education = [
    {
      year: "2016 - 2022",
      title: "Suksanareewittaya School",
      description:
        "High School Degree in Math-Sci-Tech Major Good Conduct and Diligence in Studies Certificate GPA: 3.46",
    },
    {
      year: "2022 - PRESENT",
      title: "King Mongkut's University of Technology Thonburi",
      description:
        "Faculty of Industrial Education and Technology Division of Computer and Information Technology",
    },
    {
      year: "2025 - PRESENT",
      title: "Certificate in responsive-web and javascript-algorithms",
      description:
      "Learned the principles of responsive web design and mastered JavaScript algorithms and data structures.",
    },
  ];

  const experience = [
    {
      year: "2018 - 2019",
      title: "Founder & Lead Developer @Melody Server Minecraft",
      description:
        "Built and managed a Minecraft server with 100–150+ active players, generating 50,000+ THB in revenue. Developed custom game modes and features to enhance the gameplay.",
    },
    {
      year: "2019 - 2022",
      title: "Developer @KRK Server Minecraft",
      description:
        "Developed and managed KRK Server Minecraft, handling server operations, real-time data processing, and custom system configurations for 5.3M+ subscribers.",
    },
    {
      year: "2024 - 2025",
      title: "Frontend Developer @Bainisys co., ltd.",
      description:
        "Developed Bainisys, a cargo platform integrated with Thailand's Customs Department and NSW system. Ensured seamless functionality and user-friendly design to support logistics.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="container mx-auto px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gradient">About Me</h1>
          <p className="text-lg text-gray-400">
            A summary of my educational background and professional experience.
          </p>
        </section>

        {/* Education and Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">
              Education
            </h2>
            <div className="space-y-0 relative">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative pb-12 ${
                    index === 0 || index === 2
                      ? "pr-6 border-r"
                      : "pl-6 border-l"
                  } border-b border-purple-500`}
                  style={{
                    paddingTop: "1.5rem",
                  }}
                >
                  {/* เส้นแนวตั้ง */}
                  {index !== 1 && (
                    <div
                      className={`absolute ${
                        index === 0 || index === 2 ? "right-0" : "left-0"
                      } top-0 h-full w-[0.5px] bg-purple-500`}
                    />
                  )}
                  {/* เส้นแนวนอน */}
                  {index !== education.length - 1 && (
                    <div
                      className={`absolute ${
                        index === 0 || index === 2 ? "right-0" : "left-0"
                      } bottom-0 w-full h-[0.5px] bg-purple-500`}
                    />
                  )}
                  <div className="relative z-10 pl-3 pr-3">
                    <span className="text-sm text-gray-500 block mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">
              Experience
            </h2>
            <div className="space-y-0 relative">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`relative pb-12 ${
                    index === 1 ? "pr-6 border-r" : "pl-6 border-l"
                  } border-b border-purple-500`}
                  style={{
                    paddingTop: "1.5rem",
                  }}
                >
                  {/* เส้นแนวตั้ง */}
                  <div
                    className={`absolute ${
                      index === 1 ? "right-0" : "left-0"
                    } top-0 h-full w-[0.5px] bg-purple-500`}
                  />
                  {/* เส้นแนวนอน */}
                  {index !== experience.length - 1 && (
                    <div
                      className={`absolute ${
                        index === 1 ? "right-0" : "left-0"
                      } bottom-0 w-full h-[0.5px] bg-purple-500`}
                    />
                  )}
                  <div className="relative z-10 pl-3 pr-3">
                    <span className="text-sm text-gray-500 block mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
