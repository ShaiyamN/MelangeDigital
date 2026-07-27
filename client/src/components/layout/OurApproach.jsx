import React, { useState, useEffect, useRef } from "react";
const OurApproach = () => {
  const [activeSection, setActiveSection] = useState(-1); // -1 represents the default "Our Approach" state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const sections = [
    {
      id: "consumers",
      title: "Consumers",
      titleColor: "text-blue-600",
      content: "Behind every data point is a person with preferences, habits, and emotions. We ask the right questions, decode user journeys, and identify key moments that influence decision-making.",
      ballIndex: 1
    },
    {
      id: "culture",
      title: "Culture",
      titleColor: "text-blue-600",
      content: "Harnessing the power of AI alongside research techniques to decode cultural shifts, help us to craft campaigns that are not only relevant but resonate deeply with your audience.",
      ballIndex: 2
    },
    {
      id: "company",
      title: "Company",
      titleColor: "text-blue-600",
      content: "We believe that a strong foundation in traditional marketing principles, paired with the latest technological advancements, sets the stage for groundbreaking results.",
      ballIndex: 3
    },
    {
      id: "category",
      title: "Category",
      titleColor: "text-blue-600",
      content: "Marketing is not just a discipline, it's an art form. We don't just analyse trends, we dissect entire categories to uncover hidden opportunities and redefine the landscape.",
      ballIndex: 0
    }
  ];
  
  const balls = [
    { id: "category", label: "Category" },
    { id: "consumers", label: "Consumers" },
    { id: "culture", label: "Culture" },
    { id: "company", label: "Company" }
  ];
  
  const handleSectionClick = (index) => {
    if (index === activeSection || isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };
  
  const handleTitleClick = () => {
    if (activeSection === -1 || isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(-1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };
  
  const getActiveBallIndex = () => {
    if (activeSection === -1) {
      return -1; // Default state shows initial animation
    }
    return sections[activeSection]?.ballIndex ?? -1;
  };
  
  // Calculate responsive scale factor
  const getScale = () => {
    if (windowSize.width < 640) return 0.5; // sm
    if (windowSize.width < 768) return 0.65; // md
    if (windowSize.width < 1024) return 0.8; // lg
    return 1; // xl and above
  };
  
  const scale = getScale();
  
  // Calculate container dimensions
  const containerWidth = windowSize.width < 640 ? 300 : 
                        windowSize.width < 768 ? 400 : 
                        windowSize.width < 1024 ? 500 : 628;
  const containerHeight = windowSize.width < 640 ? 300 : 
                         windowSize.width < 768 ? 400 : 
                         windowSize.width < 1024 ? 500 : 576;
  const containerCenterX = containerWidth / 2;
  const containerCenterY = containerHeight / 2;
  
  // Calculate the radius for the main outer orbit
  const mainOrbitRadius = windowSize.width < 640 ? 125 : 
                         windowSize.width < 768 ? 167 : 
                         windowSize.width < 1024 ? 220 : 263;
  
  // Determine if we're in mobile view
  const isMobileView = windowSize.width < 1024;
  
  return (
    <div className="min-h-screen bg-white">
      {isMobileView ? (
        // Mobile Layout
        <div className="p-6">
          {/* Title Section */}
          <div className="mb-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4 text-black cursor-pointer transition-colors duration-300"
              onClick={handleTitleClick}
            >
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Approach</span>
            </h2>
            
            {/* Default "Our Approach" content */}
            {activeSection === -1 && (
              <div 
                className="transition-opacity duration-300 ease-in-out mb-6"
                style={{ opacity: isTransitioning ? 0 : 1 }}
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  We're not just marketers. We're data-driven strategists with a pulse on culture.
                </p>
              </div>
            )}
          </div>
          
          {/* Visualization Section */}
          <div className="flex justify-center mb-10">
            <div className="relative" style={{ 
              width: `${containerWidth}px`, 
              height: `${containerHeight}px`
            }}>
              {/* Main outer orbit */}
              <div className="absolute border border-dashed border-[#b3b3b3] rounded-full" 
                   style={{ 
                     width: `${mainOrbitRadius * 2}px`, 
                     height: `${mainOrbitRadius * 2}px`,
                     top: `${containerCenterY - mainOrbitRadius}px`,
                     left: `${containerCenterX - mainOrbitRadius}px`
                   }} />
              
              {/* Orbit path rings */}
              {[120, 150, 180, 240].map((radius, i) => {
                const scaledRadius = radius * scale;
                const diameter = scaledRadius * 2;
                
                return (
                  <div
                    key={`orbit-ring-${i}`}
                    className="absolute rounded-full border border-dashed border-[#e0e0e0]"
                    style={{
                      width: `${diameter}px`,
                      height: `${diameter}px`,
                      top: `${containerCenterY - scaledRadius}px`,
                      left: `${containerCenterX - scaledRadius}px`,
                      zIndex: 0,
                    }}
                  />
                );
              })}
              
              {balls.map((ball, index) => {
                const isActive = getActiveBallIndex() === index;
                const activeBallIndex = getActiveBallIndex();
                
                // Default positions for different screen sizes
                const defaultPositions = [
                  { 
                    top: `${containerHeight * 0.06}px`, 
                    left: `${containerWidth * 0.04}px`, 
                    labelTop: `${containerHeight * 0.18}px`, 
                    labelLeft: `${containerWidth * 0.09}px` 
                  },
                  { 
                    top: `${containerHeight * 0.06}px`, 
                    left: `${containerWidth * 0.68}px`, 
                    labelTop: `${containerHeight * 0.18}px`, 
                    labelLeft: `${containerWidth * 0.73}px` 
                  },
                  { 
                    top: `${containerHeight * 0.65}px`, 
                    left: `${containerWidth * 0.04}px`, 
                    labelTop: `${containerHeight * 0.77}px`, 
                    labelLeft: `${containerWidth * 0.09}px` 
                  },
                  { 
                    top: `${containerHeight * 0.65}px`, 
                    left: `${containerWidth * 0.69}px`, 
                    labelTop: `${containerHeight * 0.77}px`, 
                    labelLeft: `${containerWidth * 0.74}px` 
                  }
                ];
                
                // Center position for active ball
                const centerPosition = {
                  top: `${containerCenterY - 85 * scale}px`,
                  left: `${containerCenterX - 85 * scale}px`,
                  labelTop: `${containerCenterY}px`,
                  labelLeft: `${containerCenterX}px`
                };
                
                const orbitConfigs = [
                  { radius: 120 * scale, speed: 'small', scale: 0.3, textScale: 0.3, orbitDuration: '8s', ballDuration: '6s' },
                  { radius: 180 * scale, speed: 'medium', scale: 0.3, textScale: 0.3, orbitDuration: '12s', ballDuration: '9s' },
                  { radius: 240 * scale, speed: 'large', scale: 0.3, textScale: 0.3, orbitDuration: '16s', ballDuration: '12s' },
                  { radius: 150 * scale, speed: 'medium', scale: 0.3, textScale: 0.3, orbitDuration: '10s', ballDuration: '7s' }
                ];
                
                const config = orbitConfigs[index];
                let ballPosition, labelPosition, ballScale, textScale, shouldAnimate;
                
                if (isActive) {
                  ballPosition = centerPosition;
                  labelPosition = centerPosition;
                  ballScale = 1;
                  textScale = 1;
                  shouldAnimate = false;
                } else {
                  const angleOffsets = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
                  const angle = angleOffsets[index];
                  const orbitX = containerCenterX + Math.cos(angle) * config.radius - 84.5 * scale;
                  const orbitY = containerCenterY + Math.sin(angle) * config.radius - 84.5 * scale;
                  
                  if (activeBallIndex === -1) {
                    ballPosition = defaultPositions[index];
                    labelPosition = defaultPositions[index];
                    ballScale = 0.5;
                    textScale = 0.5;
                    shouldAnimate = true;
                  } else {
                    ballPosition = { top: `${orbitY}px`, left: `${orbitX}px` };
                    labelPosition = {
                      labelTop: `${orbitY + 71 * config.scale}px`,
                      labelLeft: `${orbitX + 32 * config.scale}px`
                    };
                    ballScale = config.scale;
                    textScale = config.textScale;
                    shouldAnimate = true;
                  }
                }
                
                return (
                  <React.Fragment key={ball.id}>
                    {shouldAnimate && (
                      <div
                        className="absolute"
                        style={{
                          top: `${containerCenterY}px`,
                          left: `${containerCenterX}px`,
                          transformOrigin: '0 0',
                          zIndex: 1,
                          animation: `orbit-${config.speed} ${config.orbitDuration} linear infinite`
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            top: `${parseInt(ballPosition.top) - containerCenterY}px`,
                            left: `${parseInt(ballPosition.left) - containerCenterX}px`,
                            transform: `scale(${ballScale})`,
                            transformOrigin: 'center center',
                            transition: 'transform 1s ease-in-out'
                          }}
                        >
                          <div
                            className="rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(121,31,240,1)_100%)]"
                            style={{
                              width: `${169 * scale}px`,
                              height: `${169 * scale}px`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className="absolute rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(121,31,240,1)_100%)] transition-all duration-700 ease-in-out"
                      style={{
                        width: `${169 * scale}px`,
                        height: `${169 * scale}px`,
                        top: ballPosition.top,
                        left: ballPosition.left,
                        zIndex: isActive ? 10 : (shouldAnimate ? 0 : 1),
                        transform: `scale(${ballScale})`,
                        transformOrigin: 'center center',
                        opacity: shouldAnimate ? 0 : 1
                      }}
                    />
                    {/* Text label that moves with the ball */}
                    <div
                      className="absolute font-['Bricolage_Grotesque',Helvetica] font-extrabold text-center tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-700 ease-in-out"
                      style={{
                        top: labelPosition.labelTop,
                        left: labelPosition.labelLeft,
                        zIndex: isActive ? 10 : (shouldAnimate ? 0 : 1),
                        color: isActive ? '#ffffff' : '#000000',
                        transform: isActive ? `translate(-50%, -50%) scale(${textScale})` : `scale(${textScale})`,
                        transformOrigin: isActive ? 'center center' : 'center center',
                        opacity: isActive ? 1 : 0,
                        fontSize: `${20 * scale}px`
                      }}
                    >
                      {ball.label.toUpperCase()}
                    </div>
                  </React.Fragment>
                );
              })}
              
              <div
                className="absolute font-['Bricolage_Grotesque',Helvetica] font-extrabold text-black text-center tracking-[0] leading-[normal] transition-opacity duration-500"
                style={{
                  top: `${containerHeight * 0.44}px`,
                  left: `${containerWidth * 0.34}px`,
                  fontSize: `${17 * scale}px`,
                  opacity: getActiveBallIndex() === -1 ? 1 : 0,
                  zIndex: 5
                }}
              >
                STRATEGIC PROPOSITION<br />
                STRATEGIC DIRECTION<br />
                BIG IDEA<br />
                KEY MESSAGE
              </div>
            </div>
          </div>
          
          {/* Section Headers with Content */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={section.id}>
                <div
                  onClick={() => handleSectionClick(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === index 
                      ? 'text-blue-600 scale-105' 
                      : 'text-gray-600 hover:text-gray-900'
                  } font-bold text-xl`}
                >
                  <h3 className={activeSection === index ? section.titleColor : ''}>
                    {section.title}
                  </h3>
                </div>
                
                {/* Content for this section */}
                {activeSection === index && (
                  <div 
                    className="transition-opacity duration-300 ease-in-out mt-2 pl-4 border-l-2 border-blue-200"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                  >
                    <p className="text-gray-700 text-base leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout
        <div className="flex">
          <div className="w-1/2 p-12">
            <div className="min-h-[400px] flex flex-col justify-center">
              <h2 
                className="text-4xl font-bold mb-6 text-black cursor-pointer transition-colors duration-300"
                onClick={handleTitleClick}
              >
                Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Approach</span>
              </h2>
              
              {/* Default "Our Approach" content */}
              {activeSection === -1 && (
                <div 
                  className="transition-opacity duration-300 ease-in-out mb-8"
                  style={{ opacity: isTransitioning ? 0 : 1 }}
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We're not just marketers. We're data-driven strategists with a pulse on culture.
                  </p>
                </div>
              )}
              
              {/* Section Headers with Content */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <div key={section.id}>
                    <div
                      onClick={() => handleSectionClick(index)}
                      className={`cursor-pointer transition-all duration-300 ${
                        activeSection === index 
                          ? 'text-blue-600 scale-105' 
                          : 'text-gray-600 hover:text-gray-900'
                      } font-bold text-2xl`}
                    >
                      <h3 className={activeSection === index ? section.titleColor : ''}>
                        {section.title}
                      </h3>
                    </div>
                    
                    {/* Content for this section */}
                    {activeSection === index && (
                      <div 
                        className="transition-opacity duration-300 ease-in-out mt-2 pl-4 border-l-2 border-blue-200"
                        style={{ opacity: isTransitioning ? 0 : 1 }}
                      >
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-1/2 sticky top-0 h-screen flex items-start justify-center bg-white pt-20">
            <div className="relative" style={{ width: `${containerWidth}px`, height: `${containerHeight}px`, marginTop: '-40px' }}>
              {/* Main outer orbit */}
              <div className="absolute border border-dashed border-[#b3b3b3] rounded-full" 
                   style={{ 
                     width: `${mainOrbitRadius * 2}px`, 
                     height: `${mainOrbitRadius * 2}px`,
                     top: `${containerCenterY - mainOrbitRadius}px`,
                     left: `${containerCenterX - mainOrbitRadius}px`
                   }} />
              
              {/* Orbit path rings */}
              {[120, 150, 180, 240].map((radius, i) => {
                const scaledRadius = radius * scale;
                const diameter = scaledRadius * 2;
                
                return (
                  <div
                    key={`orbit-ring-${i}`}
                    className="absolute rounded-full border border-dashed border-[#e0e0e0]"
                    style={{
                      width: `${diameter}px`,
                      height: `${diameter}px`,
                      top: `${containerCenterY - scaledRadius}px`,
                      left: `${containerCenterX - scaledRadius}px`,
                      zIndex: 0,
                    }}
                  />
                );
              })}
              
              {balls.map((ball, index) => {
                const isActive = getActiveBallIndex() === index;
                const activeBallIndex = getActiveBallIndex();
                
                // Default positions for different screen sizes
                const defaultPositions = [
                  { 
                    top: `${containerHeight * 0.06}px`, 
                    left: `${containerWidth * 0.04}px`, 
                    labelTop: `${containerHeight * 0.18}px`, 
                    labelLeft: `${containerWidth * 0.09}px` 
                  },
                  { 
                    top: `${containerHeight * 0.06}px`, 
                    left: `${containerWidth * 0.68}px`, 
                    labelTop: `${containerHeight * 0.18}px`, 
                    labelLeft: `${containerWidth * 0.73}px` 
                  },
                  { 
                    top: `${containerHeight * 0.65}px`, 
                    left: `${containerWidth * 0.04}px`, 
                    labelTop: `${containerHeight * 0.77}px`, 
                    labelLeft: `${containerWidth * 0.09}px` 
                  },
                  { 
                    top: `${containerHeight * 0.65}px`, 
                    left: `${containerWidth * 0.69}px`, 
                    labelTop: `${containerHeight * 0.77}px`, 
                    labelLeft: `${containerWidth * 0.74}px` 
                  }
                ];
                
                // Center position for active ball
                const centerPosition = {
                  top: `${containerCenterY - 85 * scale}px`,
                  left: `${containerCenterX - 85 * scale}px`,
                  labelTop: `${containerCenterY}px`,
                  labelLeft: `${containerCenterX}px`
                };
                
                const orbitConfigs = [
                  { radius: 120 * scale, speed: 'small', scale: 0.3, textScale: 0.3, orbitDuration: '8s', ballDuration: '6s' },
                  { radius: 180 * scale, speed: 'medium', scale: 0.3, textScale: 0.3, orbitDuration: '12s', ballDuration: '9s' },
                  { radius: 240 * scale, speed: 'large', scale: 0.3, textScale: 0.3, orbitDuration: '16s', ballDuration: '12s' },
                  { radius: 150 * scale, speed: 'medium', scale: 0.3, textScale: 0.3, orbitDuration: '10s', ballDuration: '7s' }
                ];
                
                const config = orbitConfigs[index];
                let ballPosition, labelPosition, ballScale, textScale, shouldAnimate;
                
                if (isActive) {
                  ballPosition = centerPosition;
                  labelPosition = centerPosition;
                  ballScale = 1;
                  textScale = 1;
                  shouldAnimate = false;
                } else {
                  const angleOffsets = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
                  const angle = angleOffsets[index];
                  const orbitX = containerCenterX + Math.cos(angle) * config.radius - 84.5 * scale;
                  const orbitY = containerCenterY + Math.sin(angle) * config.radius - 84.5 * scale;
                  
                  if (activeBallIndex === -1) {
                    ballPosition = defaultPositions[index];
                    labelPosition = defaultPositions[index];
                    ballScale = 0.5;
                    textScale = 0.5;
                    shouldAnimate = true;
                  } else {
                    ballPosition = { top: `${orbitY}px`, left: `${orbitX}px` };
                    labelPosition = {
                      labelTop: `${orbitY + 71 * config.scale}px`,
                      labelLeft: `${orbitX + 32 * config.scale}px`
                    };
                    ballScale = config.scale;
                    textScale = config.textScale;
                    shouldAnimate = true;
                  }
                }
                
                return (
                  <React.Fragment key={ball.id}>
                    {shouldAnimate && (
                      <div
                        className="absolute"
                        style={{
                          top: `${containerCenterY}px`,
                          left: `${containerCenterX}px`,
                          transformOrigin: '0 0',
                          zIndex: 1,
                          animation: `orbit-${config.speed} ${config.orbitDuration} linear infinite`
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            top: `${parseInt(ballPosition.top) - containerCenterY}px`,
                            left: `${parseInt(ballPosition.left) - containerCenterX}px`,
                            transform: `scale(${ballScale})`,
                            transformOrigin: 'center center',
                            transition: 'transform 1s ease-in-out'
                          }}
                        >
                          <div
                            className="rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(121,31,240,1)_100%)]"
                            style={{
                              width: `${169 * scale}px`,
                              height: `${169 * scale}px`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className="absolute rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(121,31,240,1)_100%)] transition-all duration-700 ease-in-out"
                      style={{
                        width: `${169 * scale}px`,
                        height: `${169 * scale}px`,
                        top: ballPosition.top,
                        left: ballPosition.left,
                        zIndex: isActive ? 10 : (shouldAnimate ? 0 : 1),
                        transform: `scale(${ballScale})`,
                        transformOrigin: 'center center',
                        opacity: shouldAnimate ? 0 : 1
                      }}
                    />
                    {/* Text label that moves with the ball */}
                    <div
                      className="absolute font-['Bricolage_Grotesque',Helvetica] font-extrabold text-center tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-700 ease-in-out"
                      style={{
                        top: labelPosition.labelTop,
                        left: labelPosition.labelLeft,
                        zIndex: isActive ? 10 : (shouldAnimate ? 0 : 1),
                        color: isActive ? '#ffffff' : '#000000',
                        transform: isActive ? `translate(-50%, -50%) scale(${textScale})` : `scale(${textScale})`,
                        transformOrigin: isActive ? 'center center' : 'center center',
                        opacity: isActive ? 1 : 0,
                        fontSize: `${20 * scale}px`
                      }}
                    >
                      {ball.label.toUpperCase()}
                    </div>
                  </React.Fragment>
                );
              })}
              
              <div
                className="absolute font-['Bricolage_Grotesque',Helvetica] font-extrabold text-black text-center tracking-[0] leading-[normal] transition-opacity duration-500"
                style={{
                  top: `${containerHeight * 0.44}px`,
                  left: `${containerWidth * 0.34}px`,
                  fontSize: `${17 * scale}px`,
                  opacity: getActiveBallIndex() === -1 ? 1 : 0,
                  zIndex: 5
                }}
              >
                STRATEGIC PROPOSITION<br />
                STRATEGIC DIRECTION<br />
                BIG IDEA<br />
                KEY MESSAGE
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes orbit-small {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-large {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default OurApproach;