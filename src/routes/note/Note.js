import { Component } from 'preact';
import style from './style';

class Note extends Component {

  render() {
    return (
      <div class={style.note_container}>
        <div class={style.note_content}>
          some-text
        </div>
        <div class={style.note_actions}>
          <span className={[style.delete_icon, "float-left"].join(' ')}></span>
          <span className={[style.tick_icon, "float-right"].join(' ')}></span>
        </div>
      </div>
    )
  }
};

export default Note;