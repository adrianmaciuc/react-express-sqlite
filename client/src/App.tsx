import "./App.css";
import HeroSection from "./components/HeroSection";
import CardsList from "./components/CardsList";
import { useEffect, useState } from "react";
import axios from "axios";
// import { dataStubbed } from "./stubbedData/api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api");
        if (response.data.length === 0) {
          Error("No data fetched from api");
        }
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="card-section">
        <div className="cs-container">
          <HeroSection />
          <ul className="cs-card-group list-group">
            <CardsList cards={data} />
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
