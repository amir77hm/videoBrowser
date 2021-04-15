import axios from "axios";

const APIkey = 'AIzaSyBbgHNFMc5RDNy3xgonzW0_YUTG05OmFUs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResaults: 5,
        key: APIkey
    }
})