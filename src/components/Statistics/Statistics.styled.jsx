import styled from '@emotion/styled';

const randomBgColor = ({ label }) => {
  switch (label) {
    case '.docx':
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    case '.pdf':
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    case '.mp3':
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    case '.psd':
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    case '.img':
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    default:
      return '#ffff';
  }
};

export const Section = styled.section`
  border: 2px solid black;
  background-color: azure;
  padding-top: 16px;
  width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  width: 70px;
  height: 60px;
  background-color: ${randomBgColor};
`;
