import NavBar from "./NavBar";
import Product from "./Product";
import Order from "./Order";
import "../index.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../actions";

function App() {
    // get products from redux store on component mount for the first time
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className='App'>
            <NavBar />
            <Order />
            <Product />
        </div>
    );
}

export default App;
