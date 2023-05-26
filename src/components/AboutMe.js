import React, { Component } from 'react';
import AboutMeForm from './AboutMeForm';
import '../styles/AboutMe.css';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statement: `Joe Biden is a seasoned statesman with a deep commitment to public service. 
      Throughout his career, he has demonstrated a strong dedication to fighting for the rights and well-being of all Americans. 
      As President of the United States, he strives to unite the nation, tackle pressing challenges, and build a brighter future. 
      With his experience, compassion, and resilience, Joe Biden is focused on delivering meaningful change, promoting equity, and restoring America's standing in the world. 
      He embodies leadership that prioritizes empathy, unity, and progress for a better tomorrow.`,
      isFormVisible: false,
    };
  }

  updateStatement = (userStatement) => {
    this.setState({
      statement: userStatement,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { statement, isFormVisible } = this.state;
    return (
      <div>
        <div>
          {!isFormVisible && (
            <div className='statement-container'>
              <div className='statement-details'>
                <div>{statement}</div>
              </div>
              <button onClick={this.updateFormVisibility}>Edit</button>
            </div>
          )}
        </div>
        <div>
          <AboutMeForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateStatement={this.updateStatement}
          />
        </div>
      </div>
    );
  }
}

export default AboutMe;
