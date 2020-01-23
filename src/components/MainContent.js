import React, { Component } from 'react';
import '../styles/MainContent.css';
import data from '../data';


export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            people: data,
            index: 0
        };
    }

    increment = () => {
        if (this.state.index < this.state.people.length - 1) {
          this.setState({ index: this.state.index + 1 });
        } else {
          this.setState({ index: 0 });
        }
      };

    render() {
        let {people, index} = this.state;
        return (
            <section>
                <main>
            <h1 class='numbers'>
             {index + 1} / {people.length}
        </h1>
        <h1>
        {people[index].name.first} , {people[index].name.last}
        </h1>
            <h2>
                From: {people[index].city}, {people[index].country}
                </h2>
            <h2>Job Title: {people[index].title}</h2>
            <h2>Employer: {people[index].employer}</h2>
        
            <h2>Favorite Movies:</h2>
                <ol>
                    <li>{people[index].favoriteMovies[0]}</li>
                    <li>{people[index].favoriteMovies[1]}</li>
                    <li>{people[index].favoriteMovies[2]}</li>
                </ol>

             
                <div id='button_container'>
                     <button id='previous' onClick={() => this.setState({index: index - 1})}>
                     {'< '}Previous</button>
                     <button id='next'onClick={() => this.setState({index: index + 1})}>
                     Next{' >'}</button>
                </div>
                </main>
            </section>
        )
    }
}