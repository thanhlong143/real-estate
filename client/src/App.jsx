import { Outlet } from "react-router-dom"
import { Button } from "./components/ui/button"

const App = () => {
  return (
    <main className="text-primary">
      <Outlet />
    </main>
  )
}

export default App