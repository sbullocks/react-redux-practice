import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'Counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state -1,
    },
});

// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//             case 'DECREMENT':
//                 return state - 1;
//                 default:
//                     return state;
//     }
// };

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// export default counterReducer;