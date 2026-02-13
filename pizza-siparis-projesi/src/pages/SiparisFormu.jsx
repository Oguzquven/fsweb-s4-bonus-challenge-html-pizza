import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function SiparisFormu() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    siparisNotu: "",
    adet: 1,
  });

  const [errors, setErrors] = useState({});

  const malzemelerListesi = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMalzemeChange = (e) => {
    const { value, checked } = e.target;
    let yeniMalzemeler = [...formData.malzemeler];

    if (checked) {
      if (yeniMalzemeler.length < 10) {
        yeniMalzemeler.push(value);
      }
    } else {
      yeniMalzemeler = yeniMalzemeler.filter((m) => m !== value);
    }

    setFormData({ ...formData, malzemeler: yeniMalzemeler });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.boyut) {
      alert("Pizza boyutu seçmelisiniz");
      return;
    }

    if (!formData.hamur) {
      alert("Hamur kalınlığı seçmelisiniz");
      return;
    }

    if (formData.malzemeler.length < 4) {
      alert("En az 4 malzeme seçmelisiniz");
      return;
    }

    if (formData.malzemeler.length > 10) {
      alert("En fazla 10 malzeme seçebilirsiniz");
      return;
    }

    try {
      const response = await axios.post(
        "https://reqres.in/api/workintech  ",
        formData,
      );
      console.log("Sipariş başarılı:", response.data);
    } catch (error) {
      console.log("API hatası:", error.message);
    }

    navigate("/siparis-onay", { state: { siparis: formData } });
  };

  const malzemeFiyat = formData.malzemeler.length * 5;
  const toplamFiyat = (85.5 + malzemeFiyat) * formData.adet;
  const isFormValid =
    formData.boyut &&
    formData.hamur &&
    formData.malzemeler.length >= 4 &&
    formData.malzemeler.length <= 10;

  return (
    <div className="siparis-page">
      {/* HEADER - Kırmızı */}
      <header className="siparis-header">
        <h1>Teknolojik Yemekler</h1>
      </header>

      {/* BEJ ARKA PLANLI ÜST BÖLÜM - Pizza görseli + Bilgiler */}
      <div className="bej-section">
        <div className="pizza-hero-section">
          <img
            src="/assets/iteration-2/pictures/form-banner.png"
            alt="Position Absolute Acı Pizza"
            className="pizza-main-image"
          />
        </div>

        <div className="info-container">
          <div className="breadcrumb-small">
            <span>Anasayfa - </span>
            <span>Sipariş Oluştur</span>
          </div>

          <h2 className="pizza-title">Position Absolute Acı Pizza</h2>

          <div className="pizza-meta">
            <span className="pizza-price">85.50₺</span>
            <div className="pizza-rating">
              <span className="rating-score">4.9</span>
              <span>(200)</span>
            </div>
          </div>

          <p className="pizza-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </div>

      {/* BEYAZ ARKA PLANLI FORM BÖLÜMÜ */}
      <div className="form-section">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="boyut-hamur-container">
              <div className="boyut-section">
                <label>
                  Boyut Seç <span className="required">*</span>
                </label>
                <div className="radio-group">
                  {["Küçük", "Orta", "Büyük"].map((boyut, index) => {
                    const labels = ["S", "M", "L"];
                    const isSelected = formData.boyut === boyut;
                    return (
                      <label
                        key={boyut}
                        className={`radio-label ${isSelected ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="boyut"
                          value={boyut}
                          onChange={handleInputChange}
                          checked={isSelected}
                        />
                        <span>{labels[index]}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="hamur-section">
                <label>
                  Hamur Seç <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    name="hamur"
                    value={formData.hamur}
                    onChange={handleInputChange}
                  >
                    <option value="">—Hamur Kalınlığı Seç—</option>
                    <option value="İnce">İnce</option>
                    <option value="Normal">Normal</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="ek-malzemeler-header">
                <h3>Ek Malzemeler</h3>
                <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              </div>
              <div className="malzeme-grid">
                {malzemelerListesi.map((malzeme) => {
                  const isSelected = formData.malzemeler.includes(malzeme);
                  return (
                    <label
                      key={malzeme}
                      className={`checkbox-label ${isSelected ? "selected" : ""}`}
                    >
                      <input
                        type="checkbox"
                        name={malzeme}
                        value={malzeme}
                        checked={isSelected}
                        onChange={handleMalzemeChange}
                        disabled={
                          !isSelected && formData.malzemeler.length >= 10
                        }
                      />
                      <span className="checkbox-custom"></span>
                      {malzeme}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="form-group not-section">
              <label>Sipariş Notu</label>
              <textarea
                name="siparisNotu"
                value={formData.siparisNotu}
                onChange={handleInputChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                rows="3"
              />
            </div>

            <div className="siparis-bottom-section">
              <div className="adet-section">
                <div className="adet-controls">
                  <button
                    type="button"
                    className="adet-btn"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        adet: Math.max(1, formData.adet - 1),
                      })
                    }
                  >
                    -
                  </button>
                  <span className="adet-display">{formData.adet}</span>
                  <button
                    type="button"
                    className="adet-btn"
                    onClick={() =>
                      setFormData({ ...formData, adet: formData.adet + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="siparis-ozet">
                <h3>Sipariş Toplamı</h3>
                <div className="ozet-content">
                  <div className="ozet-row">
                    <span>Seçimler</span>
                    <span>{(malzemeFiyat * formData.adet).toFixed(2)}₺</span>
                  </div>
                  <div className="ozet-row total">
                    <span>Toplam</span>
                    <span>{toplamFiyat.toFixed(2)}₺</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isFormValid}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SiparisFormu;
