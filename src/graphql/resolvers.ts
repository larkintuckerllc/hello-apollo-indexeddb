import { searchCities } from '../api/cities';

export default {
  Query: {
    searchCities: async (_: any, { starts }: { starts: string }) => {
      const cities = await searchCities(starts);
      return cities;
    },
  },
};
