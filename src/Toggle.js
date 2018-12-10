import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toogleMessage, getMovies } from './actions';

const Toggle = ({ messageVisibility, toogleMessage, getMovies }) => (
  <div>
    {messageVisibility
    && <p>You can see this if redux action is toogled</p>
    }
    <button
      type="button"
      onClick={toogleMessage}
    >
      {'Toggle Me'}
    </button>
    <button
      type="button"
      onClick={getMovies}
    >
      {'Load movies'}
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toogleMessage,
  getMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
