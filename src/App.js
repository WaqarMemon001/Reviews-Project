import "./App.css";
import Reviews from "./Reviews";

function App() {
  return (
    <main>
      <secion className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </secion>
    </main>
  );
}

export default App;
