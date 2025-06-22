import { ReactNode } from "react"

type containerProps = {
    children : ReactNode
}

function Container({children} : containerProps) {
  return (
    <div className="max-w-[1440px] mx-auto px-16">{children}</div>
  )
}

export default Container