function Header() {
  return (
    <header style={{
      backgroundColor: 'white',
      padding: '1.25rem 2rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      borderBottom: '2px solid #e9d5ff'
    }}>
      <h1 style={{
        color: '#6b21a5',
        textAlign: 'center',
        margin: 0,
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: '600',
        letterSpacing: '-0.5px'
      }}>
        Pokédex
      </h1>
    </header>
  )
}

export default Header