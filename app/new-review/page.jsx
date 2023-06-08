"use client";

import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import RichTextEditor from "@components/RichTextEditor";
import SearchBar from "@components/SearchBar";

const NewReview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debounceTimeout = useRef(null);
  const [dropdownData, setDropdownData] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // const handleInputChange = (event) => {
  //   setSearchQuery(event.target.value);

  //   // Clear previous timeout
  //   clearTimeout(debounceTimeout.current);

  //   // Set new timeout
  //   debounceTimeout.current = setTimeout(() => {
  //     searchGame(event.target.value);
  //   }, 500);
  // };

  // const handleInputFocus = () => {
  //   setIsInputFocused(true);
  // };
  // const handleInputBlur = () => {
  //   setIsInputFocused(false);
  // };

  // const searchGame = async (query) => {
  //   // console.log("searching for game... " + query);

  //   try {
  //     const response = await fetch("api/games", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         searchQuery: query,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch games");
  //     }

  //     const data = await response.json();
  //     // console.log(data);

  //     // Assuming `data` is an array of game results
  //     // Render the dropdown or process the data as needed
  //     setDropdownData(data);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  // const renderDropdown = () => {
  //   if (!isInputFocused) {
  //     return null; // Don't render the dropdown if the input is not focused
  //   }
  //   // console.log(dropdownData);
  //   // Render the dropdown
  //   return (
  //     <div className="bg-white flex flex-col p-2 space-y-2 absolute max-w-lg">
  //       {dropdownData.map((item) => (
  //         <div key={item.id} className="text-black flex items-center">
  //           {/* <img src={item.cover.url} alt={item.name} classname="mr-2" /> */}
  //           <span>{item.name}</span>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  // const publishReview = async (e) => {
  //   e.preventDefault();
  //   console.log("publishing review...");
  //   const searchQuery2 = "macbat";

  //   console.log(searchQuery2);

  //   try {
  //     const response = await fetch("api/games", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         searchQuery: searchQuery2,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch games");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Clear previous timeout
    clearTimeout(debounceTimeout.current);

    // Set new timeout
    debounceTimeout.current = setTimeout(() => {
      searchGame(event.target.value);
    }, 500);
  };

  const searchGame = async (query) => {
    // console.log("searching for game... " + query);

    try {
      const response = await fetch("api/games", {
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
      console.log(data);

      // Assuming `data` is an array of game results
      // Render a list of the results as cards or process the data as needed
      setSearchResults(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Helper function to get the developer name
  const getDeveloperName = (game) => {
    // const developerCompany = game.involved_companies.find(
    //   (company) => company.developer
    // );
    // console.log(developerCompany);
    // return developerCompany ? developerCompany.name : "N/A";
    const developerCompanies = game.involved_companies.filter((company) => company.developer);
    if (developerCompanies.length === 0) {
      return "N/A";
    }
    return developerCompanies.map((company) => company.company.name).join(", ");
  };

  // Helper function to get the publisher name
  const getPublisherName = (game) => {
    // const publisherCompany = game.involved_companies.find(
    //   (company) => company.publisher
    // );
    // return publisherCompany ? publisherCompany.name : "N/A";
    const publisherCompanies = game.involved_companies.filter((company) => company.publisher);
    if (publisherCompanies.length === 0) {
      return "N/A";
    }
    return publisherCompanies.map((company) => company.company.name).join(", ");
  };

  return (
    // <Form type="New" handleSubmit={publishReview}>
    //   <div className="max-w-full">
    //     <input
    //       placeholder="Search for a game..."
    //       required
    //       className="form_input"
    //       value={searchQuery || ""}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //       onBlur={handleInputBlur}
    //     />
    //     {dropdownData.length > 0 && renderDropdown()}
    //   </div>

    //   <label>
    //     <span className="text-base text-white">Review Text</span>

    //     <RichTextEditor />
    //   </label>
    // </Form>
    <>
      <SearchBar placeholder="Search Games..." onChange={handleSearchChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 pt-6">
        {searchResults.map((game) => (
          <div className="card" key={game.id}>
            <div className="rounded-t-xl overflow-hidden w-full aspect-[3/4] bg-black">
              <img
                src={game.cover.url.replace("t_thumb", "t_cover_big_2x")}
                alt={game.name}
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{game.name}</h2>
              <p className="card-label">
                Developer: <span className="card-span">{getDeveloperName(game)}</span>
              </p>
              <p className="card-label">
                Publisher: <span className="card-span">{getPublisherName(game)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="page_art">

      </div>
    </>
  );
};

export default NewReview;
