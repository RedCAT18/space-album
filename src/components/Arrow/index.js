import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faChevronCircleLeft
} from '@fortawesome/free-solid-svg-icons';

const Position = styled.div`
  margin: 10px;
  color: white;
  :active {
    transform: scale(0.98);
  }
`;

const Arrow = ({ props }) => {
  const iconName =
    props === 'next' ? faChevronCircleRight : faChevronCircleLeft;

  return (
    <Position>
      <FontAwesomeIcon size="3x" icon={iconName} />
    </Position>
  );
};

export default Arrow;

//chevron-circle-left
//chevron-circle-right
