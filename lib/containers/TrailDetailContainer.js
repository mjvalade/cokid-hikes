import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrailDetails from '../components/TrailDetails';
import { fetchTrail } from '../actions/index';
import { starTrail } from '../actions/auth';

const mapStateToProps = (state) => {
  return {
    trailList: state.trails.data,
    selectedTrail: state.trails.selectedTrail
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTrail,
    starTrail
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailDetails);
