import { StyledContainer, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/post">Post</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </StyledContainer>
  );
};

export default Header;
