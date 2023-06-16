"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Loader from "@components/UI/Loader";
import SimilarGames from "@components/SimilarGames/SimilarGames";
import GameAvailability from "@components/GameAvailability/GameAvailability";
import GameMetaBlock from "@components/GameMetaBlock/GameMetaBlock";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setGame } from "@redux/slices/gameSlice";

const GameDetails = ({ game }) => {
  const getMainWebsiteUrl = (websites) => {
    const mainWebsite = websites.find((website) => website.category === 1);
    return mainWebsite ? (
      <Link href={`${mainWebsite.url}`} className="underline break-all">
        {mainWebsite.url}
      </Link>
    ) : null;
  };

  const formatReleaseDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="game_content mx-auto w-full md:w-3/4 rounded-2xl shadow-xl">
      <div className="game_content-columns flex flex-wrap">
        <div className="w-full lg:w-4/6 p-4">
          <h1 className="text-4xl lg:text-7xl font-bold pb-4">{game.name}</h1>

          <div className="game_about">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="game_about-text">{game.summary}</p>
          </div>
          <div className="game_meta grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <GameMetaBlock title="Platform(s)">
              <p>
                {game.platforms
                  ? game.platforms.map((platform) => platform.name).join(", ")
                  : "N/A"}
              </p>
            </GameMetaBlock>
            <GameMetaBlock title="Average Rating">
              <p>{game.total_rating ? game.total_rating.toFixed(0) : "N/A"}</p>
            </GameMetaBlock>
            <GameMetaBlock title="Genre(s)">
              <p>
                {game.genres
                  ? game.genres.map((genre) => genre.name).join(", ")
                  : "N/A"}
              </p>
            </GameMetaBlock>
            <GameMetaBlock title="Theme(s)">
              <p>
                {game.themes
                  ? game.themes.map((theme) => theme.name).join(", ")
                  : "N/A"}
              </p>
            </GameMetaBlock>
            <GameMetaBlock title="Release Date">
              <p>
                {game.first_release_date
                  ? formatReleaseDate(game.first_release_date)
                  : "N/A"}
              </p>
            </GameMetaBlock>
            <GameMetaBlock title="Developer(s)">
              <p>
                {game.involved_companies &&
                game.involved_companies.some((company) => company.developer)
                  ? game.involved_companies
                      .filter((company) => company.developer)
                      .map((company) => company.company.name)
                      .join(", ")
                  : "N/A"}
              </p>
            </GameMetaBlock>
            <GameMetaBlock title="Publishers(s)">
              <p>
                {game.involved_companies &&
                game.involved_companies.some((company) => company.publisher)
                  ? game.involved_companies
                      .filter((company) => company.publisher)
                      .map((company) => company.company.name)
                      .join(", ")
                  : "N/A"}
              </p>
            </GameMetaBlock>
            {game.websites &&
              game.websites.find((website) => website.category === 1) && (
                <GameMetaBlock title="Website">
                  {getMainWebsiteUrl(game.websites)}
                </GameMetaBlock>
              )}
          </div>
        </div>
        <div className="w-full lg:w-2/6 p-4">
          <div className="game_media">
            <div className="game_media-images grid grid-cols-2 gap-4">
              {game.screenshots &&
                game.screenshots.slice(0, 5).map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`game_media-image bg-black rounded-lg ${
                      index === 0 && "col-span-2"
                    }`}
                  >
                    <Image
                      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${screenshot.image_id}.jpg`}
                      alt={game.name}
                      width={screenshot.width}
                      height={screenshot.height}
                      className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                  </div>
                ))}
            </div>
            <Link
              href={`/games/${game.id}/new-review`}
              className="button duration-150 bg-white hover:opacity-80 text-black mt-8"
            >
              Review This Game
            </Link>
            {game.external_games &&
              game.external_games.some(
                (website) => website.category === 1 || website.category === 36
              ) && <GameAvailability game={game} />}
          </div>
        </div>
        <div className="similar_games w-full p-4">
          {game.similar_games && game.similar_games.length > 0 && (
            <>
              <h2 className="similar_games-title text-xl font-medium text-white/60">
                Similar Games to {game.name}
              </h2>
              <SimilarGames game={game} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const GameArt = ({ game }) => {
  const getCoverImageUrl = (cover) => {
    return cover
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${cover.image_id}.jpg`
      : "/img/placeholder.png";
  };

  return (
    <div className="page_art">
      <div className="art-wrapper">
        <div
          className="art blur-sm md:blur"
          style={{
            height: "80vh",
            backgroundColor: "transparent",
            backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0), rgb(21,21,21)), linear-gradient(to bottom, rgba(21,21,21,0.8), rgba(21,21,21,0.5)), url('${getCoverImageUrl(
              game.cover
            )}')`,
            zIndex: 1,
            transition: "background-image 0.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

const GamePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [game, setLocalGame] = useState(null);
  const reduxGame = useSelector((store) => store.game);

  useEffect(() => {
    if (
      params.id &&
      (!reduxGame.game || reduxGame.game.id.toString() !== params.id)
    ) {
      const fetchGameDetails = async () => {
        const response = await fetch(`/api/games/${params.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        console.log("Making API call");

        setLocalGame(data[0]);
        dispatch(setGame(data[0]));
      };

      fetchGameDetails();
    } else if (reduxGame.game && reduxGame.game.id.toString() === params.id) {
      setLocalGame(reduxGame.game);
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    console.log("GameDetails: ", reduxGame.game);
  }, [reduxGame]);

  return (
    <>
      <div className="page_content mb-4">
        {reduxGame &&
        reduxGame.game &&
        reduxGame.game.id.toString() === params.id ? (
          <GameDetails game={reduxGame.game} />
        ) : (
          <Loader />
        )}
      </div>
      {reduxGame &&
      reduxGame.game &&
      reduxGame.game.id.toString() === params.id ? (
        <GameArt game={reduxGame.game} />
      ) : null}
    </>
  );
};

export default GamePage;
