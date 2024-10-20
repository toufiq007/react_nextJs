export const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve("Congrats, you are guessing the right answer!");
      } else {
        reject(new Error("Good try!! You are guessing the wrong answer"));
      }
    }, 3000);
  });
};
