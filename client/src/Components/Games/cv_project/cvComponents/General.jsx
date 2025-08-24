
import React from "react"
import "./styles/general.scss";

class General extends React.Component{
  constructor(){
    super();
    this.state = {
        saved: false,
        display: {
            first_name_display: '',
            last_name_display: '',
            email_display: '',
            linkedin_display: '',
            github_display: '',
        },
        first_name: '',
        last_name: '',
        email: '',
        linkedin: '',
        github: ''
    }
  }
  handleFirstNameInput = (e) =>{
      this.setState({
          first_name: e.target.value,
      })
  }
  handleLastNameInput = (e) =>{
      this.setState({
          last_name: e.target.value,
      })
  }
  handleEmailInput = (e) => {
      this.setState({
          email: e.target.value,
      })
  }
  handleEdit = (e) =>{
      this.setState({
          saved: !this.state.saved,
          first_name: this.state.display.first_name_display,
          last_name: this.state.display.last_name_display,
          email: this.state.display.email_display,
          linkedin: this.state.display.linkedin_display,
          github: this.state.display.github_display
      })
  }
  handleLinkedinInput = (e) =>{
    this.setState({
        linkedin: e.target.value,
    })
  }
  handleGithubInput = (e) =>{
    this.setState({
        github: e.target.value,
    })
  }
  handleSubmit = () => {
    this.setState({
        saved: !this.state.saved,
        display:{
            first_name_display: this.state.first_name,
            last_name_display: this.state.last_name,
            email_display: this.state.email,
            linkedin_display: this.state.linkedin,
            github_display: this.state.github,
        },
        first_name: '',
        last_name: '',
        email: '',
        linkedin: '',
        github: '',
    })
  }
  render(){
    return(
        <div className="GeneralContent">
            {  this.state.saved && 
                <div className="generalInfo">
                    <div class="name">
                        <div className="generalOutput first_name"><strong>First name: </strong>{this.state.display.first_name_display}</div>
                        <div className="generalOutput last_name"><strong>Last name: </strong>{this.state.display.last_name_display}</div>
                    </div>
                    <div className="generalOutput email"><strong>Email:  </strong>{this.state.display.email_display}</div>
                    <div></div>
                    <div className="generalOutput linkedin"><strong>LinkedIn: </strong>{this.state.display.linkedin_display}</div>
                    <div className="generalOutput github"><strong>GitHub: </strong>{this.state.display.github_display}</div>
                    <button className="generalOutput edit" onClick={this.handleEdit}>Edit</button>
                    <br/>
                </div>
            }
            
            {!this.state.saved && 
                <div className="generalInput">
                    <div className="namesInput">
                        <div className="namesInput-div">
                            <input className="input firstnameInput" placeholder="First name" onChange={this.handleFirstNameInput} value={this.state.first_name}></input>
                        </div>
                        <div className="namesInput-div">
                            <input className="input lastnameInput" placeholder="Last name" onChange={this.handleLastNameInput} value={this.state.last_name}></input>
                        </div>
                    </div>
                    <div className="emailInput-div input-div">
                        <input className="input emailInput" placeholder="Email" onChange={this.handleEmailInput} value={this.state.email}></input>
                    </div>
                    <div className="linkedinInput-div input-div">
                        <input className="input linkedinInput" placeholder="Linkedin" onChange={this.handleLinkedinInput} value={this.state.linkedin}></input>
                    </div>
                    <div className="githubInput-div input-div">
                        <input className="input githubInput" placeholder="Github" onChange={this.handleGithubInput} value={this.state.github}></input>
                    </div>
                    <div className="saveinfo-div">
                        <button onClick={this.handleSubmit} id="save">Save</button>
                    </div>
                </div>
            }
        </div>
        
    )
  }
}

export default General;