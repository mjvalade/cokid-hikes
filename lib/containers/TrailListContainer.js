import { connect } from 'react-redux';
import { fetchTrail } from  '../actions';
import TrailList from '../components/TrailList';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (trail) => {
      dispatch(fetchTrail(trail));
    }
  };
};

const mapStateToProps = (state) => {
  return { trailsList: state.trails };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailList);
