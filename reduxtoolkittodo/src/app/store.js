import {configureStore as ConfigureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';



const store = ConfigureStore({
  reducer: todoReducer,
});

export {store};