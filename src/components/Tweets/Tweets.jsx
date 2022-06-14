/* import { useEffect, useState } from "react"; */

const URL = "https://api.twitter.com/2/tweets/search/recent?query=%23iths2022&expansions=author_id&user.fields=name"
const KEY = "iKQwP6bfSnaJahIqdHOHJkYIO3bCl"

exports.handler = async (event, context) => {
  try {
    const response = await fetch(URL, {
      headers: {
        "Authorization": `Bearer ${KEY}`,
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await response.json();

    const tweets = data.data.map(tweet => {
      const user = data.includes.users.find(user => user.id === tweet.author_id);
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
    return { error: err.message };
  }
}