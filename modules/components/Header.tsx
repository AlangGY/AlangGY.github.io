import { css } from "@/styled-system/css"

interface Props {

}

export function Header({}:Props) {
  return (
    <header className={headerStyle}>
      Header
    </header>
  )
}

const headerStyle = css({
  bg: 'red.300',
  color: 'red'
})