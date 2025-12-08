  import React from "react";

  const CyberSecurityTab = ({
    sections,
    openSection,
    setOpenSection,
    quizAnswer,
    setQuizAnswer,
    selectedAnswer,
    setSelectedAnswer,
    handleQuizSubmit,
    handleNextQuestion,
    handleRestartQuiz,
    quizResult,
    quizQuestions,
    currentQuestionIndex,
    quizScore,
    quizCompleted
  }) => {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-5xl font-bold h-14 bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent mb-4 drop-shadow-md">
              Cybersecurity Information
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about cybersecurity fundamentals, common threats, and best practices to protect your digital life.
            </p>
          </div>

          {/* Information Sections */}
          <div className="bg-primary-800/30 backdrop-blur-md rounded-2xl p-8 border border-accent-light/30 shadow-soft mb-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent drop-shadow-md">
              Cybersecurity Topics
            </h3>
            
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full p-6 bg-primary-700/20 hover:bg-primary-700/30 border border-accent-light/30 hover:border-accent-light/60 rounded-xl transition-all duration-300 text-left cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-white pr-4">
                        {section.title}
                      </h4>
                      <div className="text-2xl text-accent-light transition-transform duration-300 group-hover:scale-110">
                        {openSection === index ? '▲' : '▼'}
                      </div>
                    </div>
                  </button>

                  {openSection === index && (
                    <div className="mt-2 p-6 bg-primary-800/20 border border-accent-light/20 rounded-xl animate-fade-in-up">
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
          <div className="bg-primary-800/30 backdrop-blur-md rounded-2xl p-8 border border-accent-light/30 shadow-soft mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent mb-4 drop-shadow-md">
                🧠 Cybersecurity Quiz
              </h3>
              <p className="text-lg text-gray-300">Test your cybersecurity knowledge with different question types!</p>
              {!quizCompleted && (
                <div className="text-sm text-gray-400 mt-2">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length} | Score: {quizScore}
                </div>
              )}
            </div>
            
            <div className="max-w-4xl mx-auto">
              {!quizCompleted ? (
                <div>
                  {/* Current Question */}
                  <div className="mb-8">
                    <div className="bg-primary-700/10 rounded-xl p-6 mb-6">
                      <h4 className="text-xl text-white font-semibold mb-6">
                        {quizQuestions[currentQuestionIndex]?.question}
                      </h4>
                      
                      {/* Fill in the blank */}
                      {quizQuestions[currentQuestionIndex]?.type === 'fill-in-blank' && (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <input
                            type='text'
                            placeholder='Your answer...'
                            value={quizAnswer}
                            onChange={(e) => setQuizAnswer(e.target.value)}
                            className="flex-1 px-4 py-3 bg-primary-700/20 border border-primary-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-transparent transition-all duration-300"
                          />
                          <div className="border-2 border-cyan-400/60 rounded-xl p-1 hover:border-cyan-400/80 transition-all duration-300">
                            <button
                              onClick={handleQuizSubmit}
                              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-soft hover:shadow-glow cursor-pointer"
                            >
                              Submit Answer
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Multiple choice */}
                      {quizQuestions[currentQuestionIndex]?.type === 'multiple-choice' && (
                        <div className="space-y-3">
                          {quizQuestions[currentQuestionIndex]?.options.map((option, index) => (
                            <label key={index} className="flex items-center p-4 bg-primary-700/10 rounded-lg hover:bg-primary-700/20 cursor-pointer transition-all duration-200">
                              <input
                                type="radio"
                                name="quiz-option"
                                value={index}
                                checked={selectedAnswer === index}
                                onChange={(e) => setSelectedAnswer(parseInt(e.target.value))}
                                className="mr-4 text-accent-light focus:ring-accent-light"
                              />
                              <span className="text-white">{option}</span>
                            </label>
                          ))}
                          <div className="border-2 border-cyan-400/60 rounded-xl p-1 hover:border-cyan-400/80 transition-all duration-300">
                            <button
                              onClick={handleQuizSubmit}
                              disabled={selectedAnswer === ''}
                              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-soft hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Submit Answer
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* True or False */}
                      {quizQuestions[currentQuestionIndex]?.type === 'true-false' && (
                        <div className="space-y-3">
                          <label className="flex items-center p-4 bg-primary-700/10 rounded-lg hover:bg-primary-700/20 cursor-pointer transition-all duration-200">
                            <input
                              type="radio"
                              name="true-false"
                              value={true}
                              checked={selectedAnswer === true}
                              onChange={(e) => setSelectedAnswer(true)}
                              className="mr-4 text-accent-light focus:ring-accent-light"
                            />
                            <span className="text-white text-lg font-semibold">True</span>
                          </label>
                          <label className="flex items-center p-4 bg-primary-700/10 rounded-lg hover:bg-primary-700/20 cursor-pointer transition-all duration-200">
                            <input
                              type="radio"
                              name="true-false"
                              value={false}
                              checked={selectedAnswer === false}
                              onChange={(e) => setSelectedAnswer(false)}
                              className="mr-4 text-accent-light focus:ring-accent-light"
                            />
                            <span className="text-white text-lg font-semibold">False</span>
                          </label>
                          <div className="border-2 border-cyan-400/60 rounded-xl p-1 hover:border-cyan-400/80 transition-all duration-300">
                            <button
                              onClick={handleQuizSubmit}
                              disabled={selectedAnswer === ''}
                              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 font-semibold shadow-soft hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Submit Answer
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Result Display */}
                    {quizResult && (
                      <div className={`p-4 rounded-xl border-2 mb-6 ${
                        quizResult.startsWith("✅") 
                          ? 'bg-accent-light/10 border-accent-light/50 text-accent-light' 
                          : 'bg-red-500/10 border-red-500/50 text-red-300'
                      }`}>
                        <p className="font-semibold text-lg mb-4">{quizResult}</p>
                        <div className="border-2 border-cyan-400/60 rounded-xl p-1 hover:border-cyan-400/80 transition-all duration-300 inline-block">
                          <button
                            onClick={handleNextQuestion}
                            className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-400 hover:to-primary-500 transition-all duration-300 font-semibold cursor-pointer"
                          >
                            {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Quiz Completed */
                <div className="text-center">
                  <div className="bg-gradient-to-r from-accent-light/10 to-primary-500/10 rounded-xl p-8 border border-accent-light/20">
                    <h4 className="text-3xl font-bold text-accent-light mb-4">🎉 Quiz Completed!</h4>
                    <p className="text-xl text-white mb-2">Your Score: {quizScore} out of {quizQuestions.length}</p>
                    <p className="text-lg text-gray-300 mb-6">
                      {quizScore === quizQuestions.length ? "Perfect! You're a cybersecurity expert! 🏆" :
                      quizScore >= quizQuestions.length * 0.8 ? "Excellent! Great job! 🌟" :
                      quizScore >= quizQuestions.length * 0.6 ? "Good work! Keep learning! 👍" :
                      "Keep studying! Practice makes perfect! 📚"}
                    </p>
                    <button
                      onClick={handleRestartQuiz}
                      className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-dark text-white rounded-xl hover:from-primary-500 hover:to-primary-600 transition-all duration-300 font-semibold shadow-soft hover:shadow-glow cursor-pointer"
                    >
                      🔄 Take Quiz Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CyberSecurityTab;