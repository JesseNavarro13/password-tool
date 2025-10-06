import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import CyberMapEmbed from './components/CyberMapEmbed';

function App() {
  const [activeTab, setActiveTab] = useState('password');
  const [password, setPassword] = useState("");
  const [tip, setTip] = useState('Start typing to see password tips...')
  const [showPassword, setShowPassword] = useState(false);

  // FAQ data
  const [openFAQSection, setOpenFAQSection] = useState(null);

  // Cybersecurity Info/Help Tab Collapsable sections
  const [openSection, setOpenSection] = useState(null);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState("");

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">

      {/* Header */}
      <header className="w-full max-w-4xl p-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)]">Password Strength & Cybersecurity Learning App</h1>
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
      <div style = {{
        width: '100%', 
        maxWidth: '1000px', 
        padding: '20px'
      }}>
        {activeTab === 'password' && (
          <div>
            <div style={{
              display: 'flex', 
              justifyContent: 'center', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '0px',
              marginTop: '20px'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center' 
              }}>
        
              {/* Password Input Field */}
              <input 
                type={showPassword ? "text" : "password"} // toggle
                placeholder="Enter your password"
                value={password} 
                onChange={handleChange} 
                style={{
                  padding: '10px', 
                  fontsize: '16px', 
                  width: '250px', 
                  borderRadius: '5px 0 0 5px', 
                  border: '1px solid #ccc',
                  borderRight: 'none'
                }}
              />

              {/* Toggle Password Button */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                className='button'
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            {/* Display Password Tip */}
            <div style={{
              marginTop: '10px', 
              fontSize: '14px', 
              color: '#ffffffff'}}>{tip}</div>
          </div>

          {/* FAQ Section */}
          <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
          <div style={{
            marginTop: '75px', 
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#2F4858',
            maxWidth: '600px',
            width: '100%', 
            fontSize: '40px',
            }}
          >
            <h3 className='flex gap-4 font-bold text-4xl mt-4 mb-5'>Password FAQ</h3>

            {faqSections.map((faq, index) => (
              <div key={index} style={{marginBottom: '10px'}}>
                <button
                  onClick={() => 
                    setOpenFAQSection(openFAQSection === index ? null : index)
                  }
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    textAlign: 'left', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px', 
                    fontSize: '16px',
                    backgroundColor: openFAQSection === index ? 'rgb(48, 57, 67)' : '#2badd1', 
                    color: '#fff', 
                    cursor: 'pointer', 
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {faq.question}
                  <span style={{ marginLeft: '10px'}}>
                    {openFAQSection === index ? '▲' : '▼'}
                  </span>
                </button>

                {openFAQSection === index && (
                  <div style={{
                    width: '100%',
                    maxWidth: '580px',
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderTop: 'none', 
                    borderRadius: '0 0 5px 5px', 
                    backgroundColor: '#f9f9f9',
                    color: 'black',
                    fontSize: '16px',
                    textAlign: 'left',
                    marginTop: '5px',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                  >
                    {faq.answer}
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      )}
      
        {/* Cybersecurity Info/Help Tab & Live Map*/}
        {activeTab === 'cybersecurity' && (
          <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '0px',
            marginTop: '0px',
          }}>
            <h2 className='font-semibold text-2xl m-4'>Cybersecurity Information and Definitions</h2>

            {/* Collapsable Sections */}
            {sections.map((section, index) => (
              <div key={index} style={{
                width: '100%',
                marginBottom: '10px',
                alignItems: 'center'
              }}>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center'
                }}>
                <button
                  onClick={() => setOpenSection(openSection === index ? null : index)}
                  style={{
                    width: '100%', 
                    maxWidth: '600px',
                    textAlign: 'left', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderRadius: '5px', 
                    backgroundColor: openSection === index ? '#b3d3f1ff' : '#2badd1', 
                    color: '#fff', 
                    cursor: 'pointer', 
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {section.title}
                  <span style={{ marginLeft: '10px' }}>
                    {openSection === index ? '▲' : '▼'}
                    </span>
                  </button>

                  {openSection === index && (
                    <div style={{
                      maxWidth: '575px', 
                      width: '100%', 
                      textAlign: 'left',
                      padding: '10px', 
                      border: '1px solid #ccc', 
                      borderTop: 'none', 
                      borderRadius: '0 0 5px 5px', 
                      backgroundColor: '#f9f9f9', 
                      color: '#000',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      {section.content}
                    </div>
                  )}
                  </div>
              </div>
            ))}

            {/* Simple Quiz */}
            <div style={{marginTop: '10px'}}>
              <h3 className='text-2xl'>Quick Quiz</h3>
              <p>What does 2FA stand for in cybersecurity?</p>
              <input
                type='text'
                placeholder='Your answer...'
                value={quizAnswer}
                onChange={(e) => setQuizAnswer(e.target.value)}
                style={{
                  padding: '8px', 
                  fontsize: '16px', 
                  width: '250px', 
                  borderRadius: '5px', 
                  border: '1px solid #ccc'}}
                />
              <button
                onClick={handleQuizSubmit}
                style={{
                  marginLeft: '10px', 
                  padding: '8px 15px', 
                  border: '1px solid #ccc', 
                  borderRadius: '5px', 
                  backgroundColor: '#155cb2ff', 
                  color: '#fff', 
                  cursor: 'pointer'}}
                >
                  Submit</button>
                  {quizResult && (
                    <p style={{
                      marginTop: '10px', 
                      fontWeight: 'bold', 
                      color: quizResult.startsWith("Correct") ? 'green' : 'red'}}>{quizResult}</p>
                  )}
            </div>

            <h3 style={{marginTop: '50px'}}>Live Cyber Attack Map</h3>
            <CyberMapEmbed src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder='0' title="Kaspersky Cyber Map" height="520px" />
          </div>
        )}
      </div>
    </div>    
  );
}

export default App
