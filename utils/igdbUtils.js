// FILE CURRENTLY UNUSED
// const axios = require('axios');
// const redisClient = require('./redis');

// // Function to generate and retrieve the IGDB API token
// const getIgdbToken = async () => {
//   const tokenKey = 'igdbToken';
//   const storedToken = await redisClient.get(tokenKey);

//   if (storedToken) {
//     // If the token exists in Redis, return it
//     return storedToken;
//   }

//   // If the token doesn't exist in Redis, generate a new one
//   const response = await axios.post('https://id.twitch.tv/oauth2/token', {
//     client_id: process.env.IGDB_CLIENT_ID,
//     client_secret: process.env.IGDB_CLIENT_SECRET,
//     grant_type: 'client_credentials',
//   });

//   const { access_token, expires_in } = response.data;

//   // Store the generated token in Redis
//   await redisClient.setex(tokenKey, expires_in, access_token);

//   return access_token;
// };

// module.exports = { getIgdbToken };