import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardInterface } from "../components/types";
import axios from "axios";
import TeamScreen from "../components/TeamScreen";

const TeamPage: React.FC = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState<CardInterface | null>(null);

  useEffect(() => {
    const getTeamData = async () => {
      try {
        const response = await axios.get<CardInterface>(`/api/id/${id}`);
        setTeamData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTeamData();
  }, [id]);

  if (!teamData) return null;

  return (
    <>
      <TeamScreen
        developer={teamData.developer}
        QA={teamData.QA}
        manager={teamData.manager}
        task={teamData.task}
        teamname={teamData.teamname}
      />
    </>
  );
};

export default TeamPage;
