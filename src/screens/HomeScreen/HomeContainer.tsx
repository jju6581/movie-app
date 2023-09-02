import { Component, ReactNode } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../api/movie";

interface HomeContainerState{
    nowPlaying : any[] | null;
    movieDetail : any;
    loading : boolean;
    error : any;
}

class HomeContainer extends Component<{}, HomeContainerState>{
    constructor(props : {}){
        super(props);
        this.state = {
            nowPlaying : null,
            movieDetail : null,
            loading : true,
            error : null
        };
    }

    async componentDidMount(){
        try{
            const {data} = await homeApi.nowPlaying();
            const movieArray = data.results.map((r:any) => r.id);
            const moviedId = movieArray[Math.floor(Math.random() * movieArray.length)]
            try{
                const {data : movieDetail} = await homeApi.movieDetail(moviedId);
                if(movieDetail.videos.results.length == 0){
                    const { data : defaultMovieDetail} = await homeApi.movieDetail(497698);
                    this.setState({movieDetail : defaultMovieDetail});
                }else{
                    this.setState({movieDetail : movieDetail});
                }
            }catch(error){
                this.setState({error: `${error}`});
            }
        }catch(error){
            this.setState({error:"비디오를 재생할 수 없음"});
        }finally{
            this.setState({loading : false});
        }
    }

    render(){
        return <HomePresenter {...this.state}/>;
    }
}
export default HomeContainer;