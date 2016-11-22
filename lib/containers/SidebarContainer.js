import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/Sidebar';
import { starTrail } from '../actions/auth';


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    trailsList: state.trails.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    starTrail
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
