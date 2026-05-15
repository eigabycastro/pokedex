function PokemonCard({ id, name, type, imageUrl }) {
  const typeColors = {
    'Elétrico': '#fef3c7',
    'Grama': '#dcfce7',
    'Veneno': '#f3e8ff',
    'Água': '#dbeafe'
  }

  const typeTextColors = {
    'Elétrico': '#92400e',
    'Grama': '#166534',
    'Veneno': '#6b21a5',
    'Água': '#1e40af'
  }

  const getTypeColor = (type) => {
    if (type.includes('Grama')) return typeColors['Grama']
    if (type.includes('Veneno')) return typeColors['Veneno']
    return typeColors[type] || '#f9fafb'
  }

  const getTypeTextColor = (type) => {
    if (type.includes('Grama')) return typeTextColors['Grama']
    if (type.includes('Veneno')) return typeTextColors['Veneno']
    return typeTextColors[type] || '#374151'
  }

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '1.25rem',
      textAlign: 'center',
      transition: 'all 0.25s ease',
      cursor: 'pointer',
      border: '1px solid #f3e8ff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)'
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(107, 33, 165, 0.08)'
      e.currentTarget.style.borderColor = '#e9d5ff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.03)'
      e.currentTarget.style.borderColor = '#f3e8ff'
    }}>
      <div style={{
        backgroundColor: '#faf9fe',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem'
      }}>
        <img 
          src={imageUrl} 
          alt={name} 
          style={{
            width: '96px',
            height: '96px',
            objectFit: 'contain'
          }}
        />
      </div>
      <h2 style={{
        color: '#1f2937',
        fontSize: '1rem',
        margin: '0.5rem 0',
        fontWeight: '500'
      }}>
        #{String(id).padStart(3, '0')} · {name}
      </h2>
      <p style={{
        display: 'inline-block',
        backgroundColor: getTypeColor(type),
        color: getTypeTextColor(type),
        padding: '0.25rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '500',
        margin: '0.25rem 0 0 0'
      }}>
        {type}
      </p>
    </div>
  )
}

export default PokemonCard