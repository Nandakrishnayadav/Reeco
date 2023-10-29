import React from "react";
import {
    CheckButton,
    EditButton,
    XButton,
    Image,
    ProductInfo,
    ProductName,
    StatusContainer,
    ProductStatus,
    ButtonContainer,
} from "./styled/ProductDetailsStyles";

import { getStatusColor } from "../utils/index";

export default function ProductTableRow({
    product,
    handleApprove,
    handleOpenModal,
}) {
    return (
        <tr key={product.id}>
            <td>
                <ProductInfo>
                    <Image
                        src={product.imageUrl}
                        alt={product.productName}
                        width={50}
                    />
                    <ProductName>{product.productName}</ProductName>
                </ProductInfo>
            </td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.total}</td>
            <td>
                <StatusContainer>
                    <ProductStatus color={getStatusColor(product.status)}>
                        {product.status}
                    </ProductStatus>
                    <ButtonContainer>
                        <CheckButton
                            onClick={() => handleApprove(product.id)}
                        />
                        <XButton onClick={() => handleOpenModal(product.id)} />
                        <EditButton>Edit</EditButton>
                    </ButtonContainer>
                </StatusContainer>
            </td>
        </tr>
    );
}
