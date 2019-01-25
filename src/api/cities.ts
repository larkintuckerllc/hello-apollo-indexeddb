import citiesJson from './cities.json';

const delay = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, 1000);
  });

interface City {
  city: string;
  state: string;
}

export const loadCities = async () => {
  await delay();
  const cities = citiesJson as City[];
  // TODO: PERSIST CITIES
};
