import { graphql } from 'react-apollo';
import gql from "graphql-tag";

import style from './style';
import * as NOTES_QUERY from '../../graphql/queries/NoteQueries';
import * as NOTES_MUTATION from '../../graphql/mutations/NoteMutations';


const NoteInput = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { text: evt.target.value, checked: false, priority: "Low" },
        refetchQueries: [{ query: NOTES_QUERY.ALL_NOTES }]
      })
      .then(res => {
        evt.target.value = '';
      });
    }
  };

  return (
    <input
      type="text"
      value=""
      class={style.shadow_input}
      placeholder="Type something and hit enter to add note"
      onKeyUp={handleKeyUp}
    />
  );
};

const NoteInputWithMutation = graphql(
  NOTES_MUTATION.CREATE_NOTE
)(NoteInput);
export default NoteInputWithMutation;