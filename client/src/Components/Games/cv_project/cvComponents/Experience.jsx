import uniqid from "uniqid";
import React, { Component } from "react";
import "./styles/experience.scss";


class Experience extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item, items, handleSubmit, handleTitleInput, handleDescriptionInput, handleCompanyInput, handleFromInput, handleToInput, handleEdit, addNewExp, handleDelete} = this.props;
        const {job_title, description, company, from, to, id, editing} = item;
        return (
            <div className="ExperienceContent">
                    {
                        items.map((item)=> {
                            const {job_title, description, company, from, to, id, editing} = item;
                            return (
                                <div className="experience-display" key={id}>
                                    <div className="exp-title-div"><strong className="exp-title">Job Title:  </strong>{job_title}</div>
                                    <div className="exp-title-div"><strong className="exp-title">Description:  </strong>{description}</div>
                                    <div className="exp-title-div"><strong className="exp-title">Company:  </strong>{company}</div>
                                    <div className="exp-title-div"><strong className="exp-title">From:  </strong>{from}</div>
                                    <div className="exp-title-div"><strong className="exp-title">To:  </strong>{to}</div>
                                    <div className="exp-button-divs">
                                        <div className="exp-button-div">
                                            <button className="exp-button" onClick={() => handleEdit(item.id)}>Edit</button>
                                        </div>
                                        <div className="exp-button-div">
                                            <button className="exp-button" onClick={() => handleDelete(item.id, false)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        )
                    }
                {(editing || addNewExp) &&
                    <div className="experience-input">
                        <div className="experience-line">
                            <div className="experience-column">
                                <input className="job-title-input" value={job_title} placeholder="Job Title" onChange={handleTitleInput}></input>
                            </div>
                            <div className="experience-column">
                                <input className="company-input" value={company} placeholder="Company" onChange={handleCompanyInput}></input>
                            </div>
                        </div>
                        <div className="experience-line">
                            <textarea className="job-description-input" value={description} placeholder="Description" onChange={handleDescriptionInput}></textarea>
                        </div>
                        <div className="experience-line">
                            <div className="experience-column">
                                <input className="experience-from" value={from} placeholder="From" onChange={(e, type) => handleFromInput(e, type=false)}></input>
                            </div>
                            <div className="experience-column">
                                <input className="experience-to" value={to} placeholder="To" onChange={(e, type) => handleToInput(e, type=false)}></input>
                            </div>
                        </div>
                        <div className="experience-line experience-save-div">
                            <button className="experience-save" onClick={(e, type) => handleSubmit(e, type=false)}>Save</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Experience;