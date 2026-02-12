import React from "react";
import { useNavigate } from "react-router-dom";

function Anasayfa() {
  const navigate = useNavigate();

  return (
    <div className="anasayfa">
      <div className="hero-section">
        <img
          src="/assets/iteration-1/logo.svg"
          alt="Teknolojik Yemekler"
          className="main-logo"
        />

        <div className="hero-content">
          <p className="hero-subtitle">fırsatı kaçırma</p>
          <h1>
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <button
            id="order-pizza"
            className="hero-btn"
            onClick={() => navigate("/siparis-olustur")}
          >
            ACIKTIM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Anasayfa;
