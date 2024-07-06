const axios = require("axios");

export async function fetchCars() {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "x-rapidapi-key": "5dde110088msh19900a44b4bf838p1708e2jsnf7608eb4875e",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
