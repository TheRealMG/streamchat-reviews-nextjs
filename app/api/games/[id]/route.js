import fetch from "node-fetch";

const igdbId = process.env.IGDB_ID;
const igdbAccessToken = process.env.IGDB_ACCESS_TOKEN;

const apiUrl = "https://api.igdb.com/v4/games";
// fetch a list of 5 games from the IGDB API
export const POST = async (req, {params}) => {

  try {
    const body = `where id = ${params.id}; 
    fields *, cover.*, release_dates.date, involved_companies.*, involved_companies.company.name, platforms.*, genres.name, themes.name, websites.*, screenshots.*, similar_games.name, similar_games.cover.*, similar_games.involved_companies.*, similar_games.involved_companies.company.name, external_games.*; 
    limit 1;`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Client-ID": igdbId,
        Authorization: `Bearer ${igdbAccessToken}`,
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();

    // Return a response with the data JSON format and a status of 200 (OK)
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // If an error occurs, return a response with an error message and a status of 500 (Internal Server Error)
    return new Response("Failed to fetch games", { status: 500 });
  }
};
