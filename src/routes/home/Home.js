import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';
import { Query } from "react-apollo";
import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import Note from './../note/Note';

class Home extends Component {

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
                    <div class="col-3" key={note.id}>
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
        <h3>Recent Notes</h3>
        <hr />
        {notesJSX}
      </div>
    );
  }
  };


export default Home;
