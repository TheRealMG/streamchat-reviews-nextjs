import React from "react";
import Image from "next/image";
import Card from "../Card";

const SimilarGames = ({ game }) => {
  // Helper function to get the developer name
  const getDeveloperName = (game) => {
    const developerCompanies = game.involved_companies.filter(
      (company) => company.developer
    );
    if (developerCompanies.length === 0) {
      return "N/A";
    }
    return developerCompanies.map((company) => company.company.name).join(", ");
  };

  // Helper function to get the publisher name
  const getPublisherName = (game) => {
    const publisherCompanies = game.involved_companies.filter(
      (company) => company.publisher
    );
    if (publisherCompanies.length === 0) {
      return "N/A";
    }
    return publisherCompanies.map((company) => company.company.name).join(", ");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 pt-6 pb-6">
      {game.similar_games.map((game) => (
        <Card type="game" id={game.id} key={game.id}>
          <div className="rounded-t-xl overflow-hidden w-full aspect-[3/4] bg-black">
            <Image
              src={`https:${game.cover.url.replace(
                "t_thumb",
                "t_cover_big_2x"
              )}`}
              alt={game.name}
              width={game.cover.width}
              height={game.cover.height}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="card-content">
            <h2 className="card-title">{game.name}</h2>
            <p className="card-label">
              Developer:{" "}
              <span className="card-span">{game.involved_companies
                  ? game.involved_companies
                      .filter((company) => company.developer)
                      .map((company) => company.company.name)
                      .join(", ")
                  : "N/A"}</span>
            </p>
            <p className="card-label">
              Publisher:{" "}
              <span className="card-span">{game.involved_companies
                  ? game.involved_companies
                      .filter((company) => company.publisher)
                      .map((company) => company.company.name)
                      .join(", ")
                  : "N/A"}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SimilarGames;
