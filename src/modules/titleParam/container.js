import TitleParamPage from './components'
import { connect } from 'react-redux';
import * as actions from './actions';

const mapStateToProps = state => {
    return ({ data: state.titleParam.data })
};
const mapDispatchToProps = dispatch => {
    return {
        PostLoginAction: (username,password) => dispatch(actions.PostLoginAction(username,password)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitleParamPage);
