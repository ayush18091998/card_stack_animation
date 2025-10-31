import React from 'react';
import './App.css';
import CardStack from "./components/cardStack/CardStack";

function App() {
  return (
      // <div className="App container py-5">
          <section className="info-section">
              <div className="header-container">
                  <h2 className="header-title">
                      Introducing Speak Tutor. The world’s best language teacher.
                  </h2>
                  <p className="header-description">Speak Tutor is your very own language tutor, dedicated to helping you improve 24/7. It may surprise you with all of its unique abilities.
                  </p>
              </div>
              <CardStack/>
              <div className="footer">
                  <div className="quote-tag">
                      <div className="quote-tag-image">
                          <img
                              src="https://www.speak.com/cdn.prod.website-files.com/61a88c135006e8345b005efd/657a95e81607f9df035c474d_fwfsdsdf.webp"
                              loading="lazy" alt=""/>
                      </div>
                      <div className="quote-tag-name">Jessica Park</div>
                  </div>
                  <blockquote className="quote-text">“The first time I used Speak Tutor, I couldn’t believe it wasn’t a
                      real person. It feels like it understands my motivations at a deep level and every lesson is made
                      just for me.”
                  </blockquote>
              </div>
          </section>

      // </div>
  );
}

export default App;
