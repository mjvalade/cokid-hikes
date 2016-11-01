import { connect } from 'react-redux';
import TrailDetails from '../components/TrailDetails';

const mapStateToProps = (state) => {
  return { trailsList: state.trails };
};

export default connect(mapStateToProps)(TrailDetails);
