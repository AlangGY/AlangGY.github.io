import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import colors from "../../constants/colors";

const showLine = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }

`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5vw;
  background-color: ${colors.white};
  column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.green};
  }

  &.active {
    position: relative;
    color: ${colors.blue};
    &::after {
      position: absolute;
      display: block;
      height: 1px;
      animation: 0.5s ${showLine} ease forwards;
      background-color: ${colors.blue};
      content: "";
    }
  }
`;
