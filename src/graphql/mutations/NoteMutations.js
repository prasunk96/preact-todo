import gql from "graphql-tag";

export const CREATE_NOTE = gql`
  mutation createNote($text: String, $priority: String, $checked: Boolean) {
    createNote(text: $text, priority: $priority, checked: $checked) {
      text
      priority
      checked
    }
  }
`;