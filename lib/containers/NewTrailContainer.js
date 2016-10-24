import { connect } from 'react-redux';
import { createTrail } from '../actions';
import NewTrail from '../components/NewTrail';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (payload) => {
      dispatch(createTrail(payload))
    }
  };
};

export default connect(null, mapDispatchToProps)(NewTrail);
