export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

export const createConnection = (serverUrl, roomId) => {
  return {
    connect: () => {
      console.log(`connected to the  ${serverUrl} and room id: ${roomId}`);
    },
    disconnect: () => {
      console.log(`disconnected from the ${serverUrl} and room id: ${roomId}`);
    },
  };
};

export function logTravelId(roomId){
  console.log(`the person travel from ${roomId}`)
}