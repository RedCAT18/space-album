import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { api } from '../api/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 60px auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  h1 {
    font-size: 28px;
    font-weight: 100;
    color: white;
  }
`;

const Date = styled.p`
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 18px;
  line-height: 1.8;
  color: white;
  margin-top: 10px;
`;

const Photo = styled.img`
  max-height: 768px;
  margin-bottom: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Video = styled.object`
  width: 720px;
  height: 480px;
  margin-bottom: 40px;
`;

const Home = () => {
  const [photo, setPhoto] = useState({});

  const fetchData = async () => {
    await api.getAPod().then(res => {
      setPhoto(res);
      console.log(res);
    });
  };

  const RenderMedia = () => {
    return photo.media_type === 'image' ? (
      <Photo src={photo?.url} />
    ) : (
      <Video data={photo?.url} />
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {photo && photo.url ? (
        <Content>
          {RenderMedia()}
          <Title>
            <h1>{photo?.title}</h1>
          </Title>
          <Date>{photo?.date}</Date>
        </Content>
      ) : (
        <img src="./assets/reload.svg" alt="loading" />
      )}
    </Container>
  );
};

export default Home;
