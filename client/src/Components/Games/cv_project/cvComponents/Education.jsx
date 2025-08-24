import React from "react";
import "./styles/education.scss";
import uniqid from "uniqid";

class Education extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {items, item, handleSubmit, handleSchoolInput, handleDegreeInput, handleFromInput,handleToInput, handleEdit, handleDelete, addNewEdu} = this.props;
        const {school, degree, from, to, id, editing} = item;
        return (
            <div className="EducationContent">
                    {items.map((item) => {
                        const {school, degree, from, to, id} = item;
                        return (
                            <div className="education-display">
                                <div className="education-info-display" key={id}>
                                    <div className="edu-title-div"><strong className="edu-title">School:  </strong>{school}</div>
                                    <div className="edu-title-div"><strong className="edu-title">Degree:  </strong>{degree}</div>
                                    <div className="edu-title-div"><strong className="edu-title">From:  </strong>{from}</div>
                                    <div className="edu-title-div"><strong className="edu-title">To:  </strong>{to}</div>
                                    <div className="edu-button-divs">
                                        <div className="edu-button-div">
                                            <button className="education-input-button" onClick={() => handleEdit(item.id)}>Edit</button>
                                        </div>
                                        <div className="edu-button-div">
                                            <button className="education-input-button" onClick={() => handleDelete(item.id, true)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}  
                {(addNewEdu || editing) && 
                    <div className="education-input">
                        <div className="education-line">
                            <div className="line-input-div">
                                <input className="input education-school-input" value={school} placeholder="School" onChange={handleSchoolInput} type="text"></input>
                            </div>
                            <div className="line-input-div">
                                <input className="input education-degree-input" value={degree} placeholder="Degree" onChange={handleDegreeInput}></input>
                            </div>
                        </div>
                        <div className="education-line">
                            <div className="line-input-div">
                                <input className="input education-from-input" value={from} placeholder="From" onChange={(e, type) => handleFromInput(e, type=true)}></input>
                            </div>
                            <div className="line-input-div">
                                <input className="input education-to-input" value={to} placeholder="To" onChange={(e, type) => handleToInput(e, type=false)}></input>
                            </div>
                        </div>
                        <div className="education-buttons">
                            <button className="education-save" onClick={(id, type) => handleSubmit(id, type=true)}>Save</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Education;