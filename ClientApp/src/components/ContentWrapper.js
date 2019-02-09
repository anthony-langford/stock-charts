import styled from 'styled-components';

const ContentWrapper = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  z-index: 0;
  min-width: calc(100vw - 590px);
  min-height: calc(100vh - 70px);
  @media (max-width: 600px) {
    margin: 70px 0 0;
  }
  margin: 70px 0 0 170px;
  @media (max-width: 600px) {
    padding: 8px 16px 120px;
  }
  @media (min-width: 700px) {
    padding: 32px 140px 120px 40px; 
  }
  align-items: center;
  background-color: #F7F8FA;
  color: #53627C;
`;

export default ContentWrapper;
