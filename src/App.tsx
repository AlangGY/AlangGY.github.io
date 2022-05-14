import { Header } from "@components";
import colors from "@constants/colors";
import styled from "@emotion/styled";
import { Home, Post } from "@pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <RootContainer>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </RootContainer>
    </>
  );
}

export default App;

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.primary};
`;
