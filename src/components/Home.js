import React, { useContext } from 'react'
import { UserContext } from './Frondpage'

const Home = () => {
  const { information } = useContext(UserContext);

  return (
    <div>
      <p>{information.gender}</p>
    </div>
  )
}

export default Home
