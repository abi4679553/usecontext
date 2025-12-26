import React, { useContext } from 'react'
import { UserContext } from './Frondpage'

const Home = () => {
  const { information } = useContext(UserContext);

  return (
    <div>
      <p>{information.name}</p>
    </div>
  )
}

export default Home
