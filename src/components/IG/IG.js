
const IG = () => {
  const ig = require('instagram-scraping');

  ig.scrapeTag('ithskorv').then((result) => {
    console.dir(result);
  });
}

export default IG;

