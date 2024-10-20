import { useState } from "react";
import { initialTravelPlan } from "../data/data";
import PlaceTree from "./PlanTree";

const Travel = () => {
  const [plans, setPlans] = useState(initialTravelPlan);

  const planPlaces = plans.childPlaces;

  return (
    <div>
      <h2>Your places</h2>
      <ol>
        {planPlaces.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
