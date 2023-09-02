import PropTypes from "prop-types";
import React from "react";
import Loader from "../../Loader/Loader";
import styles from "../HomeScreen/Home.module.css"
interface HomeProps{
    movieDetail : any;
    loading : boolean;
    error : any;
}

const HomePresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading,
    error
}) => {
    return loading? (
        <Loader></Loader>
    ) : (
        <div>Home</div>
    );
}

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;