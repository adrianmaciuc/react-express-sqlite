import "./App.css";
import HeroSection from "./components/HeroSection";
import CardsList from "./components/CardsList";
import { useEffect, useState } from "react";
import axios from "axios";
import AddEntryForm from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api");
        setData(response.data);
        setIsLoading(false);
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
          <section id="contact-984">
            <AddEntryForm />
          </section>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="cs-card-group list-group">
              <CardsList cards={data} />
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
