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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const tabs = [
    { id: 'password', label: 'Password Strength Checker' },
    { id: 'home', label: 'Home'},
    { id: 'cybersecurity', label: 'Cybersecurity Info' },
  ];

  // Cybersecurity Info Tab Sections
  const sections = [
    {
      title: 'What is Cybersecurity?',
      content: 'Cybersecurity involves protecting systems, networks, and data from digital attacks. It includes practices like using strong passwords, enabling two-factor authentication, and being cautious of phishing attempts.'
    },
    {
      title: 'Common Cyber Threats',
      content: 'Common threats include malware, phishing, and social engineering.'
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
    {
      title: 'Firewalls and Antivirus Software',
      content: 'Firewalls monitor and control incoming and outgoing network traffic based on predetermined security rules. Antivirus software detects and removes malicious software from your devices.'
    },
    {
      title: 'Types of Malware',
      content: 'Malware includes viruses, worms, Trojans, ransomware, spyware, and adware. Each type has different methods of infection and damage.'
    },
    {
      title: 'Best Practices for Online Security',
      content: 'Use strong, unique passwords for each account, enable 2FA, keep software updated, avoid public Wi-Fi for sensitive transactions, and regularly back up important data.'
    },
  ];

  // Comprehensive Quiz Questions
  const quizQuestions = [
    // Fill in the blank questions
    {
      id: 1,
      type: 'fill-in-blank',
      question: 'What does 2FA stand for in cybersecurity?',
      correctAnswer: 'two-factor authentication',
      explanation: '2FA stands for Two-Factor Authentication, which adds an extra layer of security by requiring two forms of identification.'
    },
    {
      id: 2,
      type: 'fill-in-blank',
      question: 'What is the technique where attackers send fraudulent messages to trick individuals into revealing sensitive information?',
      correctAnswer: 'phishing',
      explanation: 'Phishing is a social engineering attack where attackers send fraudulent messages to trick people into revealing sensitive information.'
    },
    {
      id: 3,
      type: 'fill-in-blank',
      question: 'What type of attack systematically tries every possible password combination?',
      correctAnswer: 'brute force',
      explanation: 'A brute force attack systematically tries every possible password combination until the correct one is found.'
    },
    
    // Multiple choice questions
    {
      id: 4,
      type: 'multiple-choice',
      question: 'Which of the following is the most secure password?',
      options: [
        'password123',
        'P@ssw0rd!2024',
        '123456',
        'qwerty'
      ],
      correctAnswer: 1, // Index of correct answer
      explanation: 'P@ssw0rd!2024 is the most secure because it contains uppercase, lowercase, numbers, special characters, and is long.'
    },
    {
      id: 5,
      type: 'multiple-choice',
      question: 'What is the primary purpose of a firewall?',
      options: [
        'To encrypt data',
        'To block unauthorized network access',
        'To store passwords securely',
        'To create backups'
      ],
      correctAnswer: 1,
      explanation: 'A firewall\'s primary purpose is to block unauthorized network access and monitor incoming/outgoing traffic.'
    },
    {
      id: 6,
      type: 'multiple-choice',
      question: 'Which of the following is NOT a type of malware?',
      options: [
        'Virus',
        'Trojan',
        'Antivirus',
        'Ransomware'
      ],
      correctAnswer: 2,
      explanation: 'Antivirus is security software that protects against malware, not a type of malware itself.'
    },
    
    // True or False questions
    {
      id: 7,
      type: 'true-false',
      question: 'Using the same password for multiple accounts is a good security practice.',
      correctAnswer: false,
      explanation: 'Using the same password for multiple accounts is dangerous because if one account is compromised, all accounts with the same password are at risk.'
    },
    {
      id: 8,
      type: 'true-false',
      question: 'Two-factor authentication (2FA) makes accounts more secure.',
      correctAnswer: true,
      explanation: '2FA adds an extra layer of security by requiring two forms of identification, making accounts much more secure.'
    },
    {
      id: 9,
      type: 'true-false',
      question: 'It\'s safe to click on links in emails from unknown senders.',
      correctAnswer: false,
      explanation: 'Clicking on links in emails from unknown senders is dangerous and can lead to phishing attacks or malware infections.'
    },
    {
      id: 10,
      type: 'true-false',
      question: 'Regular software updates help protect against security vulnerabilities.',
      correctAnswer: true,
      explanation: 'Regular software updates often include security patches that fix vulnerabilities, making your system more secure.'
    }
  ];

  // Quiz Handlers
  const handleQuizSubmit = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    let isCorrect = false;
    let resultMessage = '';

    if (currentQuestion.type === 'fill-in-blank') {
      isCorrect = quizAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase();
    } else if (currentQuestion.type === 'multiple-choice') {
      isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'true-false') {
      isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    }

    if (isCorrect) {
      setQuizScore(quizScore + 1);
      resultMessage = `✅ Correct! ${currentQuestion.explanation}`;
    } else {
      if (currentQuestion.type === 'fill-in-blank') {
        resultMessage = `❌ Not quite. The correct answer is "${currentQuestion.correctAnswer}". ${currentQuestion.explanation}`;
      } else {
        const correctOption = currentQuestion.type === 'multiple-choice' 
          ? currentQuestion.options[currentQuestion.correctAnswer]
          : currentQuestion.correctAnswer ? 'True' : 'False';
        resultMessage = `❌ Not quite. The correct answer is "${correctOption}". ${currentQuestion.explanation}`;
      }
    }

    setQuizResult(resultMessage);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuizAnswer('');
      setSelectedAnswer('');
      setQuizResult('');
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizScore(0);
    setQuizCompleted(false);
    setQuizAnswer('');
    setSelectedAnswer('');
    setQuizResult('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="w-full p-6 text-center bg-black/20 backdrop-blur-md border-b border-white/10">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Lock N Learn
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
      
        {/* Cybersecurity Info & Quiz Tab*/}
        {activeTab === 'cybersecurity' && (
          <CyberSecurityTab
            sections={sections}
            openSection={openSection}
            setOpenSection={setOpenSection}
            quizAnswer={quizAnswer}
            setQuizAnswer={setQuizAnswer}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            handleQuizSubmit={handleQuizSubmit}
            handleNextQuestion={handleNextQuestion}
            handleRestartQuiz={handleRestartQuiz}
            quizResult={quizResult}
            quizQuestions={quizQuestions}
            currentQuestionIndex={currentQuestionIndex}
            quizScore={quizScore}
            quizCompleted={quizCompleted}
          />
        )}
      </div>
    </div>    
  );
};

export default App
