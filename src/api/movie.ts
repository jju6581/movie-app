import axios ,{AxiosResponse} from "axios";

type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO_KR",
        api_key : "0dcb0d3bf1af52f882728519b655614d"
    },
});

export const homeApi = {
    nowPlaying : () : Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),
    movieDetail : (id:number) : Promise<AxiosResponse<MovieDetailData>> => 
    REST_API_ADDR.get(`movie/${id}`,{
        params :{append_to_response : "videos"}
    }),
};