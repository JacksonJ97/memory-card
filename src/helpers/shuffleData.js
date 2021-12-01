const shuffleData = (data, setShuffledData) => {
  if (data === null) {
    return;
  }

  const dataCopy = [...data];

  for (let i = dataCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = dataCopy[i];
    dataCopy[i] = dataCopy[randomIndex];
    dataCopy[randomIndex] = temp;
  }

  setShuffledData(dataCopy);
};

export default shuffleData;
