import { Outlet } from 'react-router-dom'

const MainBody = () => {
  return (
    <main
      data-testid="main"
      className="z-0 flex w-full grow flex-col bg-gradient-to-r from-yellow-200 to-green-200"
    >
      <Outlet />
    </main>
  )
}

export default MainBody
