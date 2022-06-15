// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios');
const token = "AAAAAAAAAAAAAAAAAAAAAAXLdgEAAAAAfG2rtdBUhzws%2FtNoSY9j4EGdp18%3DVzhaHqMP9PRvIg2GXDTu9iKQwP6bfSnaJahIqdHOHJkYIO3bCl";
const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022&expansions=author_id&user.fields=name"

module.exports.handler = async (event, context) => {
  try {
    const response = await axios.get(URL, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const tweets = response.data.data.map(tweet => {
      const user = response.data.includes.users.find(user => user.id === tweet.author_id);
      const { name, username } = user;
      const { text } = tweet;
      return { name, username, text };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(tweets)
    };
  }
  catch (err) {
    console.log(err)
    return { statusCode: 500, error: err.message };

  }
}