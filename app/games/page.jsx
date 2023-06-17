"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Card from "@components/Card";
import Loader from "@components/UI/Loader";

import { useDispatch, useSelector } from "react-redux";
import {
  updateSearchbarPlaceholder,
  updateSearchbarValue,
} from "@redux/slices/searchbarSlice";

const NewReview = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  // const debounceTimeout = useRef(null);
  const [dropdownData, setDropdownData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const dispatch = useDispatch();
  const searchbarValue = useSelector((store) => store.searchbar.value);

  useEffect(() => {
    dispatch(updateSearchbarPlaceholder("Search Games..."));
  }, [dispatch]);

  useEffect(() => {
    // console.log("searchbarValue: " + searchbarValue);
    setSearchQuery(searchbarValue);

    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        searchGame(searchbarValue);
      }, 500)
    );
  }, [searchbarValue]);

  const handleSearchChange = (event) => {
    // Clear previous timeout
    clearTimeout(searchTimeout);
    setSearchQuery(event.target.value);
    dispatch(updateSearchbarValue(event.target.value));

    // Set new timeout
    setSearchTimeout(
      setTimeout(() => {
        searchGame(searchbarValue);
      }, 500)
    );
  };

  const searchGame = async (query) => {
    // console.log("Searching for Game: " + query);

    try {
      const response = await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchQuery: query,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();

      // Assuming `data` is an array of game results
      // Render a list of the results as cards or process the data as needed
      setSearchResults(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitting...");
  };

  return (
    <>
      <div className="page_content">
        {searchResults && searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 pt-6 pb-6">
            {searchResults.map((game) => (
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
                    <span className="card-span">
                      {game.involved_companies &&
                      game.involved_companies.some(
                        (company) => company.developer
                      )
                        ? game.involved_companies
                            .filter((company) => company.developer)
                            .map((company) => company.company.name)
                            .join(", ")
                        : "N/A"}
                    </span>
                  </p>
                  <p className="card-label">
                    Publisher:{" "}
                    <span className="card-span">
                      {game.involved_companies &&
                      game.involved_companies.some(
                        (company) => company.publisher
                      )
                        ? game.involved_companies
                            .filter((company) => company.publisher)
                            .map((company) => company.company.name)
                            .join(", ")
                        : "N/A"}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default NewReview;
