const { configureStore, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    name: '',
    totalPrice: 0,
    productAmount: 0,
    productPrice: 125.00,
    addedToCart: false,
    amountAddedToCart: 0,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        close: false,
        img: undefined
    },
    reducers: {
        openOrCloseModal: (state, action) => {
            state.close = !state.close;
            state.img = action.payload;

        },
        changePictureInModal: (state, action) => {
            state.img = action.payload;
        }
    }
})

const cartSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addToAmount: (state, action) => {
            state.productAmount += 1;
            state.totalPrice = state.totalPrice + (state.productPrice * state.amountAddedToCart);
        },
        reduceAmount: (state, action) => {
            if(state.productAmount === 0) {
                return;
            }

            state.productAmount -= 1;
            state.totalPrice = state.totalPrice + (state.productPrice * state.amountAddedToCart);
        },
        addedToCart: (state, action) => {
            if(state.productAmount === 0) {
                state.addedToCart = false;
                return;
            }
            
            state.addedToCart = true;
            state.amountAddedToCart = state.amountAddedToCart + state.productAmount;
            state.productAmount = 0;
        },
        deleteItemsInCart: (state, action) => {
            state.addedToCart = false;
            state.amountAddedToCart = 0;
            state.totalPrice = 0;
            state.productAmount = 0;
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        modal: modalSlice.reducer
    } 
})

export default store;

export const cartActions = cartSlice.actions;
export const modalActions = modalSlice.actions