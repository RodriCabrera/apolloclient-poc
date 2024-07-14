import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetCharacter($characterName: String!, $page: Int = 1) {
    characters(page: $page, filter: { name: $characterName }) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        species
        type
        gender
        image
      }
    }
  }
`;
