import Dexie from 'dexie';
import citiesJson from './cities.json';

const delay = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, 1000);
  });

export interface City {
  id: number;
  city: string;
  state: string;
}

const db = new Dexie('MyAppDatabase');
db.version(1).stores({
  cities: 'id, city, state',
});

export const loadCities = async () => {
  await db.open();
  await db.table('cities').clear();
  await delay();
  const cities = citiesJson.map((o, i) => ({
    id: i,
    ...o,
  })) as City[];
  await db.table('cities').bulkAdd(cities);
};

export const searchCities = async (starts: string) => {
  const results = await db
    .table('cities')
    .where('city')
    .startsWithIgnoreCase(starts)
    .toArray();
  return results as City[];
};
