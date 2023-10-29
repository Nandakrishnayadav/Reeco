import { Printer, Search, Check, X } from "react-feather";

import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 32px;
    margin-top: 8px;
    background-color: white;
`;
export const Categories = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;
export const SearchCategory = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const LeftCategory = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
export const RightCategory = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
export const SearchInput = styled.input`
    /* Space for search icon */
    position: relative;
    height: 30px;
    width: 200px;
    border-radius: 15px;
    padding: 16px 0px 16px 8px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 20px;
    background-color: white;
    border: 1.5px solid hsla(120, 57%, 12%, 1);
    color: hsla(120, 57%, 12%, 1);
    cursor: pointer;
`;

export const PrinterButton = styled(Printer)`
    color: hsla(120, 57%, 12%, 1);
    cursor: pointer;
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
`;
export const SearchIcon = styled(Search)`
    position: absolute;
    right: 8px;
    top: 50%; /* Center it vertically */
    transform: translateY(-50%); /* Centering adjustment */
    color: gray;
    pointer-events: none; /* Makes the icon non-interactive */
    z-index: 1;
`;

export const StatusContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 4px;
`;

export const EditButton = styled.button`
    background-color: transparent;
    border: none;
    color: black;
    text-decoration: underline;
    cursor: pointer;
`;
export const XButton = styled(X)`
    color: red;
    cursor: pointer;
`;
export const CheckButton = styled(Check)`
    color: green;
    cursor: pointer;
`;
export const ProductsCategory = styled.div`
    width: 100%;

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        margin-top: 20px;

        th,
        td {
            padding: 8px 12px;
            border: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Image = styled.img`
    max-width: 50px;
`;

export const ProductName = styled.span``;

export const ProductStatus = styled.span`
    background-color: ${(props) => props.color || "transparent"};
    color: #fff;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
`;
