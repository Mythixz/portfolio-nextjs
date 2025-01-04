const services = [
    {
      id: "01",
      icon: <i className="fas fa-paint-brush"></i>, // ใช้ไอคอนจาก FontAwesome
      title: "Design",
      description:
        "Crafting visually appealing designs that align with brand identity and enhance user experience.",
    },
    {
      id: "02",
      icon: <i className="fas fa-code"></i>, // ใช้ไอคอนสำหรับ Development
      title: "Development",
      description:
        "Building robust and scalable web applications with modern technologies to deliver optimal performance.",
    },
    {
      id: "03",
      icon: <i className="fas fa-laptop"></i>, // ใช้ไอคอนสำหรับ Marketing
      title: "Marketing",
      description:
        "Creating impactful marketing strategies that drive engagement and elevate brand visibility.",
    },
    {
      id: "04",
      icon: <i className="fas fa-search"></i>, // ไอคอนสำหรับ SEO
      title: "SEO Optimization",
      description:
        "Enhancing website visibility on search engines by implementing effective SEO strategies.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12">
            <span className="text-gray-400">What</span> <span className="text-purple-500">I Do</span>
          </h2>
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative flex items-center p-6 bg-gray-800 rounded-lg shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-purple-900"
              >
                {/* หมายเลข */}
                <div className="text-3xl font-bold text-purple-400 mr-6">{service.id}/</div>
                {/* ไอคอน */}
                <div className="text-4xl text-purple-300 mr-6">{service.icon}</div>
                {/* เนื้อหา */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                {/* เส้นขอบล่าง */}
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-900 to-purple-500"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  