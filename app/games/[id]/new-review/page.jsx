"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Form from "@components/Form";
import Tiptap from "@components/Tiptap/Tiptap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setGame } from "@redux/slices/gameSlice";

const NewGameReview = () => {
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
      <div className="page_content">
        {reduxGame &&
        reduxGame.game &&
        reduxGame.game.id.toString() === params.id ? (
          <div className="game_content mx-auto w-full md:w-3/4 rounded-2xl shadow-xl p-4">
            <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold pb-4">{reduxGame.game.name}</h1>
            <div>
              <h2 className="text-2xl font-bold mb-2">Review Text</h2>
              <Tiptap />
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
      <div className="page_art">
        <div className="art-wrapper">
          {reduxGame &&
          reduxGame.game &&
          reduxGame.game.id.toString() === params.id ? (
            <div
              className="art"
              style={{
                height: "80vh",
                backgroundColor: "transparent",
                backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0), rgb(21,21,21)), linear-gradient(to bottom, rgba(21,21,21,0.8), rgba(21,21,21,0.5)), url('https:${reduxGame.game.cover.url.replace(
                  "t_thumb",
                  "t_cover_big_2x"
                )}')`,
                zIndex: 1,
                filter: "blur(10px)",
                transition: "background-image 0.3s ease-in-out",
              }}
            ></div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default NewGameReview;
