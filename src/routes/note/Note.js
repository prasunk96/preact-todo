import { Component } from 'preact';
import { connect } from 'react-redux';



import style from './style';
import * as ACTIONS from '../../constants/Actions';
import * as NotesActions from '../../actions/NotesActions';

import { MARK_AS_DONE, TOGGLE_CHECKED } from './../../constants/Actions';
class Note extends Component {

  getTickClasses(...args) {
    let tickStyle = this.props.info.checked ? style.tick_dark_icon : style.tick_light_icon;
    args.push(tickStyle);
    return args.join(' ');
  }

  statusClickHandler = (info) => {
    info.checked = !info.checked;
    this.props.toggleChecked(info);
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
          <span title="Delete note" className={[style.delete_icon, "float-left"].join(' ')}></span>
          <span title="Mark as done" className={this.getTickClasses("float-right")} onClick={() => this.statusClickHandler(this.props.info)}></span>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleChecked: (value) => dispatch(NotesActions.toggleChecked(value))
  }
}

export default connect(null, mapDispatchToProps)(Note);