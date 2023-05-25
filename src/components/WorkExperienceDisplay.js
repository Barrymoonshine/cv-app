import React, { Component } from 'react';
import '../styles/WorkExperienceDisplay.css';
import ToggleWEForm from './ToggleWEForm';
import uniqid from 'uniqid';

class WorkExperienceDisplay extends Component {
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
      id: uniqid(),
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

  updateFormVisibility = (id, boolean) => () => {
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

  render() {
    const { experiences, id } = this.state;

    return (
      <div className='experience-container'>
        {experiences.map((experience) => (
          <div className='experience-details'>
            {!experience.isFormVisible ? (
              <div>
                <div key={id}>{experience.role}</div>
                <div key={id}>{experience.organisation}</div>
                <div key={id}>{experience.dateFrom}</div>
                <div key={id}>{experience.dateTo}</div>
                <div key={id}>{experience.responsibilities}</div>
                <button
                  key={id}
                  onClick={this.updateFormVisibility(experience.id, true)}
                >
                  Edit
                </button>
              </div>
            ) : (
              <ToggleWEForm
                key={id}
                isFormVisible={experience.isFormVisible}
                id={experience.id}
                updateFormVisibility={this.updateFormVisibility}
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

export default WorkExperienceDisplay;
