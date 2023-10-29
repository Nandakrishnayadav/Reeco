import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: hsla(165, 49%, 23%, 1);
    padding: 8px 32px;
    margin-left: auto;
    margin-right: auto;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 16px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 85%;
    justify-content: space-between;
`;

export const NavItem = styled.li`
    color: white;
`;
export const Logo = styled(NavItem)`
    font-weight: bold;
    font-size: 24px;
    font-family: "Skranji", cursive;
`;
export const NavigationLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
`;

export const NavigationRight = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
`;
export const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;
