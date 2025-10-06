import { useState } from 'react';

function CyberMapEmbed({
  src = "https://cybermap.kaspersky.com/", // Default source URL
  title = 'Cyber Attack Map',
  height = '500px',
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true); 
  };

  return (
    <div style={{width: '100%', maxWidth: '1000', margin: '0 auto', textAlign: 'center'}}>
      <div style={{marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <strong>{title}</strong>
        <div style={{fontSize: '12px', color: '#888'}}>
          {loading && !error ? 'Loading map...' : error ? 'Failed to load map.' : 'Map loaded.'}
        </div>
      </div>

      <div 
        style={{
          position: 'relative', width: '100%', height: height, border: '1px solid #ccc', borderRadius: '6px', overflow: 'hidden', background: '#f9f9f9'
        }}
      >
          {/* Loading Indicator */}
          {loading && !error && (
            <div 
              style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', zIndex: 2
            }}
          >
          <div style={{textAlign: 'center'}}>
            <div className="spinner" style={{marginBottom: '8px'}}>
              {/* Simple CSS spinner */}
              <div style={{
                width: '28px', height: '28px', border: '4px solid #ccc', borderTop: '4px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite'
              }} />
              </div>
              <div style={{fontSize: '13px', color: '#444'}}>Loading map...</div>
            </div>
          </div>
          )}

          {/* Error Message */}
          {error && (
            <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', padding: '16px'
            }}>
              <div style={{fontSize: '16px', color: '#b00020', fontWeight: 'bold'}}>Failed to load the map.</div>
              <div style={{color: '#333', textAlign: 'center'}}>
                The provider may block embedding. You can open the map in a new tab.
              </div>
              <a 
                href={src}
                target='_blank'
                rel='noopener noreferrer'
                style={{padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', borderRadius: '6px', textDecoration: 'none'
                }}
              >
                  Open Map in New Tab
              </a>
            </div>
          )}

          {/* Iframe */}
          {!error && (
            <iframe 
              title={title}
              src={src}
              loading='lazy'
              onLoad={handleLoad}
              onError={handleError}
              style={{width: '100%', height: '100%', border: 'none', zIndex: 1}}
              />
          )}
        </div>

          {/* Spinner Keyframes */}
          <style>{`
            @keyframes spin { to {transform: rotate(360deg); } }
            `}</style>
          </div>
  ); 
}

export default CyberMapEmbed