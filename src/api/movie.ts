import axios ,{AxiosResponse} from "axios";

type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO_KR",
    },
});

export const homeApi = {
    
}