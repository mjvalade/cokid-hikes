import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return { trailsList: state.trails.data };
};

export default connect(mapStateToProps)(Sidebar);
