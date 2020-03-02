import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Text = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const NoResults = () => {
  return (
    <Container>
      <Text>Nothing yet...! :/</Text>
    </Container>
  );
};

export default NoResults;
