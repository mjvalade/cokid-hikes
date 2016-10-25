import { connect } from 'react-redux';
import { createTrail } from '../actions';
import NewTrailForm from '../components/NewTrailForm';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (payload) => {
      console.log('in handleSubmit');
      dispatch(createTrail(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewTrailForm);
