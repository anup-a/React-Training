import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import generatePalettes from './colorHelpers'
import PaletteList from './PaletteList';

function App() {

  const getPaletteFromId = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  };

  return (
    <Switch>
      <Route exact path="/" render={() => <PaletteList palette={seedColors} />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalettes(getPaletteFromId(routeProps.match.params.id))} />} />
    </Switch>

  );
}

export default App;


/* <div className="App">
      <Palette palette={generatePalettes(seedColors[7])} />
    </div> */