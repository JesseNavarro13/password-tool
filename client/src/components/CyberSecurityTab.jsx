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
            <h2 className="text-5xl md:text-5xl font-bold h-14 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
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
                    <div className="bg-white/5 rounded-xl p-6 mb-6">
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
                            className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          />
                          <button
                            onClick={handleQuizSubmit}
                            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25"
                          >
                            Submit Answer
                          </button>
                        </div>
                      )}
                      
                      {/* Multiple choice */}
                      {quizQuestions[currentQuestionIndex]?.type === 'multiple-choice' && (
                        <div className="space-y-3">
                          {quizQuestions[currentQuestionIndex]?.options.map((option, index) => (
                            <label key={index} className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200">
                              <input
                                type="radio"
                                name="quiz-option"
                                value={index}
                                checked={selectedAnswer === index}
                                onChange={(e) => setSelectedAnswer(parseInt(e.target.value))}
                                className="mr-4 text-green-500 focus:ring-green-500"
                              />
                              <span className="text-white">{option}</span>
                            </label>
                          ))}
                          <button
                            onClick={handleQuizSubmit}
                            disabled={selectedAnswer === ''}
                            className="w-full px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit Answer
                          </button>
                        </div>
                      )}
                      
                      {/* True or False */}
                      {quizQuestions[currentQuestionIndex]?.type === 'true-false' && (
                        <div className="space-y-3">
                          <label className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200">
                            <input
                              type="radio"
                              name="true-false"
                              value={true}
                              checked={selectedAnswer === true}
                              onChange={(e) => setSelectedAnswer(true)}
                              className="mr-4 text-green-500 focus:ring-green-500"
                            />
                            <span className="text-white text-lg font-semibold">True</span>
                          </label>
                          <label className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200">
                            <input
                              type="radio"
                              name="true-false"
                              value={false}
                              checked={selectedAnswer === false}
                              onChange={(e) => setSelectedAnswer(false)}
                              className="mr-4 text-green-500 focus:ring-green-500"
                            />
                            <span className="text-white text-lg font-semibold">False</span>
                          </label>
                          <button
                            onClick={handleQuizSubmit}
                            disabled={selectedAnswer === ''}
                            className="w-full px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit Answer
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Result Display */}
                    {quizResult && (
                      <div className={`p-4 rounded-xl border-2 mb-6 ${
                        quizResult.startsWith("✅") 
                          ? 'bg-green-500/10 border-green-500/50 text-green-300' 
                          : 'bg-red-500/10 border-red-500/50 text-red-300'
                      }`}>
                        <p className="font-semibold text-lg mb-4">{quizResult}</p>
                        <button
                          onClick={handleNextQuestion}
                          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold"
                        >
                          {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Quiz Completed */
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
                    <h4 className="text-3xl font-bold text-green-400 mb-4">🎉 Quiz Completed!</h4>
                    <p className="text-xl text-white mb-2">Your Score: {quizScore} out of {quizQuestions.length}</p>
                    <p className="text-lg text-gray-300 mb-6">
                      {quizScore === quizQuestions.length ? "Perfect! You're a cybersecurity expert! 🏆" :
                      quizScore >= quizQuestions.length * 0.8 ? "Excellent! Great job! 🌟" :
                      quizScore >= quizQuestions.length * 0.6 ? "Good work! Keep learning! 👍" :
                      "Keep studying! Practice makes perfect! 📚"}
                    </p>
                    <button
                      onClick={handleRestartQuiz}
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
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