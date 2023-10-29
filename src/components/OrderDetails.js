import React from "react";
import {
    CloudDrizzle,
    Codesandbox,
    Crosshair,
    Feather,
    FileText,
    Gift,
} from "react-feather";

import {
    OrderData,
    OrderItem,
    OrderItems,
    OrderTitle,
    Wrapper,
} from "./styled/OrderDetailsStyles";

export default function OrderDetails() {
    return (
        <Wrapper>
            <OrderItems>
                <OrderItem>
                    <OrderTitle>Supplies</OrderTitle>
                    <OrderData>East Coast fruits & vegetables</OrderData>
                </OrderItem>
                <OrderItem>
                    <OrderTitle>Shipping Date</OrderTitle>
                    <OrderData>Thu, Feb 10</OrderData>
                </OrderItem>
                <OrderItem>
                    <OrderTitle>Total</OrderTitle>{" "}
                    <OrderData>$15,028.3</OrderData>
                </OrderItem>
                <OrderItem>
                    <OrderTitle>Category</OrderTitle>
                    <OrderData>
                        <CloudDrizzle />
                        <Codesandbox />
                        <Crosshair />
                        <Feather />
                        <Gift />
                        <FileText />
                    </OrderData>
                </OrderItem>
                <OrderItem>
                    <OrderTitle>Department</OrderTitle>
                    <OrderData>300-444-678</OrderData>
                </OrderItem>
                <OrderItem>
                    <OrderTitle>Status</OrderTitle>
                    <OrderData>Awaiting Approval</OrderData>
                </OrderItem>
            </OrderItems>
        </Wrapper>
    );
}
