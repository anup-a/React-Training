import React from 'react';
import seedColors from './seedColors';
import Palette from './Palette';
import { Route, Switch } from 'react-router-dom';
import PaletteForm from './PaletteForm';
import generatePalettes from './colorHelpers'
import PaletteList from './PaletteList';
import ColorShadesPalette from './ColorShadesPalette';

function App() {

  const getPaletteFromId = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  };

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList palette={seedColors} {...routeProps} />} />
      <Route exact path="/palette/new" render={() => <PaletteForm />} />
      <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalettes(getPaletteFromId(routeProps.match.params.id))} />} />
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => <ColorShadesPalette palette={generatePalettes(getPaletteFromId(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId} />} />
    </Switch>

  );
}

export default App;


/* <div className="App">
      <Palette palette={generatePalettes(seedColors[7])} />
    </div> */