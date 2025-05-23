import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl">This is App site</h1>
      <Outlet/>
    </>
  )
}

export default App
