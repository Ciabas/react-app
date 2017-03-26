import React from 'react';
import styles from 'styled-components';

export default class Home extends React.Component {
  render () {
    return (
      <StyledDiv>
        Hello word!
      </StyledDiv>
    );
  }
}

const StyledDiv = styles.div`
  display: block;
  padding: 6px 12px;
  border: 1px solid #ddd;
  text-align: center;

  &:hover{
    color: red;
  }
`
