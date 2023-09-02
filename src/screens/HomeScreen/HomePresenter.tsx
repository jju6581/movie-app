import PropTypes from "prop-types";
import React from "react";
import Loader from "../../Loader/Loader";

interface HomeProps{
    movieDetail : any;
    loading : boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading
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