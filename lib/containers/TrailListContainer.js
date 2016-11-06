import { connect } from 'react-redux';
import * as actions from  '../actions';
import { bindActionCreators } from 'redux';
import TrailList from '../components/TrailList';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    trailsList: state.trails.data,
    starTrail: state.trails.data.starTrail
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailList);
