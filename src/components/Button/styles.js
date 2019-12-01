import styled from "styled-components";
import * as mixins from "./mixins";

export const Container = styled.button`
  color: #fff;
  height: 40px;
  padding: 0 15px;

  ${mixins.buttonColors};
`;
