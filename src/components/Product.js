import styled from "styled-components";

import OrderDetails from "./OrderDetails";
import ProductDetails from "./ProductDetails";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 32px;
    margin-top: 8px;
    background-color: whitesmoke;
`;

export default function Product() {
    return (
        <Wrapper>
            <OrderDetails />
            <ProductDetails />
        </Wrapper>
    );
}
