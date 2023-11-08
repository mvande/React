"use client"
import CountButton from "./CountButton/CountButton"
import GitHub from "./GitHub/GitHub"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
    return (
      <>
        <h1>Hello, Next.js!</h1>
        <CountButton num="1"/>
        <CountButton num="2"/>
        <GitHub />
        <SearchBar />
      </>
    )
  }