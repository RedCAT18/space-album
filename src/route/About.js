import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 768px;
  margin: 80px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  padding: 40px;
  color: white;
`;

const Text = styled.div`
  padding: 40px;
  margin-top: 40px;
  color: white;
  h1 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Photo = styled.div`
  flex: 1;
  margin-right: 20px;

  img {
    max-width: 260px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
`;

const Sentence = styled.div`
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 18px;
  line-height: 1.8;
`;

const Explanation = styled.p`
  flex: 3;
  font-size: 14px;
  line-height: 1.8;
  padding: 10px;
  text-indent: 10px;
`;

const About = () => {
  const [photo, setPhoto] = useState({});

  const fetchData = async () => {
    await api.getAPod().then(res => {
      setPhoto(res);
      // console.log(res);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>
        <h1>About</h1>
      </Title>
      <Text>
        <Sentence>
          Hello. This page is for showing beautiful photos, videos and
          knowledges of space and nature from NASA. You can search images that
          you want to see. Enjoy!
          <br />
        </Sentence>
      </Text>
      <Text>
        <h1>About Today's main</h1>
        {photo ? (
          <Contents>
            <Photo>
              <img src={photo.url} alt={photo.title} />
            </Photo>
            <Explanation>{photo.explanation}</Explanation>
          </Contents>
        ) : (
          <img src="./assets/reload.svg" alt="loading" />
        )}
      </Text>
    </Container>
  );
};

export default About;
