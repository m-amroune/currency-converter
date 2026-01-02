import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <div className="modal">
          <h1>Currency Converter</h1>
          <label>USD to EUR Conversion</label>
          <input type="number" />
          <label>Start Currency :</label>
          <select>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
          <label>Target Currency :</label>
          <select>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
          <p>Converted Amount : </p>
        </div>
      </div>
    </>
  );
}

export default App;
