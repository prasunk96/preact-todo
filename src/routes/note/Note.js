import { Component } from 'preact';
import { connect } from 'react-redux';



import style from './style';
import * as ACTIONS from '../../constants/Actions';
import * as NotesActions from '../../actions/NotesActions';

class Note extends Component {

  getTickClasses(...args) {
    let tickStyle = this.props.info.checked ? style.tick_dark_icon : style.tick_light_icon;
    args.push(tickStyle);
    return args.join(' ');
  }

  statusClickHandler = (info) => {
    info.checked = !info.checked;
    this.props.setChecked(info);
  }
  deleteClickHandler = (id) => {
    this.props.deleteNote(id);
  }
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
          <span title="Delete note" className={[style.delete_icon, "float-left"].join(' ')} onClick={() => this.deleteClickHandler(this.props.info.id)}></span>
          <span title="Mark as done" className={this.getTickClasses("float-right")} onClick={() => this.statusClickHandler(this.props.info)}></span>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setChecked: (value) => dispatch(NotesActions.setChecked(value)),
    deleteNote: (value) => dispatch(NotesActions.deleteNote(value))
  }
}

export default connect(null, mapDispatchToProps)(Note);