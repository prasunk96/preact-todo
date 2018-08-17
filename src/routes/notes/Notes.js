import { Component } from 'preact';
import { connect } from 'react-redux';
import { toJS } from 'immutable';


import Note from './../note/Note';
import * as NotesActions from '../../actions/NotesActions';
import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import { Query } from 'react-apollo';
import NoteInputWithMutation from './../../components/note-input/NoteInput';



 class Notes extends Component {

  componentDidMount() {
    if(!this.props.notes || !this.props.notes.length) {
      this.props.getNotes();
    }
  }

  noteTextChangeHandler = (event) => {
    if(event.keyCode === 13 && event.target.value) {
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
     notesJSX = (
       <Query query={NOTES_QUERY.ALL_NOTES}>
         {
           ({ loading, error, data }) => {
             if (loading) return <h4 class="text-muted text-center">Loading notes...</h4>;
             if (error) return <h4 class="text-muted text-center">Error loading notes</h4>;

             return (
               <div class="row">
                 {
                   data.allNotes.map(note => (
                     <div class="col-3">
                       <Note info={note} />
                     </div>
                   )
                   )
                 }
               </div>
             )
           }
         }
       </Query>
     );
     return (
       <div>
        <div class="row">
          <div class="col-8 offset-2">
            <NoteInputWithMutation />
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
    notes: state.get('notes').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (value) => dispatch(NotesActions.addNote(value)),
    getNotes: () => dispatch(NotesActions.getNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);