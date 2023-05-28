import React, { Component } from 'react';
import '../styles/Skills.css';
import '../styles/buttons.css';
import SkillsForm from './SkillsForm';
import uniqid from 'uniqid';
import deleteIcon from '../assets/delete.png';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: uniqid(),
          skill: 'Strong leadership and decision-making abilities',
          isFormVisible: false,
        },
        {
          id: uniqid(),
          skill: 'Exceptional public speaking and communication skills',
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

  deleteSkill = (id) => {
    this.setState((prevState) => {
      const updatedArray = prevState.skills.filter((skill) => skill.id !== id);
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
              <ul>
                <li key={uniqid()}>{skill.skill}</li>
                <button
                  key={uniqid()}
                  className='edit-button'
                  onClick={() => this.updateFormVisibility(skill.id, true)}
                >
                  Edit
                </button>
                <button
                  key={uniqid()}
                  className='delete-button'
                  onClick={() => this.delete(skill.id)}
                >
                  <img
                    src={deleteIcon}
                    className='delete-image'
                    alt='delete'
                  ></img>
                </button>
              </ul>
            ) : (
              <SkillsForm
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

export default Skills;
