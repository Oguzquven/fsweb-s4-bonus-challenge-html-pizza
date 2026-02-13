import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function SiparisOnay() {
  const location = useLocation();
  const siparis = location.state?.siparis;

  // Örnek veri (gerçek veri location.state'den gelecek)
  const pizzaBilgileri = siparis || {
    isim: "Position Absolute Acı Pizza",
    boyut: "L",
    hamur: "Süpper İnce",
    malzemeler: ["Pepperoni", "Sosis", "Mısır", "Ananas", "Jalepeno"],
    secimlerFiyat: 25.0,
    toplamFiyat: 110.5,
  };

  // Güvenli fiyat formatlama
  const formatFiyat = (fiyat) => {
    if (fiyat === undefined || fiyat === null) return "0.00";
    return fiyat.toFixed(2);
  };

  return (
    <div className="siparis-onay-page">
      <div className="siparis-onay-hero">
        <img
          src="/assets/iteration-1/logo.svg"
          alt="Teknolojik Yemekler"
          className="onay-logo"
        />

        <div className="onay-content">
          <p className="onay-subtitle">lezzetin yolda</p>
          <h2>SİPARİŞ ALINDI</h2>

          <div className="onay-divider"></div>

          <div className="pizza-details">
            <h3>{pizzaBilgileri.isim}</h3>
            <div className="detail-row">
              <span>Boyut:</span> <strong>{pizzaBilgileri.boyut}</strong>
            </div>
            <div className="detail-row">
              <span>Hamur:</span> <strong>{pizzaBilgileri.hamur}</strong>
            </div>
            <div className="detail-row">
              <span>Ek Malzemeler:</span>{" "}
              <strong>{pizzaBilgileri.malzemeler.join(", ")}</strong>
            </div>
          </div>

          <div className="onay-ozet-kart">
            <h4>Sipariş Toplam</h4>
            <div className="ozet-row">
              <span>Seçimler</span>
              <span>{formatFiyat(pizzaBilgileri.secimlerFiyat)}₺</span>
            </div>
            <div className="ozet-row total">
              <span>Toplam</span>
              <span>{formatFiyat(pizzaBilgileri.toplamFiyat)}₺</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SiparisOnay;
