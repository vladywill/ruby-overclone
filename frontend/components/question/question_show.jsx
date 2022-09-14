import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import moment from 'moment';


class QuestionShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      body: "",
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.changeVote = this.changeVote.bind(this);
    this.votingButtons = this.votingButtons.bind(this);
    this.editButton = this.editButton.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchQuestion(this.props.questionId);
  }

  componentWillUnmount() {
    this.props.removeEntity();
  }

  componentDidUpdate() {
    if (this.state.votes === undefined && this.props.votes !== undefined) {
      const currentUserVote = this.props.currentUserVote ? this.props.currentUserVote : 0;
      this.setState({
        votes: this.props.votes - currentUserVote,
        currentUserVote,
      });
    }
  }

  calculateTimeSince(time) {
    const timeSince = moment(time);
    return timeSince.fromNow();
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  submitAnswer() {
    this.props.submitAnswer(this.props.questionId, this.state.body);
    this.state.body = "";
  }

  changeVote(vote) {
    let newUserVote;
    if (vote === 1) {
      this.props.upVoteQuestion(this.props.question.id);
      newUserVote = 1
    } else if (vote === -1) {
      this.props.downVoteQuestion(this.props.question.id);
      newUserVote = -1
    }
    if (vote === this.state.currentUserVote) {
      newUserVote = 0;
    }
    this.setState({
      currentUserVote: newUserVote,
    });
  }

  votingButtons() {
    let currentUserVote = 0;
    let votes = 0;
    if (this.state.currentUserVote) {
      currentUserVote = this.state.currentUserVote;
    }
    if (this.state.votes) {
      votes = this.state.votes;
    }
    return (
      <div className="qs-voteButtons">
        <button className="voteButton" onClick={() => this.changeVote(1)}>
          <div className="upVote"></div>
        </button>

        <div className="totalVotes">{votes + currentUserVote}</div>

        <button className="voteButton" onClick={() => this.changeVote(-1)}>
          <div className="downVote"></div>
        </button>
      </div>
    );
  };

  editButton() {
    const { question, currentUserId } = this.props;
    return (question.author_id === currentUserId) ? (
      <Link className="editButton" to={`/questions/${question.id}/edit`}>
        Edit/Delete Question
      </Link>
    ) : (null);
  }


  render() {
    // debugger
    const { question } = this.props;
    return (question) ? (
      <div className="qs-container">

        <div className="qp-header">
          <h1 className="qs-title">{question.title}</h1>
        </div>

        <div className="qs-body">
          {this.votingButtons()}

          <div>
            <div className="questionMarkdown">
              <ReactMarkdown className="reactMarkdown" children={question.body} remarkPlugins={[remarkGfm]} />
            </div>
            <div className="qs-other">
              {/* <div className="question-show-tags-container">
                <span className="questions-row-tags">javascript</span>
                <span className="questions-row-tags">react</span>
                <span className="questions-row-tags">component</span>
                <span className="questions-row-tags">object</span>
              </div> */}
              <div className="questionTimeStamp">
                <time dateTime={question.created_at}>Originally Created: {this.calculateTimeSince(question.created_at)}</time>
                <time dateTime={question.updated_at}>Last updated: {this.calculateTimeSince(question.updated_at)}</time>
              </div>

              <div className="editButton-container">
                {this.editButton()}
              </div>

            </div>
          </div>

        </div>
      </div>
    ) : (null);
  }

}

export default QuestionShow;
