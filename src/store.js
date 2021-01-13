import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './Reducers/deviceReducer';
import timeReducer from './Reducers/timeReducer';
import knowledgeReducer from './Reducers/knowledgeReducer';

const store = configureStore({
    reducer: {      
      devices: deviceReducer,
      time: timeReducer,
      knowledge: knowledgeReducer
    }
  })
  
  export default store;