import Loader from "../../Loader/Loader";

interface MoviePresenterProps {
    nowPlaying : any[] | null;
    upcoming : any[] | null;
    popular : any[] | null;
    topRated : any[] | null;
    error : string | null;
    loading : boolean;
    popularInfinite : any[] | null;
    nowPlayigInfinite : any[] | null;
    upcomingInfinite : any[] | null;
    topRatedInfinite : any[] | null;
}

const MoviePresenter : React.FC<MoviePresenterProps>=({
    nowPlaying,
    upcoming,
    popular,
    topRated,

    loading,

    popularInfinite,
    nowPlayigInfinite,
    upcomingInfinite,
    topRatedInfinite
})=>{
    const {location : {pathname}} = window;

    console.log(nowPlaying);

    return loading ? ( <Loader/> ):(
        <div>Moive app</div>);
}

export default MoviePresenter;