import React, { Component } from 'react';
import '../styles/Education.css';
import EducationForm from './EducationForm';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalExperience: [
        {
          id: uniqid(),
          institute: 'President of the United States',
          subject: 'The White House, Washington, D.C.',
          grade: '2021',
          level: 'Present',
          dateFrom: '2021',
          dateTo: 'Present',
          isFormVisible: false,
        },
      ],
    };
  }

  updateEducation =
    (id, instituteInput, subjectInput, gradeInput, levelInput) => () => {
      this.setState((prevState) => {
        const updatedArray = prevState.educationalExperience.map(
          (education) => {
            if (education.id === id) {
              return {
                ...education,
                institute: instituteInput,
                subject: subjectInput,
                grade: gradeInput,
                level: levelInput,
              };
            }
            return education;
          }
        );
        return { educationalExperience: updatedArray };
      });
    };

  addEducation = () => {
    const newEducation = {
      id: uniqid(),
      institute: 'New',
      subject: 'New',
      grade: 'New',
      level: 'New',
      isFormVisible: false,
    };
    this.setState({
      educationalExperience: [
        ...this.state.educationalExperience,
        newEducation,
      ],
    });
  };

  updateFormVisibilityCallBack = (id, boolean) => () => {
    this.setState((prevState) => {
      const updatedArray = prevState.educationalExperience.map((education) => {
        if (education.id === id) {
          return { ...education, isFormVisible: boolean };
        }
        return education;
      });
      return { educationalExperience: updatedArray };
    });
  };

  updateFormVisibility = (id, boolean) => {
    this.setState((prevState) => {
      const updatedArray = prevState.educationalExperience.map((education) => {
        if (education.id === id) {
          return { ...education, isFormVisible: boolean };
        }
        return education;
      });
      return { educationalExperience: updatedArray };
    });
  };

  deleteEducation = (id) => {
    this.setState((prevState) => {
      const updatedArray = prevState.educationalExperience.filter(
        (education) => education.id !== id
      );
      return { educationalExperience: updatedArray };
    });
  };

  render() {
    const { educationalExperience } = this.state;

    return (
      <div className='education-container'>
        {educationalExperience.map((education) => (
          <div key={uniqid()} className='education-details'>
            {!education.isFormVisible ? (
              <div key={uniqid()}>
                <div key={uniqid()}>{education.institute}</div>
                <div key={uniqid()}>{education.subject}</div>
                <div key={uniqid()}>{education.grade}</div>
                <div key={uniqid()}>{education.level}</div>
                <div key={uniqid()}>{education.dateFrom}</div>
                <div key={uniqid()}>{education.dateTo}</div>
                <button
                  key={uniqid()}
                  onClick={() => this.updateFormVisibility(education.id, true)}
                >
                  Edit
                </button>
                <button
                  key={uniqid()}
                  onClick={() => this.deleteEducation(education.id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <EducationForm
                key={uniqid()}
                educationId={education.id}
                isFormVisible={education.isFormVisible}
                updateFormVisibilityCallBack={this.updateFormVisibilityCallBack}
                updateEducation={this.updateEducation}
              />
            )}
          </div>
        ))}
        <button onClick={this.addEducation}>+ Education</button>
      </div>
    );
  }
}

export default Education;
