import React,{Component} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
//import { KeyboardReturnSharp } from "@material-ui/icons";

class Header extends Component {
    render(){
        return(
            <Nav>
                <NavLeft>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    <BrandText>
                        <h1>Mail-U</h1>
                    </BrandText>
                </NavLeft>
                <NavMid className='header__middle'>
                    <SearchIcon/>
                    <InputField>
                    </InputField>
                    
                </NavMid>
                <NavRight>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar/>
                </NavRight>
            </Nav>
        )
    }
}

//<input placeholder="Search Mail" type="text"/>
//<ArrowDropDownIcon className="header__inputCaret"/>
//background: #BFFF00;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background: #BFFF00;

`;
const NavLeft = styled.div`
    display: flex;
    align-items: center;
`;
const BrandText = styled.div`
    object-fit: contain;
    height: 70px;
    margin-left: 2.5rem;
    font-weight: bold;
    font-size: 1.075rem;

    @media (max-width: 768px) {
        margin-left: 4px;
    } 
`;

const NavMid = styled.div`
    display: flex;
    flex: 0.7;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`;

const InputField = styled.div`
  border: none;
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: medium;
  background-color: transparent;
`;
const NavRight = styled.div`
  display: flex;
  padding-right: 20px;
  justify-content: space-between;
`;


export default Header;