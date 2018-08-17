import gql from "graphql-tag";


export const ALL_NOTES = gql`
  {
    allNotes {
      id
      text
      checked
      priority
    }
  }
`;

export const RECENT_NOTES = gql`
  {
    allNotes(last: 4) {
      id
      text
      checked
      priority
    }
  }
`;