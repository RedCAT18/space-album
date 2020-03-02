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

const Arrow = props => {
  const { direct, handlePage, pages } = props;
  // console.log(direct, handlePage, pages);
  const movePage = () => {
    // console.log(direct, 'currentPage:', pages);
    return direct === 'prev' ? handlePage(pages - 1) : handlePage(pages + 1);
  };

  const iconName =
    props.direct === 'next' ? faChevronCircleRight : faChevronCircleLeft;

  return (
    <Position onClick={movePage}>
      <FontAwesomeIcon size="3x" icon={iconName} />
    </Position>
  );
};

export default Arrow;

//chevron-circle-left
//chevron-circle-right
