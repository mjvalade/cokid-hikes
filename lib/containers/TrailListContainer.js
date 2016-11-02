import { connect } from 'react-redux';
import * as actions from  '../actions';
import { bindActionCreators } from 'redux';
import TrailList from '../components/TrailList';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => {
  return { trailsList: state.trails.data };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailList);
