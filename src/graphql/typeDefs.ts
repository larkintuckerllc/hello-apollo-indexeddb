export default `
type City {
  id: Int!
  city: String!
  state: String!
}
type Query {
  searchCities(start: String!): [City]
}
`;
