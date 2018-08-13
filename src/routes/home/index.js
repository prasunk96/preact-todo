import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';

import * as NotesActions from '../../actions/NotesActions';
import Note from './../note';

class Home extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    let notesJSX = null;
    if(this.props.notes) {
      notesJSX = (
        this.props.notes.slice(0, 4).map(note => (
          <div class="col-3">
            <Note text={note.text} key={note.id}/>
          </div>
        ))
      )
    }
    
    return (
      <div>
        <h3>Notes</h3>
        <hr />
        <div class="row">
          {notesJSX}
        </div>
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
