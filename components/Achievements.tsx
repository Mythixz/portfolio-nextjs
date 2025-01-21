"use client";

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: <i className="fas fa-trophy text-yellow-500"></i>, // ไอคอนถ้วยรางวัล
      title: "Awards Won",
      value: "10+",
    },
    {
      id: 2,
      icon: <i className="fas fa-briefcase text-green-500"></i>, // ไอคอนโปรเจกต์
      title: "Projects Completed",
      value: "50+",
    },
    {
      id: 3,
      icon: <i className="fas fa-users text-blue-500"></i>, // ไอคอนลูกค้า
      title: "Happy Clients",
      value: "30+",
    },
    {
      id: 4,
      icon: <i className="fas fa-calendar-alt text-purple-500"></i>, // ไอคอนประสบการณ์
      title: "Years of Experience",
      value: "5+",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <span className="text-gray-400">My</span>{" "}
          <span className="text-purple-500">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-purple-800 transition duration-300"
            >
              <div className="text-6xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-3xl font-semibold text-purple-500">
                {achievement.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
