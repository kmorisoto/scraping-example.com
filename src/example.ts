const axios = require('axios');
const cheerio = require('cheerio');

const main = async () => {
    const response = await axios.get('https://example.com');
    const $ = cheerio.load(response.data);
    console.log($('title').text());
}
main();

const a = (data: string) => {
    console.log(data);
    const $ = cheerio.load(data);
    console.log($);

}
