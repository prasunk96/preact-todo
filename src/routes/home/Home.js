import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';
import { Query } from "react-apollo";
import { toJS } from 'immutable';

import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import * as NotesActions from '../../actions/NotesActions';
import Note from './../note/Note';

class Home extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    let notesJSX = null;
    notesJSX = (
      <Query query={NOTES_QUERY.RECENT_NOTES}>
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
        <h3>Notes</h3>
        <hr />
        {notesJSX}
        <h3>Lists</h3>
        <hr />
      </div>
    );
  }
  };

const mapStateToProps = state => {
  return {
    notes: state.get('notes').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => dispatch(NotesActions.getNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
