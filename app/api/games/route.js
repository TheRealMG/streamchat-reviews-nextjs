import fetch from "node-fetch";

const igdbId = process.env.IGDB_ID;
const igdbAccessToken = process.env.IGDB_ACCESS_TOKEN;

const apiUrl = "https://api.igdb.com/v4/games";
// fetch a list of 5 games from the IGDB API
export const POST = async (req, res) => {
  const { searchQuery } = await req.json();

  try {
    const body = `where name ~ *"${searchQuery}"* & cover != null & version_parent = null & parent_game = null & category = 0 & involved_companies != null; 
    fields name, cover.*, total_rating, total_rating_count, release_dates.date, involved_companies.*, involved_companies.company.name; 
    limit 100;`;

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

    // Sort the data based on a blend of total_rating_count and release date
    const sortedData = data
      .map((game) => {
        const count = game.total_rating_count || 0;
        const rating = game.total_rating || 0;
        // const releaseDate = game.release_dates[0]?.date * 0.00005 || 0;

        // Define weights for total_rating_count and release date
        const weightCount = 0.5; // Weight for total_rating_count
        const weightRating = 0.3; // Weight for total_rating
        const weightReleaseDate = 0.025; // Weight for release date

        // Calculate the weighted average of rating count and rating value
        const weightedRating = (count * rating) / (count + 1);

        // Calculate the score for the game based on weighted rating, rating count, and release date
        const score = weightedRating * weightRating + count * weightCount;

        // Add the score to the game object
        return { ...game, score };
      })
      .sort((a, b) => b.score - a.score);

    // Return a response with the data JSON format and a status of 200 (OK)
    return new Response(JSON.stringify(sortedData), { status: 200 });
  } catch (error) {
    // If an error occurs, return a response with an error message and a status of 500 (Internal Server Error)
    return new Response("Failed to fetch games", { status: 500 });
  }
};
