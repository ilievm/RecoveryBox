const initialState = {
  suggestionSettings: {
    suggestionsList: ['Meetings', 'Step 10s', 'Prayer'],
    fullSuggestionsList: ['Meetings', 'Prayer', 'Meditation', 'Useful', 'Kind to Myself', 'Gratitude', 'Step 10s', 'Inventory', 'Called a Newcomer', 'Ate a'],
  },
  userSettings: {
    spare: [],
  }
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTO_SUGGESTIONS_LIST":
      return {
        ...state,
        suggestionSettings: {
          ...state.suggestionSettings,
          suggestionsList: [...state.suggestionSettings.suggestionsList, action.payload]
        }
      }
    case "REMOVEFROM_SUGGESTIONS_LIST":
      return {
        ...state,
        suggestionSettings: {
          ...state.suggestionSettings,
          suggestionsList: state.suggestionSettings.suggestionsList.filter(elInList => elInList !== action.payload)
        }
      }  
    default:
      return state;
   }
}

export default settingsReducer;