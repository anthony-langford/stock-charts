import styled from 'styled-components';

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 0;
  min-width: calc(100vw - 590px);
  min-height: calc(100vh - 70px);
  @media (max-width: 600px) {
    margin: 70px 0 0;
  }
  margin: 70px 0 0 170px;
  @media (max-width: 738px) {
    padding: 8px 16px 120px;
  }
  @media (min-width: 738px) {
    padding: 32px 180px 120px 40px; 
  }
  background-color: #F7F8FA;
  color: #53627C;
`;

export default ContentWrapper;
