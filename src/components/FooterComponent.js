import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Styled from "styled-components";

const StyledDiv = Styled.div`
  color: red;   
  background-color: yellow;
`;

const StyledTitle = Styled.h1`
  font-size: 30px;  
`;

console.log(FontAwesome);
class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">

                                    <a href="/">
                                        <FontAwesome name="twitter"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">
                                        <FontAwesome name="facebook"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">
                                        <FontAwesome name="github"/>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
                        </div>
                    </div>
                </div>
                <StyledDiv>
                    <StyledTitle>
                        Text
                    </StyledTitle>
                </StyledDiv>
            </footer>
        );
    }
}

export default FooterComponent;