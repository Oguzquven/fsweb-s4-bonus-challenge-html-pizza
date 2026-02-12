describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Anasayfadan sipariş sayfasına gidebilmeli", () => {
    cy.get("#order-pizza").click();
    cy.url().should("include", "/siparis-olustur");
  });

  it("İsim alanı 2 karakterden az olduğunda hata vermeli", () => {
    cy.visit("http://localhost:3000/siparis-olustur");
    cy.get('input[name="isim"]').type("A");
    cy.contains("İsim en az 2 karakter olmalıdır").should("be.visible");
  });

  it("Pizza boyutu seçilebilmeli", () => {
    cy.visit("http://localhost:3000/siparis-olustur");
    cy.get('input[value="Küçük"]').check();
    cy.get('input[value="Küçük"]').should("be.checked");
  });

  it("Hamur kalınlığı dropdown çalışmalı", () => {
    cy.visit("http://localhost:3000/siparis-olustur");
    cy.get("#size-dropdown").select("İnce");
    cy.get("#size-dropdown").should("have.value", "İnce");
  });

  it("En az 4 malzeme seçilmeli", () => {
    cy.visit("http://localhost:3000/siparis-olustur");
    cy.get('input[name="isim"]').type("Test User");
    cy.get('input[value="Küçük"]').check();
    cy.get("#size-dropdown").select("İnce");

    // 3 malzeme seç
    cy.get('input[value="Pepperoni"]').check();
    cy.get('input[value="Sosis"]').check();
    cy.get('input[value="Mısır"]').check();

    // Buton disabled olmalı
    cy.get(".submit-btn").should("be.disabled");

    // 4. malzemeyi seç
    cy.get('input[value="Soğan"]').check();

    // Buton enabled olmalı
    cy.get(".submit-btn").should("not.be.disabled");
  });

  it("Form doldurulup sipariş verilebilmeli", () => {
    cy.visit("http://localhost:3000/siparis-olustur");

    // İsim
    cy.get('input[name="isim"]').type("Oğuz Güven");

    // Boyut
    cy.get('input[value="Orta"]').check();

    // Hamur
    cy.get("#size-dropdown").select("Normal");

    // Malzemeler (4 tane)
    cy.get('input[value="Pepperoni"]').check();
    cy.get('input[value="Tavuk Izgara"]').check();
    cy.get('input[value="Soğan"]').check();
    cy.get('input[value="Jalapeno"]').check();

    // Sipariş ver
    cy.get(".submit-btn").click();

    // Onay sayfasına yönlendirilmeli
    cy.url().should("include", "/siparis-onay");
    cy.contains("TEBRİKLER").should("be.visible");
  });
});
