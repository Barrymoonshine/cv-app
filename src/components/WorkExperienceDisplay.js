import React, { Component } from 'react';
import '../styles/WorkExperienceDisplay.css';
import uniqid from 'uniqid';

class WorkExperienceDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          role: 'President of the United States',
          organisation: 'The White House, Washington, D.C.',
          dateFrom: 'January 2021',
          dateTo: 'Present',
          responsibilities: [
            `Leads the executive branch of the U.S. government, setting the national agenda and guiding policy decisions to address critical issues facing the country.`,
            `Works collaboratively with Congress, forging partnerships to advance legislative priorities, including the American Jobs Plan, the American Families Plan, and the COVID-19 relief packages.`,
            'Promotes unity, social justice, and racial equity, actively addressing systemic inequalities and advocating for reforms in criminal justice, voting rights, and immigration policies.',
          ],
        },
        {
          role: 'Vice President of the United States',
          organisation: 'The White House, Washington, D.C.',
          dateFrom: 'January 2009',
          dateTo: 'January 2017',
          responsibilities: [
            `Played a crucial role in shaping and implementing key policies, including the American Recovery and Reinvestment Act, the Affordable Care Act, and the It's On Us campaign against sexual assault.`,
            `Led diplomatic efforts, engaging with world leaders to advance American interests and strengthen international cooperation on issues such as climate change, nuclear non-proliferation, and global economic stability.`,
            'Served as a trusted advisor to President Barack Obama, providing guidance on critical matters of domestic and foreign policy.',
          ],
        },
      ],
      id: uniqid(),
      isFormVisible: false,
    };
  }

  updateExperience = (userExperience) => {
    this.setState({
      experiences: userExperience,
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { experiences, isFormVisible, id } = this.state;

    let experiencesContainer = null;

    if (isFormVisible) {
      experiencesContainer = null;
    } else {
      experiencesContainer = (
        <div className='experience-container'>
          {experiences.map((experience) => (
            <div className='experience-details'>
              <div key={id}>{experience.role}</div>
              <div key={id}>{experience.organisation}</div>
              <div key={id}>{experience.dateFrom}</div>
              <div key={id}>{experience.dateTo}</div>
              <div>
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={id}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button onClick={this.updateFormVisibility}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div>{experiencesContainer}</div>
      </div>
    );
  }
}

export default WorkExperienceDisplay;
