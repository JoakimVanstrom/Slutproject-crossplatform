// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import fetch from "node-fetch";

/* const token =
  "EAAKJ8RQL5aEBADc622SZCpKrzE5qnhg9Iiyn226vtwHuReenZBD758N5ZBiRrWVErmMxNQJZBMdojjNQqQ5Cdi4XjTVwcMhVO6JhyFTxZCvIUl3ONw5vMWfOKpAZAInwt7OlYCY2Fd5JUKxQguzPpwTaxqYrkpwcSPyjXqkScIXX9JJoK4dU5asiqkwLyFGio9TfRZCQtpxfwZDZD";

const URL = "https://graph.facebook.com/v14.0/me?fields=id%2Cname"; */

/* const handler = async (event) => {
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { error: err.message };
  }
}; */

const handler = async (event) => {
  try {
    const response = await fetch(
      "https://swapi.dev/api/people/1"
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }
  catch (err) {
    return { error: err.message };
  }
}

module.exports = { handler };
