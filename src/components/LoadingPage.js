import React, { useEffect, useRef } from 'react';

const facts = [
  "The first programmer was a woman named Ada Lovelace",
  "JavaScript was created in just 10 days",
  "The first computer bug was an actual bug",
  "The first known computer was the Antikythera Mechanism, a device created by ancient Greeks around 100 BC to predict astronomical events",
  "The first computer mouse was invented by Doug Engelbart in around 1964 and was made of wood",
  "The first computer virus was created in 1983",
  "The first hard disk drive was created in 1979 and could hold only 5MB of data",
  "C was created to develop an operating system (UNIX) on a PDP-7 which had only 8K memory",
  "The most costly software error was the explosion of the Ariane 5 rocket in 1996, caused by an integer overflow. This accident cost more than $370 million",
  "The first computer was almost 2.5 meters high and weighed nearly 30,000kg",
  "Python is named after the British comedy group Monty Python",
  "The first computer game was created in 1961, called Spacewar",
  "Fortran is the oldest programming language still in use today",
  "The term algorithm comes from the name of a Persian mathematician, Al-Khwarizmi",
  "The world's first domain name was registered as sybolics.com in 1985",
  "The first computer to defeat a world chess champion was Deep Blue in 1997",
  "The first computer to defeat a Go world champion was AlphaGo in 2016",
  
];

function LoadingPage() {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * facts.length);
  
      const elts = {
        text1: text1Ref.current,
        text2: text2Ref.current,
      };
  
      const morphTime = 3; 
      let morph = 0;
      let lastTime = 0;
  
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
  
      function setMorph(fraction) {
        const easedFraction = easeInOutQuad(fraction);
        const maxBlur = 2;
  
        elts.text1.style.filter = `blur(${Math.min(maxBlur * (1 - easedFraction), maxBlur)}px)`;
        elts.text1.style.opacity = `${(1 - easedFraction) * 100}%`;
  
        elts.text2.style.filter = `blur(${Math.min(maxBlur * easedFraction, maxBlur)}px)`;
        elts.text2.style.opacity = `${easedFraction * 100}%`;
      }
  
      let animationFrameId;
  
      function animate(currentTime) {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;
        const morphRate = 0.5; 
        morph += deltaTime * morphRate;
  
        if (morph >= morphTime) {
          cancelAnimationFrame(animationFrameId); 
          elts.text2.style.filter = `blur(0px)`;
          elts.text2.style.opacity = `100%`;
          return; 
        }
  
        setMorph(morph / morphTime);
        animationFrameId = requestAnimationFrame(animate); 
      }
  
      elts.text1.textContent = "Did you know?";
      elts.text2.textContent = facts[randomIndex];
      animationFrameId = requestAnimationFrame(animate); 
  
    }, []);

  return (
    <div style={{ margin: "0px" }}>
      <div id="container" style={{
        position: 'absolute',
        margin: 'auto',
        width: '100vw',
        height: '120vh',
        top: 0,
        bottom: 0,
        filter: 'url(#threshold) blur(0.6px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <span id="text1" ref={text1Ref} style={{
          position: 'absolute',
          width: '100%',
          display: 'inline-block',
          fontFamily: 'Arial',
          fontSize: '4.5em',
          textAlign: 'center',
          margin: '0.5em',
          color: 'black',
        }}></span>
        <span id="text2" ref={text2Ref} style={{
          position: 'absolute',
          width: '100%',
          display: 'inline-block',
          fontFamily: '"Raleway", sans-serif',
          fontSize: '4.5em',
          textAlign: 'center',
          margin: '0.5em',
          color: 'black',
        }}></span>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default LoadingPage;
