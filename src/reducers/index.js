const initialState = {
    products: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        // Change the status of the product with the given id to "Approved"
        case "SET_APPROVED":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, status: "Approved" }
                        : product
                ),
            };
        // Change the status of the product with the given id to "Missing"
        case "SET_MISSING":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, status: "Missing" }
                        : product
                ),
            };
        // Change the status of the product with the given id to "Missing-Urgent"
        case "SET_MISSING_URGENT":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, status: "Missing-Urgent" }
                        : product
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
