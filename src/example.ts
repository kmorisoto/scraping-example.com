import {AxiosError, AxiosResponse} from "axios";

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://example.com')
    .then(function (response: AxiosResponse) {
        // handle success
        console.log(response);
    })
    .catch(function (error: AxiosError) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

async function main() {
    try {
        const response = await axios.get('https://example.com');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

main();
