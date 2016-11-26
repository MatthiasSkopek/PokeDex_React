/**
 * Created by matthias on 26.11.16.
 */
import {render} from 'react-dom';
import React, {Component} from 'react';
export default class Pokemon extends Component{
    render(){
        const {pokemon,id} = this.props;
        return <div className="pokemon--species">
            <div className="pokemon--species--container">
                <div className="pokemon--species--sprite">
                    <img src={`/public/sprites/${id}.png`}/>
                </div>
            </div>
        </div>
    }
}