import React, { useState } from "react";
import { useCreateTeam } from "../utils/useCreateTeam";

export const BuildTeam = () => {
  const [team, setTeam] = useState<any>(() => {
    return {
      name: "",
      id: 0,
      size: 0,
      eligibility: false,
      parentLeague: "",
      parentSport: "",
      playerList: [],
    };
  });

  const teamFormHandler = () => {
    
  }

  const createTeam = () => {
    return useCreateTeam();
  }

  return (
    <div>
      <p>Build your team from the Pool </p>
      
      <form>

            

      </form>
      
      <button>Random Team</button>

      <button>Continue</button>
    </div>
  );
};
