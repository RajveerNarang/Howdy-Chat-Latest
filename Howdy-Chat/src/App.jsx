import { useState } from "react";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import SearchPeople from "./components/SearchPeople/SearchPeople";
import ChatCardsListing from "./components/ChatCardsListing/ChatCardsListing";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="left-side">
        <ProfileSection />
        <SearchPeople />
        <ChatCardsListing />
      </div>
    </div>
  );
}

export default App;
