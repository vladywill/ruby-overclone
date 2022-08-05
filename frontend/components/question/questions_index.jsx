import React from 'react';
import { Link } from 'react-router-dom';
import QuestionRow from './question_row';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionRow = this.getQuestionRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  getQuestionRow() {
    return (
      <div className='questions-index-rows'>
        {this.props.questions &&
          this.props.questions.map((question) => (
            <QuestionRow key={question.id} question={question} />
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <div className='questions-index-container'>

        <div className='page-header-container'>
          <h1 className='page-header'>Top Questions</h1>
          <Link className='AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
        </div>

        <div>
          {this.getQuestionRow()}
        </div>


      </div>
    );
  }

}

export default QuestionsIndex;

