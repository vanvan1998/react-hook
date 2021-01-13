import React from 'react';
import {
    useParams,
    withRouter
} from 'react-router-dom';

function TitleParamPage(props) {
    const param = useParams()

    function handleGoToHome() {
        // props.history.go(-1)
        props.history.push('/')
    }

    function handleCallPostAPI() {
        props.postLoginAction('vanvan', '123456')
    }

    // return <Redirect to="/home" />

    return <div>
        <h3>Requested topic ID: {param.topicId}   {param.topic}</h3>
        <h3>data: {props.data}</h3>
        <button onClick={handleGoToHome}>Go to home</button>
        <button onClick={handleCallPostAPI}>Call login API</button>

    </div >
}

export default withRouter(TitleParamPage);