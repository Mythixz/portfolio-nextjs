import React from "react";

const About: React.FC = () => {
  const education = [
    {
      year: "2019 - 2020",
      title: "Master in Computer Science",
      description:
        "Focused on advanced algorithms, machine learning, and system design.",
    },
    {
      year: "2015 - 2019",
      title: "Bachelor in Computer Science",
      description:
        "Studied core programming concepts, databases, and web development.",
    },
    {
      year: "2019 - 2020",
      title: "Certificate in UI & UX Design",
      description:
        "Learned the principles of user interface and user experience design.",
    },
  ];

  const experience = [
    {
      year: "2021 - 2024",
      title: "Chief Operating Officer @flatheme",
      description:
        "Managed operations, projects, and team performance for a tech startup.",
    },
    {
      year: "2019 - 2021",
      title: "UI & UX Designer @flatheme",
      description:
        "Designed modern user interfaces and improved user experience workflows.",
    },
    {
      year: "2018 - 2019",
      title: "Creative Director @flatheme",
      description:
        "Led creative projects and ensured alignment with brand objectives.",
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
