import { useState } from 'react';
import './App.css';
import './index.css';
import PasswordStrengthTab from './components/PasswordStrengthTab';
import CyberSecurityTab from './components/CyberSecurityTab';

function App() {
  const [activeTab, setActiveTab] = useState('password');

  // Cybersecurity Info/Help Tab Collapsable sections
  const [openSection, setOpenSection] = useState(null);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

  const tabs = [
    { id: 'password', label: 'Password Strength Checker' },
    { id: 'cybersecurity', label: 'Cybersecurity Info/Help' },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-white px-4">

      {/* Header */}
      <header className="w-full max-w-4xl p-6 text-center">
        <h1 className="font-bold drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] mb-10">Password Strength & Cybersecurity Learning App</h1>
      </header>

      {/* Tabs Menu */}
      <div className='flex gap-4'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Password Strength Checker Tab */}
      <div className="w-full max-w-5xl p-5">
        {activeTab === 'password' && <PasswordStrengthTab></PasswordStrengthTab>
        }
      
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
