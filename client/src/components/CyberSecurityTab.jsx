import React from "react";
import CyberMapEmbed from "./CyberMapEmbed";

const CyberSecurityTab = ({
  sections,
  openSection,
  setOpenSection,
  quizAnswer,
  setQuizAnswer,
  handleQuizSubmit,
  quizResult
}) => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Cybersecurity Information
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about cybersecurity fundamentals, common threats, and best practices to protect your digital life.
          </p>
        </div>

        {/* Information Sections */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Cybersecurity Topics
          </h3>
          
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                  className="w-full p-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white pr-4">
                      {section.title}
                    </h4>
                    <div className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">
                      {openSection === index ? '▲' : '▼'}
                    </div>
                  </div>
                </button>

                {openSection === index && (
                  <div className="mt-2 p-6 bg-white/5 border border-white/10 rounded-xl animate-fade-in-up">
                    <div className="text-gray-300 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              🧠 Quick Quiz
            </h3>
            <p className="text-lg text-gray-300">Test your cybersecurity knowledge!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <p className="text-xl text-white font-semibold mb-4">What does 2FA stand for in cybersecurity?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type='text'
                  placeholder='Your answer...'
                  value={quizAnswer}
                  onChange={(e) => setQuizAnswer(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  onClick={handleQuizSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25"
                >
                  Submit Answer
                </button>
              </div>
            </div>
            
            {quizResult && (
              <div className={`p-4 rounded-xl border-2 ${
                quizResult.startsWith("Correct") 
                  ? 'bg-green-500/10 border-green-500/50 text-green-300' 
                  : 'bg-red-500/10 border-red-500/50 text-red-300'
              }`}>
                <p className="font-semibold text-lg">
                  {quizResult.startsWith("Correct") ? "✅ " : "❌ "}
                  {quizResult}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Cyber Attack Map Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
              🗺️ Live Cyber Attack Map
            </h3>
            <p className="text-lg text-gray-300">Watch real-time cyber attacks happening around the world</p>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-white/20">
            <CyberMapEmbed 
              src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" 
              frameborder='0' 
              title="Kaspersky Cyber Map" 
              height="520px" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityTab;