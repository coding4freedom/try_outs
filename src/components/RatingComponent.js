import React from "react";

export default function Rating({ points, handleChange}) {
    const assessment = points.map((point, index) => {
        return <option key={index}>{point}</option>;
    })
    return (
        <div className='col'>
            <select onChange={handleChange}>
                {assessment}
            </select>
            {/* <label type="text">{props.lab0}</label> */}
        </div>
    )
}
