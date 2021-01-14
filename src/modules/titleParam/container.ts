import { connect } from 'react-redux'
import TitleParamPage from './components'
import * as actions from './actions';
import { TitleParam } from './actionTypes';

const mapStateToProps = (state: any) => {
    return ({ token: state.titleParam.token, error: state.titleParam.error })
};
const mapDispatchToProps = (dispatch: (arg0: TitleParam) => any) => {
    return {
        postLogin: (username: string, password: string) => dispatch(actions.postLogin(username, password)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleParamPage);
