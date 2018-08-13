import { Component } from 'preact';
import style from './style';

class Note extends Component {

  render() {
    return (
      <div class={style.note_container}>
        <div class={style.note_content}>
          {this.props.text}
        </div>
        <div class={style.note_actions}>
          <span title="Delete note" className={[style.delete_icon, "float-left"].join(' ')}></span>
          <span title="Mark as done" className={[style.tick_icon, "float-right"].join(' ')}></span>
        </div>
      </div>
    )
  }
};

export default Note;