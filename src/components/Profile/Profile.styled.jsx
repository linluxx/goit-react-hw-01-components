import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  border: 2px solid black;
  background-color: beige;
  width: 400px;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
`;

export const ProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 50%;
  border: 0.5px solid #666565;
`;

export const Text = styled.p`
  margin: 0;
  font-style: italic;
  font-size: 17px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const ProfileStatsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: center;
  padding: 0px;
  width: 100%;
`;
export const ProfileStatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #666565;
  width: 100%;
  height: 100px;
  background-color: burlywood;
  font-weight: 700;
`;
