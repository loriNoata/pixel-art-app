const initialState = {
  participantDetails: [], 
  isSaved: false
}
const SaveInputValues = (state = initialState, action) => {
   
      switch (action.type) {
        case 'SAVE_INPUT_VALUES':
           
          return {           
            ...state,
            participantDetails:  action.values  , 
            isSaved : true
            }
       
        default:
          return state
      }
    }
    
export default SaveInputValues