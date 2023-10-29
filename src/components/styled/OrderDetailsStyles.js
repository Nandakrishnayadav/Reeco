import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    padding: 8px 32px;
    background-color: white;
    gap: 32px;
`;
export const OrderItems = styled.div`
    display: flex;
    width: 100%;
    text-align: left;
    gap: 16px;
`;
export const OrderItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-wrap: break-word;
    padding: 10px;
    border-right: 1px solid #ccc; // Add right border to each OrderItem
    &:last-child {
        border-right: none; // Remove the right border from the last OrderItem
    }
`;

export const OrderTitle = styled.div`
    color: darkgray;
`;

export const OrderData = styled.div`
    font-weight: bold;
    display: flex;
    gap: 4px;
    width: fit-content;
`;
