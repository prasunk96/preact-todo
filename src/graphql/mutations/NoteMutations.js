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

export const UPDATE_NOTE = gql`
  mutation updateNote($id: Int!, $checked: Boolean) {
    updateNote(id: $id, checked: $checked) {
      text
      priority
      checked
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation deleteNote($id: Int) {
    deleteNote(id: $id)
  }
`;