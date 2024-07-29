import Footer from "./components/Footer"
import Header from "./components/Header"
import ContentCards from "./screens/ContentCards"
import ContentCompany from "./screens/ContentCompany"
import ContentSearch from "./screens/ContentSearch"
import styles from './styles/App.module.css'
function App() {

  return (
    <div className={styles.contProject}>
      <Header />
      <ContentCards />
      <ContentSearch />
      <ContentCompany />
      <Footer />
    </div>

  )
}

export default App
