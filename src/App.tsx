import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import colors from "./constants/colors";
import Home from "./pages/Home";
import Post from "./pages/Post";

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
