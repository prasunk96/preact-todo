import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';

import * as NotesActions from '../../actions/NotesActions';
import { getNotes } from './../../actions/NotesActions';
import Note from './../note/Note';

class Home extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div class="container">
        <h3>Notes</h3>
        <hr />
        <Note />
        <h3>Lists</h3>
        <hr />
      </div>
    );
  }
  };

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => dispatch(NotesActions.getNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
