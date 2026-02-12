import React from "react";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section footer-info">
          <img
            src="/assets/iteration-2/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
            className="footer-logo"
          />
          <div className="contact-list">
            <div className="contact-item">
              <img
                src="/assets/iteration-2/footer/icons/icon-1.png"
                alt="Konum"
              />
              <p>
                341 Londonderry Road, <br />
                İstanbul Türkiye
              </p>
            </div>
            <div className="contact-item">
              <img
                src="/assets/iteration-2/footer/icons/icon-2.png"
                alt="Email"
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="contact-item">
              <img
                src="/assets/iteration-2/footer/icons/icon-3.png"
                alt="Telefon"
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
        </div>

        <div className="footer-section footer-menu">
          <h4>Sıcak Menü</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-section footer-insta">
          <h4>Instagram</h4>
          <div className="insta-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/assets/iteration-2/footer/insta/li-${i}.png`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-container">
          <p>© 2023 Teknolojik Yemekler.</p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
