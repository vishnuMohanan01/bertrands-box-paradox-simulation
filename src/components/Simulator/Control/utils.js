import { COIN_COMBINATIONS, GG_BOX, SS_BOX, GOLD_COIN } from "../constants";

export const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

export const getRandomBoxAndCoin = () => {
  const randomBox = getRandomElement(COIN_COMBINATIONS);
  return [ randomBox, getRandomElement(randomBox) ];
};

export const runSimulation = ({ numberOfSimulations, setResults }) => {
  new Promise((resolve, _) => {
    const coinDraws = {
      gold: 0,
      silver: 0,
    };
    const coinRights = {
      gold: 0,
      silver: 0,
    };
    for (let i = 0; i < numberOfSimulations; i++) {
      const [selectedBox, selectedCoin] = getRandomBoxAndCoin();

      if (JSON.stringify(selectedCoin) === JSON.stringify(GOLD_COIN)) {
        ++coinDraws.gold;
        if (JSON.stringify(selectedBox) === JSON.stringify(GG_BOX)) ++coinRights.gold;
      }
      else {
        ++coinDraws.silver;
        if (JSON.stringify(selectedBox) === JSON.stringify(SS_BOX)) ++coinRights.silver;
      }
    }
    setResults({
      coinDraws,
      coinRights,
      probabilities: {
        gold: coinRights.gold ? coinRights.gold/coinDraws.gold : coinRights.gold ,
        silver: coinRights.silver ? coinRights.silver/coinDraws.silver : coinRights.silver,
        totalAccuracy: (coinRights.gold + coinRights.silver)/numberOfSimulations,
      }
    });
    return resolve();
  });
};
