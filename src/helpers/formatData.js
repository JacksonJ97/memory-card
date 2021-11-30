const formatData = (data) => {
  const formattedData = data.map((element, index) => ({
    name: element.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
  }));
  return formattedData;
};

export default formatData;
