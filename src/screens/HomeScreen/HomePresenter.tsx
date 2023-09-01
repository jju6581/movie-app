import PropTypes from "prop-types";
import React from "react";

interface HomeProps{
    movieDetail : any;
    loading : boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading
}) => {
    return(
        <div>Home</div>
    );
}

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;