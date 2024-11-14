import React from "react";
import "./styles/global.css";
import { useSponsors } from "./useCase/useSponsors";

function App() {
  const { sponsor } = useSponsors();

  return (
    <div className="w-full">
      <img
        className="w-full max-w-80 h-96 bg-orange-400 flex max-md:h-80"
        src={sponsor.image}
        alt="sponsor space"
      />
    </div>
  );
}

export default App;
