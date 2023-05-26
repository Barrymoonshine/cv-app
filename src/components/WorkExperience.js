import React, { Component } from 'react';
import '../styles/WorkExperience.css';
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
      role: 'new',
      organisation: 'new',
      dateFrom: 'new',
      dateTo: 'new',
      responsibilities: `new`,
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
      const updatedArray = prevState.experiences.map((experience) => {
        if (experience.id === id) {
          console.log(experience);
          return { experience: null };
        }
        return experience;
      });
      return { experiences: updatedArray };
    });
  };

  render() {
    const { experiences } = this.state;

    return (
      <div className='experience-container'>
        {experiences.map((experience) => (
          <div key={uniqid()} className='experience-details'>
            {!experience.isFormVisible ? (
              <div key={uniqid()}>
                <div key={uniqid()}>{experience.role}</div>
                <div key={uniqid()}>{experience.organisation}</div>
                <div key={uniqid()}>{experience.dateFrom}</div>
                <div key={uniqid()}>{experience.dateTo}</div>
                <div key={uniqid()}>{experience.responsibilities}</div>
                <button
                  key={uniqid()}
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
        <button onClick={this.addExperience}>+ Work experience</button>
      </div>
    );
  }
}

export default WorkExperience;
