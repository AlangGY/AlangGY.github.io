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
      <main className={css({})}>{children}</main>
    </>
  );
}
