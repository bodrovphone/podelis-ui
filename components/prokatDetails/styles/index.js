import styled from "styled-components";

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const ContactOwnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px auto;

  img {
    width: 30px;
    height: 30px;
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

export default {
  Details,
  ContactOwnerWrapper,
};
