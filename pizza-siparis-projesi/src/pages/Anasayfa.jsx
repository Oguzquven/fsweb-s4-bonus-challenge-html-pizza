import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryNav from "../components/CategoryNav";
import PizzaCard from "../components/PizzaCard";
import Footer from "../components/Footer";

function Anasayfa() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, icon: "/assets/iteration-2/icons/1.svg", name: "YENİ! Kore" },
    {
      id: 2,
      icon: "/assets/iteration-2/icons/2.svg",
      name: "Pizza",
      active: true,
    },
    { id: 3, icon: "/assets/iteration-2/icons/3.svg", name: "Burger" },
    { id: 4, icon: "/assets/iteration-2/icons/4.svg", name: "Kızartmalar" },
    { id: 5, icon: "/assets/iteration-2/icons/5.svg", name: "Fast Food" },
    { id: 6, icon: "/assets/iteration-2/icons/6.svg", name: "Gazlı İçecekler" },
  ];

  const pizzas = [
    {
      id: 1,
      name: "Terminal Pizza",
      image: "/assets/iteration-2/pictures/food-1.png",
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      image: "/assets/iteration-2/pictures/food-2.png",
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
    {
      id: 3,
      name: "useEffect Tavuklu Burger",
      image: "/assets/iteration-2/pictures/food-3.png",
      rating: 4.9,
      reviews: 200,
      price: 60,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
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
              PIZZA, DOYURUR
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
      </header>

      {/* Category Navigation */}
      <CategoryNav categories={categories} />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card big-card">
            <div className="cta-content">
              <h2>
                Özel <br />
                Lezzetler
              </h2>
              <p>Position: Absolute Acı Pizza</p>
              <button className="cta-btn">SİPARİŞ VER</button>
            </div>
          </div>

          <div className="cta-right">
            <div className="cta-card medium-card-1">
              <div className="cta-content">
                <h3>
                  Hackathlon <br />
                  Burger Menü
                </h3>
                <button className="cta-btn">SİPARİŞ VER</button>
              </div>
            </div>
            <div className="cta-card medium-card-2">
              <div className="cta-content">
                <h3>
                  <span className="text-red">Çoooook</span> hızlı <br />
                  <span className="text-black">npm gibi kurye</span>
                </h3>
                <button className="cta-btn">SİPARİŞ VER</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <p className="section-subtitle">en çok paketlenen menüler</p>
        <h2 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <nav className="product-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${cat.active ? "active" : ""}`}
            >
              <img src={cat.icon} alt={cat.name} />
              {cat.name}
            </button>
          ))}
        </nav>

        <div className="product-grid">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Anasayfa;
