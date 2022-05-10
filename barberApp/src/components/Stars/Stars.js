import React from 'react';
import styled from 'styled-components/native';
import StarEmpty from '../../assets/star_empty.svg';
import StarFull from '../../assets/star_full.svg';
import StarHalf from '../../assets/star_half.svg';

const StarArea = styled.View`
  flex-direction: row;
`;

const StarView = styled.View`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #73737373;
`;

export default ({stars, showAssess}) => {
  let valueSTars = [0, 0, 0, 0, 0];

  return (
    <StarArea>
      {valueSTars.map((p, quantity) => (
        <StarView key={quantity}>
          {p === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
          {p === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
          {p === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}
      {showAssess && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
