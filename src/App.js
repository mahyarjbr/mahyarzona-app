import data from "./data";

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
            <div key={product._id} class="card">
              <a href={`/product/${product._id}`}>
                <img class="medium" src={product.image} alt={product.name} />
              </a>
              <div class="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div class="rating">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="price">{product.price}T</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
