import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    trailsList: state.trails.data
  };
};

export default connect(mapStateToProps)(Sidebar);
