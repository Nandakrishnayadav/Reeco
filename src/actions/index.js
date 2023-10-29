import productsData from "../db/db.json";
// fetch products from the db.json file and dispatch them to the redux store
export const fetchProducts = () => {
    return {
        type: "FETCH_PRODUCTS",
        payload: productsData.products,
    };
};
// update the status of the product with the given id
export const setApproved = (id) => {
    return {
        type: "SET_APPROVED",
        payload: id,
    };
};

export const setMissing = (id) => {
    return {
        type: "SET_MISSING",
        payload: id,
    };
};

export const setMissingUrgent = (id) => {
    return {
        type: "SET_MISSING_URGENT",
        payload: id,
    };
};
