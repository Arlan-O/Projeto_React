import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserFeed from './pages/UserFeed';

function App() {
  return (
    <div className="app-layout">
      <Header />
      
      <main className="main-content">
        <UserFeed />
      </main>

      <Footer />
    </div>
  );
}

export default App;