import "./App.css";
import products from "./data";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>✨ श्री सखी साज ✨</h1>

        {/* <div className="contact-info">
          <p>📞 +91 9325189178</p>
          <p>📧 info@shreejewellery.com</p>
        </div> */}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Elegant Jewellery for Every Occasion</h2>
        <p>
          Discover our exclusive collection of Pearl and
          Traditional handmade Jewellery.
        </p>
      </section>

      {/* Products */}
      <section className="products-section">
        <h2 className="section-title">Our Collection</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="card-content">
                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <h4>{item.price}</h4>

                {/* <a
                  href={`https://wa.me/919876543210?text=Hello, I am interested in ${item.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>📱 Enquire on WhatsApp</button>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>

        <p>📞 Phone: +91 9325189178</p>

        <p>📧 Email: info@shreejewellery.com</p>

        <p>📍 Nashik, Maharashtra, India</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Shree Sakhi Saaj Jewellery Collection. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;