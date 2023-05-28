import React, { Component } from 'react';
import '../styles/EducationForm.css';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instituteInput: '',
      subjectInput: '',
      gradeInput: '',
      dateFromInput: '',
      dateToInput: '',
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      instituteInput,
      subjectInput,
      gradeInput,
      dateFromInput,
      dateToInput,
    } = event.target;
    const { updateEducation, updateFormVisibilityCallBack, educationId } =
      this.props;
    updateEducation(
      educationId,
      instituteInput.value,
      subjectInput.value,
      gradeInput.value,
      dateFromInput.value,
      dateToInput.value
    )();
    updateFormVisibilityCallBack(educationId, false)();
  };

  render() {
    const { isFormVisible } = this.props;
    const {
      instituteInput,
      subjectInput,
      gradeInput,
      dateFromInput,
      dateToInput,
    } = this.state;

    return (
      <div>
        {isFormVisible && (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className='top-inputs'>
                <label>Institute:</label>
                <input
                  type='text'
                  name='instituteInput'
                  value={instituteInput}
                  onChange={this.handleInput}
                  required
                />
                <label>Subject :</label>
                <input
                  type='text'
                  name='subjectInput'
                  value={subjectInput}
                  onChange={this.handleInput}
                  required
                />
                <label>Grade :</label>
                <input
                  type='text'
                  name='gradeInput'
                  value={gradeInput}
                  onChange={this.handleInput}
                  required
                />
              </div>
              <div className='bottom-inputs'>
                <label>Date from:</label>
                <input
                  type='text'
                  name='dateFromInput'
                  value={dateFromInput}
                  onChange={this.handleInput}
                  placeholder='YYYY'
                  required
                />
                <label>Date to:</label>
                <input
                  type='text'
                  name='dateToInput'
                  value={dateToInput}
                  onChange={this.handleInput}
                  placeholder='YYYY'
                  required
                />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default EducationForm;
