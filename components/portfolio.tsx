export default function Portfolio() {
    const projects = [
      {
        id: 1,
        title: "Weather App",
        description: "A web application that provides real-time weather updates.",
        link: "/projects/weather-app",
        image: "/weather-app.png",
      },
      {
        id: 2,
        title: "Expense Tracker",
        description: "An application to manage and track daily expenses.",
        link: "/projects/expense-tracker",
        image: "/expense-tracker.png",
      },
      {
        id: 3,
        title: "Chat AI",
        description: "A chatbot powered by AI for instant conversations.",
        link: "/projects/chat-ai",
        image: "/chat-ai.png",
      },
    ];
  
    return (
      <section className="min-h-screen bg-black text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-bold mb-12">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="block mt-4 text-purple-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  