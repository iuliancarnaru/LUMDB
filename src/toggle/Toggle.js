import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toogleMessage } from './actions';

const Toggle = ({ messageVisibility, toogleMessage }) => (
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
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toogleMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
