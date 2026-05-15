import Header from './components/Header'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{
      backgroundColor: '#fafaf9',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <Navbar />
      <main style={{ flex: 1 }}>
        <PokemonList />
      </main>
      <Footer />
    </div>
  )
}

export default App