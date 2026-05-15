import { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('início')

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: 'white',
    padding: '0.75rem 2rem',
    borderBottom: '1px solid #f3e8ff'
  }

  const linkStyle = (isActive) => ({
    color: isActive ? '#6b21a5' : '#6b7280',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: isActive ? '500' : '400',
    padding: '0.5rem 0',
    borderBottom: isActive ? '2px solid #6b21a5' : '2px solid transparent',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  })

  return (
    <nav style={navStyle}>
      <a 
        href="#" 
        style={linkStyle(active === 'início')}
        onClick={() => setActive('início')}
      >Início</a>
      <a 
        href="#" 
        style={linkStyle(active === 'pokémon')}
        onClick={() => setActive('pokémon')}
      >Pokémon</a>
      <a 
        href="#" 
        style={linkStyle(active === 'sobre')}
        onClick={() => setActive('sobre')}
      >Sobre</a>
    </nav>
  )
}

export default Navbar