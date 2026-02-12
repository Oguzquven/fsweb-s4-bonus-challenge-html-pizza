import React from "react";
import { useLocation } from "react-router-dom";

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
    </div>
  );
}

export default SiparisOnay;
