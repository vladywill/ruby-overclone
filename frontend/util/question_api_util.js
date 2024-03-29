// AJAX Requests

export const fetchQuestions = () => {
  // debugger
  return $.ajax({
    method: "GET",
    url: "/api/questions"
  });
}

export const fetchQuestion = (questionId) => {
  // debugger
  return $.ajax({
    method: "GET",
    url: `/api/questions/${questionId}`
  });
}

export const createQuestion = (question) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/questions",
    data: { question }
  });
}

export const updateQuestion = (question) => {
  // debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/questions/${question.id}`,
    data: { question }
  });
}

export const deleteQuestion = (questionId) => {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/questions/${questionId}`
  });
}

export const searchQuestions = (searchTerm) => {
  return $.ajax({
    method: "GET",
    url: `/search/?q=${searchTerm}`
  });
}

