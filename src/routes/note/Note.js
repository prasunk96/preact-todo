import { Component } from 'preact';
import { Mutation } from 'react-apollo';

import style from './style';
import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import * as NOTES_MUTATION from '../../graphql/mutations/NoteMutations';

class Note extends Component {

  getTickClasses(...args) {
    let tickStyle = this.props.info.checked ? style.tick_dark_icon : style.tick_light_icon;
    args.push(tickStyle);
    return args.join(' ');
  }

  updateHandler = (updateToDo, info) => {
    updateToDo({
      variables: {id: info.id, checked: !info.checked},
      refetchQueries: [{ query: NOTES_QUERY.ALL_NOTES }]
    })
  };

  deleteHandler = (deleteToDo, info) => {
    deleteToDo({
      variables: {id: info.id},
      refetchQueries: [{ query: NOTES_QUERY.ALL_NOTES }]
    })
  };


  render() {
    let textDecoration = {
      'text-decoration': this.props.info.checked ? 'line-through' : 'none'
    }
    return (
      <div class={style.note_container}>
        <div class={style.note_content}>
          <span style={textDecoration}>{this.props.info.text}</span>
        </div>
        <div class={style.note_actions}>
          <Mutation mutation={NOTES_MUTATION.UPDATE_NOTE}>
            {
              (updateToDo, data) => (
                <span title="Mark as done" className={this.getTickClasses("float-right")} onClick={() => this.updateHandler(updateToDo, this.props.info)}></span>
              )
            }
          </Mutation>
          <Mutation mutation={NOTES_MUTATION.DELETE_NOTE}>
            {
              (deleteToDo, data) => (
                <span title="Delete note" className={[style.delete_icon, "float-left"].join(' ')} onClick={() => this.deleteHandler(deleteToDo, this.props.info)}></span>
              )
            }
          </Mutation>


        </div>
      </div>
    )
  }
};

export default Note;