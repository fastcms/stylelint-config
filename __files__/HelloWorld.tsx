import styled from '@emotion/styled';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  border-radius: 4px;
  color: black;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: white;
  }
`;

export const HelloWorld: React.FC = () => {
  return <Button>Hello World</Button>;
};
