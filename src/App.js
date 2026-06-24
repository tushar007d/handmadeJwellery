import "./App.css";
import products from "./data";

function App() {
  return (
    <div className="container">
      <h1>My Jewellery Collection</h1>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>{item.description}</p>

            <h3>{item.price}</h3>

            <a
              href={`https://wa.me/91XXXXXXXXXX?text=I am interested in ${item.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Enquire on WhatsApp</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;