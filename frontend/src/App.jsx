import { React, useState } from 'react'
import { Container, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { ClassNames } from '@emotion/react';
import Hero from './components/Hero';
const App = () => {
  const [users, setUsers] = useState([]);
  const [Mode, setMode] = useState(false);
  return (
    <div className={`${Mode ? " text-black bg-slate-300" : null}`}>
      <Navbar setUsers={setUsers} Mode={Mode} setMode={setMode} />
      <Hero users={users} setUsers={setUsers} Mode={Mode} />
    </div>
  )
}

export default App
