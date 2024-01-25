import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from './hooks/useDispatch';
import { fetchPhotoInfo } from './actions/photos.actions';
import { useSelector } from 'react-redux';
import { RootState } from './reducers';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state:RootState) => {
    return state.photos.data
  });
  console.log(data);
  React.useEffect(() => {
    dispatch(fetchPhotoInfo());
  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            data && data.map((photo, index) => <li key={index}>{photo.title}</li>)
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
