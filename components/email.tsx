import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="h-[60vh] bg-black text-white flex items-center justify-center py-6">
      <div className="text-center">
        <p
          className="text-8xl font-bold text-gradient cursor-pointer transition-all duration-300 hover-glow"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}
        >
          mythixzwsk@gmail.com
        </p>
      </div>
    </main>
  );
};

export default Contact;
