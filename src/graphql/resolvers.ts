import { searchCities } from '../api/cities';

export default {
  Query: {
    searchCities: async (_: any, { starts }: any, { cache }: any) => {
      const cities = await searchCities(starts);
      return cities;
    },
  },
};
