import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characterName: {
          read() {
            return characterNameVar();
          },
        },
      },
    },
  },
});

export const characterNameVar = makeVar("");
