import axios from "axios";
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer dOYqg9_cAXRw5DgSgxmLCVyR4-plPBEmhwlpbmIZuBxOL0oC-F5KLlpHu_yEjW-hhAaPC8okqUuSHmyKmHluqMRq3uFU_LYjYlXBUnjVQcGNUwbjitcWj7KzRdPbYHYx'
    }
});