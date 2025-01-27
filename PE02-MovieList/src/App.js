import MovieList from './component/MovieList'; 
import './styles/App.css'; 
const App = () => {
  return (
    <div className="app">
      {/* Render the MovieList component */}
      <MovieList />
    </div>
  );
};

export default App;

