import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return { trailsList: state.trails };
};

export default connect(mapStateToProps)(Sidebar);
