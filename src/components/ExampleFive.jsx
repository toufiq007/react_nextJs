import {  useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../utils/utils";

const ExampleFive = () => {
  const [placeCard, setPlaceCard] = useState();
  //   const [isGameOver, setIsGameOver] = useState(false);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(0);

  const isGameOver = round > 5;

  // this type of useEffect chain should be avoid
  //   useEffect(() => {
  //     if (placeCard != null && placeCard.gold) {
  //       setGoldCardCount(goldCardCount + 1);
  //     }
  //   }, [placeCard]);

  //   useEffect(() => {
  //     if (goldCardCount >= 3) {
  //       setRound(round + 1);
  //     }
  //   }, [goldCardCount]);

  //   useEffect(() => {
  //     if (round > 4) {
  //       setIsGameOver(true);
  //       setGoldCardCount(0);
  //       setRound(0);
  //     }
  //   }, [round]);


  // good code 
  /// handle state during rendering
  const handlePlaceCard = (nextCard) => {
    if (isGameOver) {
      alert("your game is over!!");
    } else {
      setPlaceCard(nextCard);
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert("good game");
        }
      }
    }
  };
  return (
    <div>
      <h2>gold game</h2>
      <button
        onClick={() =>
          handlePlaceCard({
            id: getRandomInteger(1, 100),
            gold: getRandomBoolean(),
          })
        }
      >
        Place random card
      </button>

      <div>
        <h2>results</h2>
        <div
          style={{
            background: "#ededed",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              width: "120px",
              background: "crimson",
              display: "inline-block",
              padding: "10px",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Gold card:{goldCardCount}
          </span>
          <span
            style={{
              width: "120px",
              background: "cyan",
              display: "inline-block",
              padding: "10px",
              color: "#000",
              borderRadius: "20px",
              marginLeft: "20px",
            }}
          >
            Round:{round}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExampleFive;
