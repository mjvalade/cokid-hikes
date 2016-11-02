import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TrailDetails from '../components/TrailDetails';
import { fetchTrail } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    trailList: state.trails.data,
    selectedTrail: state.trails.selectedTrail
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTrail }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailDetails);
