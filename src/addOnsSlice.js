import { createSlice } from "@reduxjs/toolkit";

export const addOnsSlice = createSlice({
    name: "addOns",
    initialState: [
        {
            img: "https://cdn.pixabay.com/photo/2012/03/01/01/10/business-20031_1280.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_960_720.jpg",
            name: "Speakers",
            cost: 35,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2019/01/11/01/54/public-speaking-3926344_1280.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2017/10/30/19/24/whiteboard-2903269_960_720.png",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },
        {
            img: "https://cdn.pixabay.com/photo/2013/12/29/10/15/directory-235079_960_720.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
        },

    ],


    reducers: {
        incrementAvQuantity: (state, action) => {
            const index = action.payload
            if (state[index] && state[index].quantity === 3) {
                return
            }
            state[index].quantity++
        },
        decrementAvQuantity: (state, action) => {
            const index = action.payload
            if (state[index] && state[index].quantity > 0) {
                state[index].quantity--
            }
        },
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = addOnsSlice.actions;

export default addOnsSlice.reducer;
