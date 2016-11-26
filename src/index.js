/**
 * Created by matthias on 26.11.16.
 */
import {render} from 'react-dom';
import React, {Component} from 'react';
require('../styles.sass');
import  PokemonList  from './PokemonList';

class PokeApp extends Component{
    render(){
        return <div className="pokeapp">
            <h1> The Kanto PokeDex! </h1>
            <PokemonList/>
        </div>;
    }
}
render(<PokeApp/>,document.getElementById('app'))