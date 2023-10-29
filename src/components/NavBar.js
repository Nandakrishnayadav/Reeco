import React from "react";
import { ShoppingCart, ChevronDown } from "react-feather";
import {
    Logo,
    Wrapper,
    NavItem,
    NavList,
    NavigationLeft,
    NavigationRight,
    UserMenu,
} from "./styled/NavBarStyles";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

const EmptyPage = () => <div>Empty Page</div>;

export default function NavBar() {
    return (
        <Router>
            <Wrapper>
                <NavList>
                    <NavigationLeft>
                        <Logo>Reeco</Logo>
                        <Link to="/store">
                            <NavItem>Store</NavItem>
                        </Link>
                        <Link to="/orders">
                            <NavItem>Orders</NavItem>
                        </Link>
                        <Link to="/analytics">
                            <NavItem>Analytics</NavItem>
                        </Link>
                    </NavigationLeft>
                    <NavigationRight>
                        <NavItem>
                            <ShoppingCart />
                        </NavItem>
                        <UserMenu>
                            <NavItem>Hello, James</NavItem>
                            <NavItem>
                                <ChevronDown />
                            </NavItem>
                        </UserMenu>
                    </NavigationRight>
                </NavList>
            </Wrapper>

            <Routes path="/store" component={EmptyPage} />
            <Routes path="/orders" component={EmptyPage} />
            <Routes path="/analytics" component={EmptyPage} />
        </Router>
    );
}
