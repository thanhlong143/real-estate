import { Outlet } from "react-router-dom"
import { Button } from "./components/ui/button"

const App = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default App