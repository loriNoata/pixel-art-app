const initialState = {
 color: {r: 241, g: 112, b: 19, a:1}
}

const ChangeColor = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return {           
          ...state,
          color: action.colorRGB,
          }
     
      default:
        return state
    }
  }
  
  export default ChangeColor