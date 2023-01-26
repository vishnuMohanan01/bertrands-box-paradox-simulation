import { COIN_COMBINATIONS } from "../constants";

export const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

export const getRandomCoin = () => getRandomElement(getRandomElement(COIN_COMBINATIONS))

export const pickACoin = ({ setIsLoading, setPickedCoin }) => {
  setIsLoading(true);
  setTimeout(() => {
    setPickedCoin(getRandomCoin());
    setIsLoading(false);
  }, 2000);
};

export const runSimulation = ({ coin, numberOfSimulations, setProbabilityValue }) => {
  new Promise((resolve, reject) => {
    let numberOfTimesCoinPicked = 0;
    for (let i = 0; i < numberOfSimulations; i++) {
      if (getRandomCoin() === coin) numberOfTimesCoinPicked++;
    }
    setProbabilityValue(numberOfTimesCoinPicked/numberOfSimulations);
    return resolve();
  });
};
