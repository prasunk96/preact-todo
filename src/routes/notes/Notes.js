import { Component } from 'preact';
import { connect } from 'react-redux';

import style from './style';
import Note from './../note/Note';
import * as NotesActions from '../../actions/NotesActions';


 class Notes extends Component {

  componentDidMount() {
    if(!this.props.notes || !this.props.notes.length) {
      this.props.getNotes();
    }
  }

  noteTextChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(event.keyCode);
    if(event.keyCode === 13) {
      let noteToAdd = {
        "text": event.target.value,
        "checked": false,
        "priority": "Low"
      }
      this.props.addNote(noteToAdd);
    }
  }

   render() {
     let notesJSX = null;
     if (this.props.notes) {
       notesJSX = (
         this.props.notes.map(note => (
           <div class="col-3">
             <Note info={note} />
           </div>
         ))
       )
     }
     return (
       <div>
        <div class="row">
          <div class="col-8 offset-2">
            <input type="text" class={style.shadow_input} value="" onKeyUp={event => this.noteTextChangeHandler(event)} placeholder="Type and hit enter to add note" />
          </div>
        </div>
        <div class="row m-t-30">
          {notesJSX}
        </div>
       </div>
     )
   }
 }

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (value) => dispatch(NotesActions.addNote(value)),
    getNotes: () => dispatch(NotesActions.getNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);