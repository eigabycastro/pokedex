import { useState } from 'react'
import PokemonCard from './PokemonCard'

const POKEMONS = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Elétrico',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
  },
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grama / Veneno',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'Água',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
  },
]

function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <section style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#fafaf9'
    }}>

      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
          <input
            type="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Buscar Pokémon..."
            style={{
              width: '100%',
              padding: '0.625rem 1rem',
              fontSize: '0.875rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              backgroundColor: 'white',
              color: '#1f2937',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#6b21a5'
              e.target.style.boxShadow = '0 0 0 3px rgba(107, 33, 165, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>

        <div style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          backgroundColor: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          border: '1px solid #f3e8ff'
        }}>
          Mostrando {listaFiltrada.length} Pokémon(s)
        </div>
      </div>


      {listaFiltrada.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1.25rem'
        }}>
          {listaFiltrada.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      ) : (

        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #f3e8ff'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem'
          }}>
            
          </div>
          <h3 style={{
            color: '#1f2937',
            fontSize: '1rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Nenhum Pokémon encontrado para esta busca.
          </h3>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            Tente buscar por "Pikachu", "Bulbasaur" ou "Squirtle"
          </p>
        </div>
      )}
    </section>
  )
}

export default PokemonList