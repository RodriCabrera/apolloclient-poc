import { NetworkStatus, useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "wouter";
import { GetCharacterQuery } from "../../__generated__/graphql";
import { GET_CHARACTER } from "../../operations/queries/getCharacter";
import { PageLayout } from "../../ui/layout/PageLayout";
import { Navigation } from "../../ui/navigation/Navigation";
import { characterNameVar } from "../../cache";

export const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCharacterName, setSearchCharacterName] = useState(
    characterNameVar()
  );

  const { loading, error, data, refetch, networkStatus } =
    useQuery<GetCharacterQuery>(GET_CHARACTER, {
      variables: {
        characterName: characterNameVar(),
        page: currentPage,
        notifyOnNetworkStatusChange: true,
      },
    });

  const handleCharacterNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCharacterName(e.target.value);
  };

  if (loading || networkStatus === NetworkStatus.refetch) {
    return <p>Loading...</p>;
  }
  if (error) return <p>Error : {error.message}</p>;

  const isEmpty = data?.characters?.results?.length === 0;

  return (
    <PageLayout title="Characters">
      <div className="flex flex-col gap-6">
        <Link to="/">Go Home</Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            characterNameVar(searchCharacterName);
            refetch({ characterName: characterNameVar() });
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={searchCharacterName}
            onChange={handleCharacterNameChange}
            placeholder="Enter character name"
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </form>

        {isEmpty ? (
          <p>No character found</p>
        ) : (
          <ul className="grid gap-2 md:grid-cols-3">
            {data?.characters?.results?.map((character) => (
              <li key={character?.id} className="flex gap-2">
                <img
                  src={character?.image ?? ""}
                  alt={character?.name ?? ""}
                  className="h-8 rounded-full"
                />
                {character?.name}
              </li>
            ))}
          </ul>
        )}

        <Navigation
          currentPage={currentPage}
          count={data?.characters?.info?.count}
          goToNextPage={() => {
            setCurrentPage((prevState) => prevState + 1);
          }}
          goToPrevPage={() => {
            if (currentPage === 1) return;
            setCurrentPage((prevState) => prevState - 1);
          }}
        />
      </div>
    </PageLayout>
  );
};
