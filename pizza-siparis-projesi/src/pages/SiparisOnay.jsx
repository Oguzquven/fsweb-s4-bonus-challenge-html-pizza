import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function SiparisOnay() {
  const location = useLocation();
  const siparis = location.state?.siparis;

  return (
    <div className="siparis-onay">
      <img
        src="/assets/iteration-1/logo.svg"
        alt="Teknolojik Yemekler"
        className="onay-logo"
      />

      <div className="onay-content">
        <h2>TEBRİKLER! SİPARİŞİNİZ ALINDI!</h2>
      </div>
      <Footer />
    </div>
  );
}

export default SiparisOnay;
