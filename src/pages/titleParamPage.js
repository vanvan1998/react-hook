import React from 'react';
import {
    useParams,
    withRouter
} from 'react-router-dom';

function TitleParamPage(props) {
    const param = useParams()

    function HandleGoToHome() {
        // props.history.go(-1)
        props.history.push('/')
    }

    // return <Redirect to="/home" />

    return <div>
        <h3>Requested topic ID: {param.topicId}   {param.topic}</h3>
        <button onClick={HandleGoToHome}>Go to Clock</button>
    </div >
}

export default withRouter(TitleParamPage);