const initialState = {
    devices: [
      {name: 'smartLock', selected: false},
      {name: 'smartSpeaker', selected: false},
      {name: 'chatBot', selected: false},
      {name: 'smartVacuum', selected: false}
    ]}
  

export default function deviceReducer(state = initialState, action) {
    switch (action.type) {
        case 'devices/deviceUpdated': {

            return {   
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                devices: state.devices.map(device => {
                  // If this isn't the todo item we're looking for, leave it alone
                  if (device.name !== action.payload) {
                    return device
                  }
        
                  // We've found the todo that has to change. Return a copy:
                  return {
                    ...device,
                    // Flip the completed flag
                    selected: !device.selected
                    
                  }
                  
                })
                
              }
              
          }
          default:

            return state
        }
        
    }