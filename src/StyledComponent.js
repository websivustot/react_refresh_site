import React from 'react';
import Styled from "styled-components";

const StyledDiv = Styled.div`
  color: red;   
  background-color: yellow;
`;

const StyledTitle = Styled.h1`
  font-size: 30px;  
`;

class StyledComponent extends React.Component {

    render() {
        return (
            <StyledDiv>
                <StyledTitle>
                    Text
                </StyledTitle>
            </StyledDiv>
        )
    }
}

export default StyledComponent;


