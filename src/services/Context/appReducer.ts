export enum ACTION_TYPES {
  SAVE_PREVIOUS_PAGE = "SAVE_PREVIOUS_PAGE",
  SET_SELECTED_SECTION = "SET_SELECTED_SECTION",
}

export type Action = {
  type: ACTION_TYPES;
  payload: string;
};

export type State = {
  previousPage: string;
  selectedSection: string;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SAVE_PREVIOUS_PAGE":
      return { ...state, previousPage: action.payload };
    case "SET_SELECTED_SECTION":
      return { ...state, selectedSection: action.payload };
    default:
      throw new Error("No action found");
  }
};
