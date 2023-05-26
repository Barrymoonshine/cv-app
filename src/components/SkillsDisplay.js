import React, { Component } from 'react';
import '../styles/SkillsDisplay.css';
import ToggleSkillsForm from './ToggleSkillsForm';
import uniqid from 'uniqid';

class SkillsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: uniqid(),
          skill: 'President of the United States',
          isFormVisible: false,
        },
      ],
    };
  }

  updateSkill = (id, skillInput) => () => {
    this.setState((prevState) => {
      const updatedArray = prevState.skills.map((skill) => {
        if (skill.id === id) {
          return {
            ...skill,
            skill: skillInput,
          };
        }
        return skill;
      });
      return { skills: updatedArray };
    });
  };

  addSkill = () => {
    const newSkill = {
      id: uniqid(),
      skill: 'New',
      isFormVisible: false,
    };
    this.setState({
      skills: [...this.state.skills, newSkill],
    });
  };

  updateFormVisibilityCallBack = (id, boolean) => () => {
    this.setState((prevState) => {
      const updatedArray = prevState.skills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, isFormVisible: boolean };
        }
        return skill;
      });
      return { skills: updatedArray };
    });
  };

  updateFormVisibility = (id, boolean) => {
    this.setState((prevState) => {
      const updatedArray = prevState.skills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, isFormVisible: boolean };
        }
        return skill;
      });
      return { skills: updatedArray };
    });
  };

  render() {
    const { skills } = this.state;

    return (
      <div className='skills-container'>
        {skills.map((skill) => (
          <div key={uniqid()} className='skill-details'>
            {!skill.isFormVisible ? (
              <div key={uniqid()}>
                <div key={uniqid()}>{skill.skill}</div>
                <button
                  key={uniqid()}
                  onClick={() => this.updateFormVisibility(skill.id, true)}
                >
                  Edit
                </button>
              </div>
            ) : (
              <ToggleSkillsForm
                key={uniqid()}
                skillId={skill.id}
                isFormVisible={skill.isFormVisible}
                updateFormVisibilityCallBack={this.updateFormVisibilityCallBack}
                updateSkill={this.updateSkill}
              />
            )}
          </div>
        ))}
        <button onClick={this.addSkill}>+ Skill</button>
      </div>
    );
  }
}

export default SkillsDisplay;
