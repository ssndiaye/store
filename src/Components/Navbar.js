import React, { Component } from 'react' ;
import {Link} from 'react-router-dom' ;
import logo from '../logo.svg' ;
import styled from 'styled-components' ;


export default  class NavBar extends Component {

    render() {
        return (
            <div>
               
               <nav className="navbar navbar-expand-sm bg-primary navbar-light px-sm-5">
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand"  />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5"> 
                            <Link to="/" className="nav-link">
                            <h3 className="h3">Products</h3>
                            </Link>
                        </li>
                    </ul>
                        <Link to="/Cart" className="ml-auto">
                            <ButtonContainer>cart </ButtonContainer>
                        </Link>
                        
                   
               </nav>
              

            </div>
        );
    }

}

const ButtonContainer = styled.button`
text-transform : Capitalize;
font-size : 1.4 rem;
background : transparent;
border : 0.05rem solid  var(--lightBlue);
border-color : var(--lightBlue);
cursor:pointer ;
transition: all 0.5s ease-int-out;
&:hover{
background : var(--lightBlue);
color : red; 
} 
`;