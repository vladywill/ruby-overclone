import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import QuestionRow from './question_row';

function QuestionsIndex(props) {

  // useEffect(() => {
  //   props.fetchQuestions;
  // })

  return (
    <div className='questions-index-container'>
      <div className='questions-index-header-container'>
        <h1 className='questions-index-header'>Top Questions</h1>
        <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
      </div>
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
    </div>
  );

}

export default QuestionsIndex;

// class QuestionsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.askQuestionButton = this.askQuestionButton.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchQuestions();
//   }

//   componentWillUnmount() {

//   }

//   askQuestionButton() {
//     this.props.history.push('/questions/new')
//   }

//   render() {
//     const {currentUser} = this.props
//     return (
//       <div className='questions-index-container'>
//         <div className='questions-index-header-container'>
//           <h1 className='questions-index-header'>Top Questions</h1>
//           <Link className='questions-index-AskQuestion-btn' to={'/questions/new'}>Ask&nbsp;Question </Link>
//         </div>
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//         <QuestionRow />
//       </div>
//     );
//   }


// }

// export default QuestionsIndex;
