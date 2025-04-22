import React, {useState} from "react";
import InternetPioneers from "../src/InternetPioneers";
import Pioneer from "../src/Pioneer";

const App = () => {
  const [pioneers, setPioneers] = useState([
    {
      id: 1,
      name: "Elizabeth J. Feinler",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg",
      viewed: false,
      bio: "She pioneered and managed first the ARPANET, and then the Defense Data Network (DDN), network information centers (NIC) under contract to the Department of Defense (DoD)."
    },
    {
      id: 2,
      name: "Tim Berners Lee",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg",
      viewed: false,
      bio: "He invented the World Wide Web (WWW)."
    },
    {
      id: 3,
      name: "Ray Tomlinson",
      image:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg",
      viewed: false,
      bio: "He invented the email on the ARPANET system, the predecessor to the Internet."
    },
  ]);

  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handleSelectPioneer = (id) => {
    const updated = pioneers.map((pioneer) =>
      pioneer.id === id ? { ...pioneer, viewed:true} : pioneer
  );
  setPioneers(updated);

  const selected = updated.find((pioneer) => pioneer.id === id);
  setSelectedPioneer(selected);
  };

  const handleGoBack = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="App">
      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} goBack={handleGoBack} />
      ) : (
        <InternetPioneers pioneers={pioneers} onPioneerClick = {handleSelectPioneer} />
      )}
    </div>
  );
};

export default App;