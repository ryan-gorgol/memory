import React, { useState, createContext } from 'react';
import avocado from '../img/avocado.svg';
import apple from '../img/apple-1.svg';
import banana from '../img/banana.svg';
import broccoli from '../img/broccoli.svg';
import carrot from '../img/carrot.svg';
import cheese from '../img/cheese-1.svg';
import cherries from '../img/cherries.svg';
import doughnut from '../img/doughnut-1.svg';

export const DeckContext = createContext();

export const DeckProvider = (props) => {
  const [food, setFood] = useState([
    { img: apple, name: 'apple', selected: false },
    { img: avocado, name: 'avocado', selected: false },
    { img: banana, name: 'banana', selected: false },
    { img: broccoli, name: 'broccoli', selected: false },
    { img: carrot, name: 'carrot', selected: false },
    { img: cheese, name: 'cheese', selected: false },
    { img: cherries, name: 'cherries', selected: false },
    { img: doughnut, name: 'doughnuts', selected: false },
  ]);
  return (
    <DeckContext.Provider value={[food, setFood]}>
      {props.children}
    </DeckContext.Provider>
  );
};
