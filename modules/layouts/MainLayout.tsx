import { PropsWithChildren } from "react";
import { Header } from "../components/header/Header";
import { css } from "@/styled-system/css";
import { StickyContainer } from "./StickyContainer";

interface Props {}

export function MainLayout({ children }: PropsWithChildren<Props>) {
  return (
    <>
      <StickyContainer asChild>
        <Header />
      </StickyContainer>
      <main className={mainContainerStyle}>{children}</main>
    </>
  );
}

const mainContainerStyle = css({
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: {
    base: 8,
    sm: 16,
    md: "10vw",
  },
  paddingRight: {
    base: 8,
    sm: 16,
    md: "10vw",
  },
});
