import React,{useState} from "react";
import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon } from './Navbar.elements'
import {FaBars} from "react-icons";
const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false)
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <FaBattleNet />
                    <p>Delloite</p>
                    <p>Gama Academy</p>
                </LogoContainer>
                <MobileIcon onClick = {() => setShowMobileMenu(!showMobileMenu) }>
                  <FaBars />
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                            Home
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Serviços
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Quemsomos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            Blog
                        </MenuItemLink>
                    </MenuItem>
                </Menu>

            </Wrapper>
        </Container>

    );
};
export default Navbar