const initialState = {
    time: [
      {value: 'Low'}
    ]}


    export default function timeReducer(state = initialState, action) {
        switch (action.type) {
            case 'time/timeUpdated': {
                return {   
                    ...state,
                    time: state.time.map(time => {
                      if (time.value === action.payload) {
                        return time
                      }
                      return {
                        ...time,
                        value: action.payload
                      }                     
                    })                    
                  }                  
              }
              default:    
                return state
            }
            
        }