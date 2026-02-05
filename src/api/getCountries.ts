export const getCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=languages",
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
