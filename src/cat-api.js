import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_gNYsRIoCpoAiyj6PjDKIgWSbhhp0u0J17dGNVSLEzfDBNMgasFHe5DraAZZ04Gsi";



export function fetchBreeds() {

    return axios.get('https://api.thecatapi.com/v1/breeds').then(res => res.data)

}

export function fetchCatByBreed(breedId) {
    const PARAMS = `?breed_ids=${breedId}`;
    return axios.get(`https://api.thecatapi.com/v1/images/search${PARAMS}`).then(res => res.data)

}
