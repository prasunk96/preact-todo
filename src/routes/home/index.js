import { h, Component } from 'preact';
import {connect} from 'react-redux';
import style from './style';

import * as NotesActions from '../../actions/NotesActions';
import { getNotes } from './../../actions/NotesActions';

class Home extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div class="container">
        {
          this.props.notes.map(item => (
            <p>{item.text}</p>
          ))
        }
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
