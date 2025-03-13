import { Outlet } from "react-router-dom"
import PomodoroNav from "./PomodoroNav"

const PomodoroLayout = () => {
  return (
    <>
      <PomodoroNav />
      <Outlet/>
    </>
  )
}

export default PomodoroLayout;