import React, { Component } from 'react';
import '../styles/WorkExperience.css';
import '../styles/buttons.css';
import WorkExperienceForm from './WorkExperienceForm';
import uniqid from 'uniqid';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: uniqid(),
          role: 'President of the United States',
          organisation: 'The White House, Washington, D.C.',
          dateFrom: '2021',
          dateTo: 'Present',
          responsibilities: `Leads the executive branch of the U.S. government, setting the national agenda and guiding policy decisions to address critical issues facing the country.
            Works collaboratively with Congress, forging partnerships to advance legislative priorities, including the American Jobs Plan, the American Families Plan, and the COVID-19 relief packages.
            Promotes unity, social justice, and racial equity, actively addressing systemic inequalities and advocating for reforms in criminal justice, voting rights, and immigration policies.`,
          isFormVisible: false,
        },
        {
          id: uniqid(),
          role: 'Vice-President of the United States',
          organisation: 'The White House, Washington, D.C.',
          dateFrom: '2009',
          dateTo: '2017',
          responsibilities: `Dedicated and experienced public servant with a proven track record of leadership and achievement. 
          Eight years of exceptional service as the Vice-President of the United States under President Barack Obama, where I played a pivotal role in shaping and implementing key policies that fostered economic growth, strengthened national security, and promoted social justice. 
          Adept at navigating complex political landscapes and forging bipartisan collaborations to drive meaningful change. Committed to upholding the values of integrity, empathy, and inclusivity.`,
          isFormVisible: false,
        },
      ],
    };
  }

  updateExperinces =
    (
      id,
      roleInput,
      organisationInput,
      dateFromInput,
      dateToInput,
      responsibilitiesInput
    ) =>
    () => {
      this.setState((prevState) => {
        const updatedArray = prevState.experiences.map((experience) => {
          if (experience.id === id) {
            return {
              ...experience,
              role: roleInput,
              organisation: organisationInput,
              dateFrom: dateFromInput,
              dateTo: dateToInput,
              responsibilities: responsibilitiesInput,
            };
          }
          return experience;
        });

        return { experiences: updatedArray };
      });
    };

  addExperience = () => {
    const newExperience = {
      id: uniqid(),
      role: '',
      organisation: '',
      dateFrom: '',
      dateTo: '',
      responsibilities: ``,
    };
    this.setState({
      experiences: [...this.state.experiences, newExperience],
    });
  };

  updateFormVisibilityCallBack = (id, boolean) => () => {
    this.setState((prevState) => {
      const updatedArray = prevState.experiences.map((experience) => {
        if (experience.id === id) {
          return { ...experience, isFormVisible: boolean };
        }
        return experience;
      });
      return { experiences: updatedArray };
    });
  };

  updateFormVisibility = (id, boolean) => {
    this.setState((prevState) => {
      const updatedArray = prevState.experiences.map((experience) => {
        if (experience.id === id) {
          return { ...experience, isFormVisible: boolean };
        }
        return experience;
      });
      return { experiences: updatedArray };
    });
  };

  deleteExperience = (id) => {
    this.setState((prevState) => {
      const updatedArray = prevState.experiences.filter(
        (experience) => experience.id !== id
      );
      return { experiences: updatedArray };
    });
  };

  render() {
    const { experiences } = this.state;

    return (
      <div className='work-experience-container'>
        {experiences.map((experience) => (
          <div key={uniqid()} className='work-experience-details'>
            {!experience.isFormVisible ? (
              <div key={uniqid()}>
                <div key={uniqid()} className='experience-first-line'>
                  <div key={uniqid()} className='role'>
                    {experience.role}
                  </div>
                  <div key={uniqid()}>{experience.organisation}</div>
                </div>
                <div key={uniqid()} className='experience-second-line'>
                  <div key={uniqid()}>{experience.dateFrom}</div> &nbsp;-&nbsp;
                  <div key={uniqid()}>{experience.dateTo}</div>
                </div>
                <div key={uniqid()} className='responsibilities-details'>
                  <div key={uniqid()}>{experience.responsibilities}</div>
                </div>
                <button
                  key={uniqid()}
                  className='edit-button'
                  onClick={() => this.updateFormVisibility(experience.id, true)}
                >
                  Edit
                </button>
                <button
                  key={uniqid()}
                  onClick={() => this.deleteExperience(experience.id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <WorkExperienceForm
                key={uniqid()}
                experienceId={experience.id}
                isFormVisible={experience.isFormVisible}
                updateFormVisibilityCallBack={this.updateFormVisibilityCallBack}
                updateExperinces={this.updateExperinces}
              />
            )}
          </div>
        ))}
        <button onClick={this.addExperience} className='new-experience-button'>
          + Work experience
        </button>
      </div>
    );
  }
}

export default WorkExperience;
