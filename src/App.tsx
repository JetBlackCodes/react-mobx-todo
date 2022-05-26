import React from 'react';
import './App.css';
import CheckboxesList from './components/CheckboxesList';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Provider } from 'mobx-react';
import TodoStore from './stores/TodoStore';


function App() {
  return (
    <Provider TodoStore={TodoStore}>
        <CheckboxesList />
      {/*<div className="App">*/}
      {/*  <FormGroup>*/}
      {/*    <FormControlLabel control={<Checkbox />} label="Забрать заказ с ozon" />*/}
      {/*    <FormControlLabel disabled control={<Checkbox />} label="Написать приложение с использованием mobX" />*/}
      {/*    <FormControlLabel disabled control={<Checkbox />} label="Полить цветочки" />*/}
      {/*    <FormControlLabel disabled control={<Checkbox />} label="Пропылесосить квартиру" />*/}
      {/*  </FormGroup>*/}
      {/*</div>*/}
    </Provider>
  );
}

export default App;
