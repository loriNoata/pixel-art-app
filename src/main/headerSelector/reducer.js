const initialState = {
  state: '8x8'
}
const ChangeCanvasSize = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_CANVAS_SIZE':
        return {           
          ...state,
          size: action.size,
          }
     
      default:
        return state
    }
  }
  
  export default ChangeCanvasSize