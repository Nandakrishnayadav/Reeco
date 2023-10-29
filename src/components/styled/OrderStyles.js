import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    padding: 8px 32px;

    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Items = styled.div`
    width: 85%;
    text-align: left;
`;

export const TopGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
`;

export const TopLink = styled.span`
    cursor: pointer;
    color: gray;
    &:nth-child(2) {
        text-decoration: underline;
    }
`;

export const UserItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const BottomGroup = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
`;

export const OrderNumber = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 20px;
    background-color: hsla(165, 49%, 23%, 1);
    border: 1.5px solid hsla(165, 49%, 23%, 1);
    color: white;
    &:first-child {
        background-color: white;
        color: hsla(165, 49%, 23%, 1);
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
`;
