import { Link } from "wouter";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to GraphQL POC</h1>
      <p className="text-lg text-center mb-6">
        This is a proof of concept of of Apollo Client.
      </p>
      <hr className="my-8 w-full border-t-2 border-gray-300" />
      <p className="text-lg text-center mb-6">
        Explore the vast universe of Rick and Morty. Dive into detailed
        information about characters, episodes, and locations from the show.
      </p>
      <nav className="flex flex-col items-center space-y-4">
        <Link href="/characters">Search Rick and Morty characters</Link>
        <Link href="/episodes">Explore Episodes</Link>
        <Link href="/locations">Discover Locations</Link>
      </nav>
    </div>
  );
};
