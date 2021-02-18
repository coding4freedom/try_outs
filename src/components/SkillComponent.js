import React from 'react';
import Rating from "./RatingComponent";

export default function Skill(props) {
    const {skills, points, handleChange} = props;
    /* const assessment = props.points.map((point, index) => {
        return <option key={index}>{point}</option>;
    }) */

    const moves = props.skills.map(skill => {
        return(
            <div className="row">
                <div className="col">
                    <label type='text'>{skill}</label>                    
                </div>
                <div className="col"> 
                    <Rating points={points} handleChange={handleChange} />
                </div>
            </div>             
        );
            
    });

    return (
        <div className='container'>                               
           {moves}
        </div>
    )
}

{/* <div className='col'>
        <select onChange={props.handleChange}>
            {assessment}
        </select>
        <label type="text">{props.lab0}</label>
    </div> */}     