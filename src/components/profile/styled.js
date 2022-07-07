import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  // text-align:center;
  align-items:flex-start;
`;

export const WrapperInfoUser = styled.div`
  display:flex;
  // text-align:center;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-between;
  height:auto;
  margin-left:16px;
h1{
  font-size:32px;
  font-weight: bold;
}
h3{
  font-size:24px;
  font-weight: bold;
}
h4{
  font-size:18px;
  font-weight: bold;
}
`;

export const WrapperStatusCount = styled.div`
  display:flex;
  align-items:center;
  div{
    margin:8px;
    text-align:center;
}
`;

export const WrapperUsername = styled.div`
  display:flex;
  // text-align:center;
  align-items:center;
  justify-content:space-between;
a{
  text-decoration:none;
  color: black;
  border:none;
  margin-left:8px;
}
`;
export const WrapperImage = styled.img`
  border-radius:50%;
  width: 200px;
  margin:8px;
  
`;
