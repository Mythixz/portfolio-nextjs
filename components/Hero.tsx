export default function Hero() {
    return (
      <section className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-lg mb-6">Web Developer | Designer | Problem Solver</p>
          <a
            href="/portfolio"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            View My Work
          </a>
        </div>
      </section>
    );
  }
  