import React from "react";
import General from "./cvComponents/General.jsx";
import Education from "./cvComponents/Education.jsx";
import Experience from "./cvComponents/Experience.jsx";
import uniqid from "uniqid";
import "./cvComponents/styles/app.scss";
import ProjectNavbar from "../../ProjectNavbar/ProjectNavbar";


class CVLetter extends React.Component{
  constructor(){
    super()
    this.state = {
      education_items: [],
      education:{
        school: '',
        degree: '',
        from: '',
        to: '',
        id: uniqid(),
        editing: false,
      },
      addNewEdu: false,
      experience_items: [],
      experience: {
        job_title: '',
        description: '',
        company: '',
        from: '',
        to: '',
        id: '',
        editing: '',
      },
      addNewExp: false,
    }
  }
  handleSubmit = (e, type) =>{
    console.log(this.state, type);
    e.preventDefault();
    if (type){
      const newedu = {
        school: this.state.education.school,
        degree: this.state.education.degree,
        from: this.state.education.from,
        to: this.state.education.to,
        id: this.state.education.id,
        editing: false,
      }
      const updatedItems = [...this.state.education_items, newedu]
      this.setState({
          education_items: updatedItems,
          education: {
            school: '',
            degree: '',
            from: '',
            to: '',
            id: uniqid(),
            editing: false,
          },
          addNewEdu: false
      })
    }
    else{
      const newexp = {
        job_title: this.state.experience.job_title,
        description: this.state.experience.description,
        company: this.state.experience.company,
        from: this.state.experience.from,
        to: this.state.experience.to,
        id: this.state.experience.id,
        editing: false,
      }
      let n = this.state.experience_items.length;
      for (let i = 0; i < n; i++){

      }
      const updatedItems = [...this.state.experience_items, newexp]
      this.setState({
          experience_items: updatedItems,
          experience: {
            job_title: '',
            description: '',
            company: '',
            from: '',
            to: '',
            id: uniqid(),
            editing: false,
          },
          addNewExp: false
      })
    }
  }
  handleSchoolInput = (e) =>{
    console.log(this.state.education.editing);

    this.setState({
      education:{
        school: e.target.value,
        degree: this.state.education.degree,
        from: this.state.education.from,
        to: this.state.education.to,
        id: this.state.education.id,
        editing: this.state.education.editing
      }
    })
  }
  handleDegreeInput = (e) =>{
    this.setState({
      education:{
        school: this.state.education.school,
        degree: e.target.value,
        from: this.state.education.from,
        to: this.state.education.to,
        id: this.state.education.id,
        editing: this.state.education.editing
      }
    })
  }
  handleFromInput = (e, type) =>{
    if (type){
      this.setState({
        education:{
          school: this.state.education.school,
          degree: this.state.education.degree,
          from: e.target.value,
          to: this.state.education.to,
          id: this.state.education.id,        
          editing: this.state.education.editing
        }
      })
    }else{
      console.log('from editing')
      this.setState({
        experience:{
          job_title: this.state.experience.job_title,
          description: this.state.experience.description,
          company: this.state.experience.company,
          from: e.target.value,
          to: this.state.experience.to,
          id: this.state.experience.id,
          editing: this.state.experience.editing
        }
      })
    }
  }
  handleToInput = (e, type) =>{
    console.log("EDITING: ", this.state.education.editing);
    if (type){
      this.setState({
        education:{
          school: this.state.education.school,
          degree: this.state.education.degree,
          from: this.state.education.from,
          to: e.target.value,
          id: this.state.education.id,
          editing: this.state.education.editing
        }
      })
    }else{
      this.setState({
        experience:{
          job_title: this.state.experience.job_title,
          description: this.state.experience.description,
          company: this.state.experience.company, 
          from: this.state.experience.from,
          to: e.target.value,
          id: this.state.experience.id,
          editing: this.state.experience.editing
        }
      })
    }
  }
  addNewButton = (type) =>{
    if (type){
      this.setState({
        addNewEdu: true,
      }) 
    }else{
      this.setState({
        addNewExp: true,
      }) 
    }
    
  }
  handleEdit = (id) =>{
    
    const filteredItems = this.state.education_items.filter(item => item.id !== id);
    const selectedItem = this.state.education_items.find(item => item.id === id);
    this.setState({
      education_items: filteredItems,
      education: {
        school: selectedItem.school,
        degree: selectedItem.degree,
        from: selectedItem.from,
        to: selectedItem.to,
        id: selectedItem.id,
        editing: true
      }
    })
  }
  handleExpEdit = (id) => {
    const filteredExpItems = this.state.experience_items.filter(item=> item.id!==id);
    const selectedExpItem = this.state.experience_items.find(item => item.id === id);
    this.setState({
      experience_items: filteredExpItems,
      experience: {
        job_title: selectedExpItem.job_title,
        description: selectedExpItem.description,
        company: selectedExpItem.company,
        from: selectedExpItem.from,
        to: selectedExpItem.to,
        id: selectedExpItem.id,
        editing: true,
      }
    })
  }
  
