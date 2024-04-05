import { Outlet } from 'react-router-dom'

const MainBody = (props) => {
  const setCartCounter = props.setCartCounter
  return (
    <main
      data-testid="main"
      className="z-0 flex w-full grow flex-col bg-gradient-to-r from-yellow-200 to-green-200"
    >
      <Outlet context={setCartCounter} />
    </main>
  )
}

export default MainBody
