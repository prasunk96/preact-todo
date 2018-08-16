import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { toJS } from 'immutable';

const QUERY_NOTES = gql`
  {
    allNotes {
      id
      text
      checked
      priority
    }
  }
`;

import * as NotesActions from '../../actions/NotesActions';
import Note from './../note/Note';

class Home extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    let notesJSX = null;
    // if(this.props.notes) {
    //   notesJSX = (
    //     this.props.notes.map(note => (
    //       <Query query={QUERY_NOTES}>
    //         {
    //           ({loading, error, data}) => {
    //             if(loading) return (<h2>Loading notes...</h2>);
    //             if(error) return (<h2>Error loading notes</h2>);

    //             return (
    //               <div class="col-3">
    //                 {
    //                   data.allNotes.map( note =>
    //                     <Note info={note}/>
    //                   )
    //                 }
    //               </div>
    //             )
    //           }
    //         }
    //       </Query>
    //     ))
    //   )
    // }

    notesJSX = (
      <Query query={QUERY_NOTES}>
      {
        ({ loading, error, data }) => {
          if (loading) return <h2>Loading notes...</h2>;
          if (error) return <h2>Error loading notes</h2>;
          
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
