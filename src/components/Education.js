import React, { Component } from 'react';
import '../styles/Education.css';
import '../styles/buttons.css';
import EducationForm from './EducationForm';
import uniqid from 'uniqid';
import deleteIcon from '../assets/delete.png';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationalExperience: [
        {
          id: uniqid(),
          institute: 'Syracuse University College of Law',
          subject: 'Juris Doctor (J.D.)',
          grade: 'Pass',
          level: 'Doctorate',
          dateFrom: '1965',
          dateTo: '1968',
          isFormVisible: false,
        },
        {
          id: uniqid(),
          institute: 'University of Delaware',
          subject: 'Bachelor of Arts in Political Science',
          grade: 'Pass',
          level: 'Degree',
          dateFrom: '1962',
          dateTo: '1965',
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
      institute: '',
      subject: '',
      grade: '',
      level: '',
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
                <div key={uniqid()} className='institute'>
                  <div className='head'>{education.institute} : </div>
                  &nbsp; {education.subject}, {education.grade}
                </div>
                <div key={uniqid()} className='level-year'>
                  <div className='head'> {education.level} : </div>
                  &nbsp; {education.dateFrom} - {education.dateTo}
                </div>
                <button
                  key={uniqid()}
                  className='edit-button'
                  onClick={() => this.updateFormVisibility(education.id, true)}
                >
                  Edit
                </button>
                <button
                  key={uniqid()}
                  className='delete-button'
                  onClick={() => this.deleteEducation(education.id)}
                >
                  <img
                    src={deleteIcon}
                    className='delete-image'
                    alt='delete'
                  ></img>
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
        <button className='new-education-button' onClick={this.addEducation}>
          + Education
        </button>
      </div>
    );
  }
}

export default Education;
