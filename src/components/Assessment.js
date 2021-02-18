import React, { Component } from 'react';
import Skill from "./SkillComponent";

export default class Assess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lab0: '0',
            lab1: '',
            lab2: '',
            lab3: '',
            lab4: '',
            passed: 20,
            points: [0, 1, 2, 3, 4],
            skills: [
                'bump pass',
                'setting',
                'serving',
                'communication',
                'spiking',
                'team work',
                'vertical jump'
            ]                    
        }
    }

    handleChange = (evt) => {
       this.setState({lab0: evt.target.value});
    }

    render() {
        /* const assessment = this.state.points.map(point => {
            return <option value={point}>{point}</option>;
        }) */

        return(
            <div className='container'>
               <Skill 
                skills={this.state.skills}
                points={this.state.points}
                handleChange={this.handleChange}
               />
            </div>
        );
    }
}


/* function Assessment(props) {

    const assessment = props.points.map((point, index) => {
        return <option key={index}>{point}</option>;
    })

    const moves = props.skills.map(skill => {
        return <label type='text'>{skill}</label>
    });

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {moves}
                </div>
                <div className='col'>
                    <select onChange={props.handleChange}>
                        {assessment}
                    </select>
                    <label type="text">{props.lab0}</label>
                </div>                    
            </div> 
        </div>
    )
} */

