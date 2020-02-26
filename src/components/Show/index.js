import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 100;
  margin-top: 10px;
  color: #0f2027;
  margin: 20px auto;
`;

const Description = styled.div`
  padding: 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  color: #0f2027;
  line-height: 1.8;
  text-indent: 20px;
  font-size: 16px;
  font-weight: 100;
`;

const Show = props => {
  console.log(props);
  return (
    <Frame>
      <img src={props.links[0].href} alt={props.data[0].title} />
      <Title>{props.data[0].title}</Title>
      <Description>{props.data[0].description_508}</Description>
    </Frame>
  );
};

export default Show;
