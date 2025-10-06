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
    <div 
      style={{
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
      <div key={index} 
        style={{
          width: '100%',
          marginBottom: '10px',
          alignItems: 'center'
        }}>
        <div 
          style={{
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
            <CyberMapEmbed src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder='0' title="Kaspersky Cyber Map" height="520px" 
            />
          </div>

  );
};

export default CyberSecurityTab;