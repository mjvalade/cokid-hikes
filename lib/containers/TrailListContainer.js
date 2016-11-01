import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTrails } from '../actions/index';
import TrailList from '../components/TrailList';

const mapStateToProps = (state) => {
  return { trailsList: state.trails };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchAllTrails}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailList);
