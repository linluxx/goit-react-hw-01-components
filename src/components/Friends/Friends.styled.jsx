import styled from '@emotion/styled';
export const FriendsUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  border: 2px solid black;
  width: 400px;
  padding: 15px 0 15px 0;
  background-color: lavender;
`;

export const FriendsItem = styled.li`
  text-align: center;
  width: 75px;
  position: relative;
`;
export const FriendsStat = styled.span`
  position: absolute;
  left: 0;
  top: 30%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;
export const FriendsAvatar = styled.img`
  width: 40px;
  height: 40px;
`;
export const FriendsName = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
