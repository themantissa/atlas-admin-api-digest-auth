const urllib = require('urllib');
const util = require('util');

const baseUrl = 'https://cloud.mongodb.com/api/atlas/v2/';
const { ATLAS_USER, ATLAS_USER_KEY } = process.env;
const options = {
  digestAuth: `${ATLAS_USER}:${ATLAS_USER_KEY}`,
  headers: {
    'Accept': 'application/vnd.atlas.2023-01-01+json'  // update date to desired API version
  }
};

urllib.request(baseUrl, options) 
.then(({ data, res }) => {
  if (res.statusCode !== 200) {
    console.error(`Unexpected Status: ${res.statusCode}: ${res.statusText}`);
  } else {
    const jsonRes = JSON.parse(data);
    console.log(util.inspect(jsonRes, { depth: null, colors: true }));
  }
})
.catch(error => console.error('Error occurred:', error));