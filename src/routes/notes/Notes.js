import { Component } from 'preact';
import { Query } from 'react-apollo';


import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import Note from './../note/Note';
import NoteInputWithMutation from './../../components/note-input/NoteInput';



 class Notes extends Component {

   render() {
     let notesJSX = null;
     notesJSX = (
       <Query query={NOTES_QUERY.ALL_NOTES}>
         {
           ({ loading, error, data }) => {
             if (loading) return <h4 class="text-muted text-center">Loading notes...</h4>;
             if (error) return <h4 class="text-muted text-center">Error loading notes</h4>;

             return (
               <div class="row m-t-30">
                 {
                   data.allNotes.map(note => (
                     <div class="col-12 col-sm-6 col-md-3" key={note.id}>
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
          <div class="col-12">
            <NoteInputWithMutation />
          </div>
        </div>
        <div class="">
          {notesJSX}
        </div>
       </div>
     )
   }
 }


export default Notes