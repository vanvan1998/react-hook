import TitleParamPage from './components'
import { connect } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = state => {
    return ({ data: state.titleParam.data })
};
const mapDispatchToProps = dispatch => {
    return {
        postLoginAction: (username, password) => dispatch(actions.postLoginAction(username, password)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleParamPage);
