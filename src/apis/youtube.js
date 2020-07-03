import axios from 'axios';
const KEY = 'AIzaSyCAs6biSspJ4KpOW57da0CxRaF7iSDqrbM'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})