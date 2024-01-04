import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { theMovieSearchAPI } from 'services/api';
import css from './styles/HomePage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('query');
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchParams.get('query') ?? '';

  const [arr, setArr] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await theMovieSearchAPI(`?query=${query}`);
        setArr(response);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };
    fetchData();
  }, [query]);

  const handleSearch = () => {
    setSearchParams({ query: searchQuery });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <>
      <input
        className={css.input}
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search movie..."
      />
      <button className={css.button_search} onClick={handleSearch}>
        Search
      </button>

      <ul className={css.list}>
        {arr.map(({ id, title }) => (
          <li key={id} className={css.item}>
            <Link className={css.link} to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;

