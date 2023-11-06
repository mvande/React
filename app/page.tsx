"use client"
import CountButton from "./CountButton"
import GitHub from "./GitHub"

export default function Page() {
    return (
      <>
        <h1>Hello, Next.js!</h1>
        <CountButton num="1"/>
        <CountButton num="2"/>
        <GitHub />
      </>
    )
  }