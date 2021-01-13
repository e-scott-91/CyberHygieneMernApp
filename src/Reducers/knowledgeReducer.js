const initialState = {
    knowledge: [
      {value: 'Low'}
    ]}


    export default function knowledgeReducer(state = initialState, action) {
        switch (action.type) {
            case 'knowledge/knowledgeUpdated': {
                return {   
                    ...state,
                    knowledge: state.knowledge.map(knowledge => {
                      if (knowledge.value === action.payload) {
                        return knowledge
                      }
                      return {
                        ...knowledge,
                        value: action.payload
                      }                     
                    })                    
                  }                  
              }
              default:    
                return state
            }
            
        }