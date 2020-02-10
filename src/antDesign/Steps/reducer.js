const initialState = {
    current: 0, 
    items: [
        { id: 1, disabled: false, title: "Participant details" }
    ]
  }
  const ChangeStep = (state = initialState, action) => {
      console.log("++", action.step);
      switch (action.type) {
        case 'CHANGE_STEP':
          return {           
            ...state,
            current: parseInt(state.current + action.step),
             
            }
       
        default:
          return state
      }
    }
    
    export default ChangeStep