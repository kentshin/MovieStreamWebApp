import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODU1NWViNDZmMjdlYTY5YmY0NWI2N2ViYjMzODk0MiIsInN1YiI6IjY1ZjU1YzhjM2ZlMTYwMDE3ZGM1YTQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lja4EGuvvyObVcd2WyNsCYC5vm-HeiMdhrHtoWqccHs';
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
    try {
        const {data} = await axios.get
            (BASE_URL + url, {
                headers: headers,
                params,

            })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}