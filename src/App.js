
import AddMovie from "./AddMovie";
import MovieContext from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";



function App() {
  return (
    <MovieContext>
    <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
        
      </div>
  </MovieContext>
  );
}

export default App;
