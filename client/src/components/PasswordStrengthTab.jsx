import React, { useState } from 'react';

const PasswordStrengthTab = () => {
  const [password, setPassword] = useState("");
  const [tip, setTip] = useState('Start typing to see password tips...')
  const [showPassword, setShowPassword] = useState(false);
  const [openFAQSection, setOpenFAQSection] = useState(null);

   // Handles password input change
  const handleChange = async (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value.length === 0) {
      setTip('Start typing to see password tips...');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/password/check', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      const data = await response.text();
      setTip(data);
    } catch (error) {
      console.log("Error fetching password tip", error);
      setTip('Error fetching password tip');
    }
  };

  const faqSections = [
    {
      question: 'Is it safe to use the same password for multiple accounts?',
      answer: 'No, using the same password for multiple accounts increases the risk of a security breach. If one account is compromised, all accounts with the same password are at risk.'
    },
    {
      question: 'How often should I change my passwords?',
      answer: 'It is recommended to change your passwords every 3-6 months, or immediately if you suspect a breach.'
    },
    {
      question: 'What is a strong password?',
      answer: 'A strong password typically includes a mix of uppercase and lowercase letters, numbers, and special characters. It should be at least 12 characters long and avoid common words or phrases.'
    },
    {
      question: 'Is it safe to input my real password here?',
      answer: 'Yes, this application only sends your password to a local server for analysis. However, always be cautious about where you input your passwords and ensure the site is trustworthy.'
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Main Password Checker Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Password Strength Checker
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enter your password below to get real-time feedback and tips for improving your security.
          </p>
        </div>

        {/* Password Input Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password to check strength"
                value={password} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/25"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
            
          {/* Password Tip Display */}
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💡</div>
              <div className="text-gray-300 leading-relaxed">
                {tip}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Password Security FAQ
          </h3>

          <div className="space-y-4">
            {faqSections.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => setOpenFAQSection(openFAQSection === index ? null : index)}
                  className="w-full p-6 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 text-left group"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h4>
                    <div className="text-2xl text-blue-400 transition-transform duration-300 group-hover:scale-110">
                      {openFAQSection === index ? '▲' : '▼'}
                    </div>
                  </div>
                </button>

                {openFAQSection === index && (
                  <div className="mt-2 p-6 bg-white/5 border border-white/10 rounded-xl animate-fade-in-up">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthTab