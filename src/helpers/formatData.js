import capitalizeFirstLetter from "./capitalizeFirstLetter";

const formatData = (data) => {
  const formattedData = data.map((element, index) => ({
    name: capitalizeFirstLetter(element.name),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    id: index + 1,
  }));

  return formattedData;
};

export default formatData;
