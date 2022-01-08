import styled from "styled-components";

export const TechnologiesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.light};
  margin-top: 40px;
  border-radius: 20px;
`;

export const TechnologiesHeader = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export const TechnologiesIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const TechnologyIcon = styled.img`
  height: 50px;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 24px;
  }
`;
