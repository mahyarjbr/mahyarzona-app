import data from "./data";
import Products from "./Components/Products";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="index.html" className="brand">
            mahyarzona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
