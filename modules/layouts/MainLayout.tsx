import { PropsWithChildren } from "react";
import { Header } from "../components/Header";

interface Props {
}

export function MainLayout({ children }: PropsWithChildren<Props>) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}