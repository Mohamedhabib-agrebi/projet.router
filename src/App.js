import { useState } from 'react';
import './App.css';
import NavMovie from './Components/NavMovie';
import ListMovie from './Components/ListMovie';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MovieDescription from './Components/MovieDescription';

function App() {
  const [movies,setMovies] = useState(
    [
      {title : 'Toy Boy', description :'À Marbella sur la Costa del Sol, le stripteaser Hugo Beltrán, est mis en liberté conditionnelle après avoir passé sept ans en prison, accusé davoir tué le mari de sa riche maîtresse. Désormais libre, Hugo veut faire toute la lumière sur ce meurtre.',posterURL:'https://resizing.flixster.com/tkszB14kredN6jcXPTonsoxhaDE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17528271_b_v8_ab.jpg',rating : 5, id : Math.random()},
      {title : 'Journal d un gigolo', description :'La vie d un escort boy bascule lorsqu il s immisce dans les affaires familiales d une cliente et enfreint une règle pourtant capitale : ne jamais tomber amoureux.',posterURL:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Diary_of_a_Gigolo_tv_series_poster.jpg/220px-Diary_of_a_Gigolo_tv_series_poster.jpg',rating : 3, id : Math.random()},
      {title : 'welcome to eden', description :'Zoa et quatre autres jeunes sont invités à une fête exclusive sur une île secrète, sponsorisée par une nouvelle boisson. Cependant, le prétendu paradis qui les attend n est pas celui auquel ils s attendaient.',posterURL:'https://m.media-amazon.com/images/M/MV5BMTNiZTJlNTUtYTZiOC00MmQ2LTkzYTctMDcwMGJmNGEwYmU2XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg',rating : 5, id : Math.random()},
      {title : 'finding ola', description :'Après un événement troublant, Ola décide de se lancer dans un voyage de découverte de soi tout en essayant de faire de son mieux pour élever deux enfants et joindre les deux bouts.',posterURL:'https://m.media-amazon.com/images/M/MV5BMjA2NDhjYmQtYTZkNS00YzVhLThjODAtMjM4ZjdiNjc4ZjNiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',rating : 2, id : Math.random()},
  
    ]
  )
  const [search,setSearch] = useState('')
  const [etoil,setEtoil] = useState(0)
  return (
    <div>
      <NavMovie/>
      
      <Routes>
        <Route path='/' element={<Home movies={movies}/>}/>
        <Route path='/movielist' element={ <ListMovie movies={movies} search={search} etoil={etoil} setSearch={setSearch} setEtoil={setEtoil} setMovies={setMovies}/>}/>
        <Route path='/moviedescription/:id' element={<MovieDescription movies={movies}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
