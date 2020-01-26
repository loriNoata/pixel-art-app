const initialState = {
  selectedCell: null, 
  selectedCells: null
  
 }
 
 const SetCells = (state = initialState, action) => {
     switch (action.type) {
       case 'SET_CELLS':
         console.log("selectedCells", state.selectedCells)
         return {           
           ...state,
           selectedCells: [action.cells],
           cell: action.cellNo
           }
      
       default:
         return state
     }
   }
   
   export default SetCells