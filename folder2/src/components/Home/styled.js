import styled from '@emotion/styled';

export const P = styled.p`
  color: ${({ theme }) => theme.palette.primary[500]};
  background-color: yellow;
`;

export const StyledRawButton = styled.button`
  padding: 32px;
  background-color: steelblue;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
