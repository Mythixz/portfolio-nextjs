export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* ชื่อใหญ่ */}
      <h1 className="text-outline">
  W PANGNAMPONG
</h1>
      {/* เนื้อหา */}
      <div className="flex items-center justify-between mt-12 w-full max-w-5xl px-8">
        {/* ซ้าย: Biography และ Skills */}
        <div className="flex-1 max-w-md space-y-6">
          <div>
            <h2 className="text-xl font-bold uppercase">Biography</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
            Experienced Full Stack Developer passionate about building scalable, user-centric web 
            applications and optimizing system performance to meet business objectives.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase">Skills</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
            Full Stack Development • Cloud & Security  UX/UI Design 
            • Business
            & Management  Databases  Software Tools • Soft Skills            </p>
          </div>
        </div>

        {/* กลาง: รูปภาพ */}
        <div className="flex justify-center items-center mx-8">
          <img
            src="main.png"
            alt="Profile"
            className="h-48 w-48 rounded-full border-4 border-gray-700 object-cover"
          />
        </div>

        {/* ขวา: สถิติ */}
        <div className="flex-1 max-w-md space-y-6 text-right">
          <div>
            <h3 className="text-4xl font-bold">22</h3>
            <p className="text-gray-300">Projects Done</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">2+</h3>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">8</h3>
            <p className="text-gray-300">Worldwide Clients</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-16">
        <a href="#" className="text-2xl hover:text-gray-400">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-400">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-2xl hover:text-gray-400">
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </section>
  );
}
