import React from "react";
import { ChevronRight } from "react-feather";

import {
    BottomGroup,
    Button,
    ButtonGroup,
    Items,
    OrderNumber,
    TopGroup,
    TopLink,
    UserItem,
    Wrapper,
} from "./styled/OrderStyles";

export default function Order() {
    return (
        <Wrapper>
            <Items>
                <TopGroup>
                    <UserItem>
                        <TopLink>Orders</TopLink>
                        <ChevronRight size={20} />
                    </UserItem>
                    <TopLink>Order 3567ABC</TopLink>
                </TopGroup>
                <BottomGroup>
                    <OrderNumber>Order 3567ABC</OrderNumber>
                    <ButtonGroup>
                        <Button>Back</Button>
                        <Button>Approve Order</Button>
                    </ButtonGroup>
                </BottomGroup>
            </Items>
        </Wrapper>
    );
}
