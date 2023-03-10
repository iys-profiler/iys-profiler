import axios from 'axios';

const ApiClient = axios.create({
    baseURL: `https://isot.itsyourskills.com/v1/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

ApiClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status === 401) {
            window.location.href = "https://example.com/login";
      }
        console.error("Looks like there was a problem.Status Code: " + res.status);
        return Promise.reject(error);
    }
);

export default (
    ApiClient
);
