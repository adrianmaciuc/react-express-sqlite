import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CardsList from "../components/CardsList";
import { fetchDataFromAPI } from "../api/apidata";
import AddEntryForm from "../components/Form";
import { CardInterface } from "../components/types";

const HomePage: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddEntry = (newEntry: CardInterface) => {
    setCardsData([...cardsData, newEntry]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const apiData = await fetchDataFromAPI();
      setCardsData(apiData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section id="card-section">
        <div className="cs-container">
          <HeroSection />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="cs-card-group list-group">
              <CardsList cards={cardsData} />
            </ul>
          )}
          <section id="contact-984">
            <AddEntryForm onAddEntry={handleAddEntry} />
          </section>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
