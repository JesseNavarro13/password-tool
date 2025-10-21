import { useState } from 'react';
import './App.css';
import './index.css';
import Homepage from './components/Homepage';
import PasswordStrengthTab from './components/PasswordStrengthTab';
import CyberSecurityTab from './components/CyberSecurityTab';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Cybersecurity Info/Help Tab Collapsable sections
  const [openSection, setOpenSection] = useState(null);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const tabs = [
    { id: 'password', label: 'Password Strength Checker' },
    { id: 'home', label: 'Home'},
    { id: 'cybersecurity', label: 'Cybersecurity Info' },
  ];

  const sections = [
    {
      title: 'What is Cybersecurity?',
      content: 'Cybersecurity involves protecting systems, networks, and data from digital attacks. It includes practices like using strong passwords, enabling two-factor authentication, and being cautious of phishing attempts.'
    },
    {
      title: 'Common Cyber Threats',
      content: 'Common threats include malware (viruses, ransomware), phishing (fraudulent emails), and social engineering (manipulating people to divulge confidential information).'
    },
    {
      title: 'Two-Factor Authentication (2FA)',
      content: '2FA adds an extra layer of security by requiring two forms of identification before granting access. This could be something you know (password) and something you have (a code sent to your phone).'
    },
    {
      title: 'Password Cracking Techniques',
      content: 
      <p>
        <strong>Hackers use various methods to crack passwords, including:</strong><br />
        • <strong>Brute force attacks:</strong> Systematically trying every combination of data, such as passwords or encryption keys, using trial-and-error until the correct password is found.<br /> 
        • <strong>Dictionary attacks:</strong> Using a pre-compiled list of common words, phrases, and character comvinations to guess a user's password.<br /> 
        • <strong>Social engineering:</strong> A malicious technique that exploits human psychology to trick users into revealing their passwords or other sensitive information.
      </p>
    },
    {
      title: 'Phishing Awareness',
      content: 'Phishing is a technique where attackers send fraudulent messages to trick individuals into revealing sensitive information. Always verify the sender and avoid clicking on suspicious links.'
    },
  ];

  const handleQuizSubmit = (e) => {
    if(quizAnswer.toLowerCase() === "two-factor authentication") {
      setQuizResult("Correct! Two-Factor Authentication (2FA) is an extra layer of security.");
    } else {
      setQuizResult("Not quite. The correct answer is Two-Factor Authentication (2FA).");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="w-full p-6 text-center bg-black/20 backdrop-blur-md border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Password Strength & Cybersecurity Learning App
        </h1>
      </header>

      {/* Tabs Menu */}
      <div className="flex justify-center p-6">
        <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105" 
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {/* Homepage*/}
        {activeTab === 'home' && <Homepage onTabChange={setActiveTab}/>}

        {/* Password Strength Checker Tab */}
        {activeTab === 'password' && <PasswordStrengthTab/>}
      
        {/* Cybersecurity Info/Help Tab & Live Map*/}
        {activeTab === 'cybersecurity' && (
          <CyberSecurityTab
            sections={sections}
            openSection={openSection}
            setOpenSection={setOpenSection}
            quizAnswer={quizAnswer}
            setQuizAnswer={setQuizAnswer}
            handleQuizSubmit={handleQuizSubmit}
            quizResult={quizResult}
            >/</CyberSecurityTab>
        )}
      </div>
    </div>    
  );
};

export default App