  handleCompanyInput = (e) => {
    this.setState({
      experience: {
        job_title: this.state.experience.job_title,
        description: this.state.experience.description,
        company: e.target.value,
        from: this.state.experience.from,
        to: this.state.experience.to,
        id: this.state.experience.id,
        editing: this.state.experience.editing,
      }
    })
  }
  handleTitleInput = (e) => {
    this.setState({
      experience: {
        job_title: e.target.value,
        description: this.state.experience.description,
        company: this.state.experience.company,
        from: this.state.experience.from,
        to: this.state.experience.to,
        id: this.state.experience.id,
        editing: this.state.experience.editing,
      }
    })
  }
  handleDescriptionInput = (e) => {
    this.setState({
      experience: {
        job_title: this.state.experience.job_title,
        description: e.target.value,
        company: this.state.experience.company,
        from: this.state.experience.from,
        to: this.state.experience.to,
        id: this.state.experience.id,
        editing: this.state.experience.editing,
      }
    })
  }
  handleDelete = (id, type) => {
    console.log(id, type);
    if (type){
      const filtered_items = this.state.education_items.filter((item) => item.id !== id)
      this.setState({
        education_items: filtered_items, 
      })
    }else{
      const filtered_items = this.state.experience_items.filter((item) => item.id !== id)
      this.setState({
        experience_items: filtered_items, 
      })
    }
   
  }
  render(){
    return(
      <div className="cvLetter-background">
        <ProjectNavbar/>
        <div className="main">
          <div className="left">

          </div>
          <div className="cvv">
            <h3 className="title">General Information</h3>
            <General/>
            <hr/>
            <h3 className="title">Education</h3>
            <Education items={this.state.education_items}
            item={this.state.education}
            handleSubmit={(e, type) => this.handleSubmit(e, type=true)} 
            handleSchoolInput={this.handleSchoolInput}
            handleDegreeInput={this.handleDegreeInput}
            handleFromInput={(e, type) => this.handleFromInput(e, type=true)}
            handleToInput={(e, type) => this.handleToInput(e, type=true)}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            addNewEdu={this.state.addNewEdu}
            />
            {
             ( !this.state.addNewEdu && !this.state.education.editing) && 
              <div className="add">
                <button onClick={() => this.addNewButton(true)}>Add Education</button>
              </div>
            }
            
            <hr/>
            <h3 className="title">Experience</h3>
            <Experience items={this.state.experience_items}
            item={this.state.experience}
            items={this.state.experience_items}
            handleSubmit={(e, type) => this.handleSubmit(e, type=false)}
            handleTitleInput={this.handleTitleInput}
            handleDescriptionInput={this.handleDescriptionInput}
            handleCompanyInput={this.handleCompanyInput}
            handleFromInput={(e, type) => this.handleFromInput(e, type=false)}
            handleToInput={(e, type) => this.handleToInput(e, type=false)}
            handleEdit={this.handleExpEdit}
            addNewExp={this.state.addNewExp}
            handleDelete={this.handleDelete}/>
            {
              !this.state.addNewExp && !this.state.experience.editing && 
              <div className="add">
                <button className="add-education" onClick={() => this.addNewButton(false)}>Add Experience</button>
              </div>
            }
            
            <div className="bottom-space">

            </div>
          </div>
          <div className="right">

          </div>
        </div>
      </div>
    )
  }
}
export default CVLetter;