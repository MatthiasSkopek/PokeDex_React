import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Pokemon from './Pokemon';
export default class PokemonList extends Component{
    constructor(props){
        super(props);
        this.sate ={
            species: [],
            fetched: false,
            loading: false,
        };
    }
    componentWillMount(){
        this.setState({
            loading: true
        });
        fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res=>res.json())
            .then(response=>{
                this.setState({
                    species : response.results,
                    loading : true,
                    fetched : true
                });
            });
    }
    render(){
        const {fetched, loading, species} = this.state;
        let content ;
        if(fetched){
            content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
        }else if(loading && !fetched){
            content = <p> Loading ...</p>;
        }
        else{
            content = <div/>;
        }
        return  <div>
            {content}
        </div>;
    }
}