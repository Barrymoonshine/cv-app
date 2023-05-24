import React, { Component } from 'react';
import '../styles/WorkExperienceDisplay.css';
import ToggleWEForm from './ToggleWEForm';
import uniqid from 'uniqid';

class WorkExperienceDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: {
        role: 'President of the United States',
        organisation: 'The White House, Washington, D.C.',
        dateFrom: '2021',
        dateTo: 'Present',
        responsibilities: `Leads the executive branch of the U.S. government, setting the national agenda and guiding policy decisions to address critical issues facing the country.
            Works collaboratively with Congress, forging partnerships to advance legislative priorities, including the American Jobs Plan, the American Families Plan, and the COVID-19 relief packages.
            Promotes unity, social justice, and racial equity, actively addressing systemic inequalities and advocating for reforms in criminal justice, voting rights, and immigration policies.`,
      },
      id: uniqid(),
      isFormVisible: false,
    };
  }

  updateExperinces = (
    roleInput,
    organisationInput,
    dateFromInput,
    dateToInput,
    responsibilitiesInput
  ) => {
    this.setState({
      experiences: {
        role: roleInput,
        organisation: organisationInput,
        dateFrom: dateFromInput,
        dateTo: dateToInput,
        responsibilities: responsibilitiesInput,
      },
    });
  };

  updateFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    const { experiences, isFormVisible } = this.state;

    let experiencesContainer = null;

    if (isFormVisible) {
      experiencesContainer = null;
    } else {
      experiencesContainer = (
        <div className='experience-container'>
          <div className='experience-details'>
            <div>{experiences.role}</div>
            <div>{experiences.organisation}</div>
            <div>{experiences.dateFrom}</div>
            <div>{experiences.dateTo}</div>
            <div>{experiences.responsibilities}</div>
          </div>
          <button onClick={this.updateFormVisibility}>Edit</button>
        </div>
      );
    }
    return (
      <div>
        <div>{experiencesContainer}</div>
        <div>
          <ToggleWEForm
            isFormVisible={isFormVisible}
            updateFormVisibility={this.updateFormVisibility}
            updateExperinces={this.updateExperinces}
          />
        </div>
      </div>
    );
  }
}

export default WorkExperienceDisplay;
