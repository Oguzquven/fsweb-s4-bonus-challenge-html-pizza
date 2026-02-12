import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function SiparisFormu() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    isim: "",
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

    if (name === "isim") {
      if (value.length >= 2) {
        setErrors({ ...errors, isim: "" });
      } else {
        setErrors({ ...errors, isim: "İsim en az 2 karakter olmalıdır" });
      }
    }
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

    if (formData.isim.length < 2) {
      alert("İsim en az 2 karakter olmalıdır");
      return;
    }

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

    // API'ye POST isteği
    try {
      const response = await axios.post(
        "https://reqres.in/api/workintech",
        formData,
      );
      console.log("Sipariş başarılı:", response.data);
    } catch (error) {
      console.log("API hatası:", error.message);
    }

    // Hata olsa da sipariş onay sayfasına git
    navigate("/siparis-onay", { state: { siparis: formData } });
  };

  const malzemeFiyat = formData.malzemeler.length * 5;
  const toplamFiyat = (85.5 + malzemeFiyat) * formData.adet;
  const isFormValid =
    formData.isim.length >= 2 &&
    formData.boyut &&
    formData.hamur &&
    formData.malzemeler.length >= 4 &&
    formData.malzemeler.length <= 10;

  return (
    <div className="siparis-formu">
      <header className="siparis-header">
        <div className="header-content">
          <img
            src="/assets/iteration-1/logo.svg"
            alt="Teknolojik Yemekler"
            className="header-logo"
          />
          <div className="breadcrumb">
            <span>Anasayfa - </span>
            <span style={{ fontWeight: "bold" }}>Sipariş Oluştur</span>
          </div>
        </div>
      </header>

      <div className="siparis-container">
        {/* Pizza Image */}
        <div className="pizza-image-container">
          <img
            src="/assets/iteration-2/pictures/form-banner.png"
            alt="Position Absolute Acı Pizza"
            className="pizza-main-image"
          />
        </div>

        {/* Pizza Info Box */}
        <div className="pizza-info-box">
          <div className="breadcrumb-small">
            <span>Anasayfa - </span>
            <span style={{ fontWeight: "bold" }}>Sipariş Oluştur</span>
          </div>

          <h2>Position Absolute Acı Pizza</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <p style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
              85.50₺
            </p>
            <div style={{ display: "flex", gap: "10px", color: "#5F5F5F" }}>
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>

          <p style={{ color: "#5F5F5F", margin: 0, lineHeight: "1.6" }}>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* İsim - EN BAŞTA */}
          <div className="form-group">
            <label>İsim *</label>
            <input
              type="text"
              name="isim"
              value={formData.isim}
              onChange={handleInputChange}
              placeholder="Adınızı girin"
            />
            {errors.isim && <p className="error-message">{errors.isim}</p>}
          </div>

          {/* Boyut ve Hamur */}
          <div className="boyut-hamur-container">
            <div className="form-group">
              <label>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="boyut"
                    value="Küçük"
                    onChange={handleInputChange}
                    checked={formData.boyut === "Küçük"}
                  />
                  <span className="radio-text">S</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="boyut"
                    value="Orta"
                    onChange={handleInputChange}
                    checked={formData.boyut === "Orta"}
                  />
                  <span className="radio-text">M</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="boyut"
                    value="Büyük"
                    onChange={handleInputChange}
                    checked={formData.boyut === "Büyük"}
                  />
                  <span className="radio-text">L</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>
                Hamur Seç <span style={{ color: "red" }}>*</span>
              </label>
              <select
                id="size-dropdown"
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

          {/* Ek Malzemeler */}
          <div className="form-group">
            <label>Ek Malzemeler</label>
            <p
              style={{
                fontSize: "14px",
                color: "#5F5F5F",
                marginBottom: "10px",
              }}
            >
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="malzeme-grid">
              {malzemelerListesi.map((malzeme) => (
                <label key={malzeme} className="checkbox-label">
                  <input
                    type="checkbox"
                    name={malzeme}
                    value={malzeme}
                    checked={formData.malzemeler.includes(malzeme)}
                    onChange={handleMalzemeChange}
                    disabled={
                      !formData.malzemeler.includes(malzeme) &&
                      formData.malzemeler.length >= 10
                    }
                  />
                  <span className="checkbox-custom"></span>
                  {malzeme}
                </label>
              ))}
            </div>
          </div>

          {/* Sipariş Notu */}
          <div className="form-group">
            <label>Sipariş Notu</label>
            <textarea
              name="siparisNotu"
              value={formData.siparisNotu}
              onChange={handleInputChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              rows="3"
            />
          </div>

          {/* Adet ve Sipariş Özeti - Yan Yana */}
          <div
            className="siparis-bottom-section"
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              marginTop: "30px",
            }}
          >
            {/* Sol taraf - Adet */}
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
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  minWidth: "30px",
                  textAlign: "center",
                }}
              >
                {formData.adet}
              </span>
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

            {/* Sağ taraf - Sipariş Özeti ve Buton */}
            <div style={{ flex: 1 }}>
              <div className="siparis-ozet">
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  Sipariş Toplamı
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ color: "#5F5F5F" }}>Seçimler</span>
                  <span style={{ fontWeight: "600" }}>
                    {(malzemeFiyat * formData.adet).toFixed(2)}₺
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#CE2829",
                    }}
                  >
                    Toplam
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#CE2829",
                    }}
                  >
                    {toplamFiyat.toFixed(2)}₺
                  </span>
                </div>

                {/* Buton sipariş özeti içinde */}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!isFormValid}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SiparisFormu;
