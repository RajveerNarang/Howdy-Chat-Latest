import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="left-side">
        <ProfileSection />
        <SearchPeople />
        <ChartCardsListing />
      </div>
    </div>
  );
}

export default App;