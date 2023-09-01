import HomeContainer from "./screens/HomeScreen";
import {FC} from "react";
import {Route, Routes} from "react-router-dom";

const Router : FC = (props) => {
    return(
        <div>
            <Routes>
                <Route path = "/" Component={HomeContainer}>

                </Route>
            </Routes>
        </div>
    );
}
export default Router;