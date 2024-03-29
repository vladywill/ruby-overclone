// React
import React from 'react';
import { ReactDOM } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import { AuthRoute, ProtectedRoute, SplashRoute, HomeRoute } from '../util/route_util';

// Containers
import { HeaderContainer } from './nav/header_container';
import { SignupFormContainer } from './session/signup_form_container';
import { LoginFormContainer } from './session/login_form_container';
import { QuestionCreateContainer } from './question/question_create_container';
import { QuestionEditContainer } from './question/question_edit_container';
import { QuestionShowContainer } from './question/question_show_container';
import { QuestionIndexContainer } from './question/question_index_container';
import { ProfilePageContainer } from './profile/profile_page_container';
import { SearchBarContainer } from './nav/searchbar_container';

// Components
import { SplashPage } from './home/splash_page';
import { Footer } from './nav/footer';


// Frontend Application
export const App = () => {
  return (
    <>
      <HeaderContainer />
        <Switch>
          <SplashRoute exact path="/" component={SplashPage} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        <Switch>
          <HomeRoute exact path="/" component={QuestionIndexContainer} />
          <ProtectedRoute exact path="/questions/new" component={QuestionCreateContainer} />
          <ProtectedRoute exact path="/users/:id" component={ProfilePageContainer} />
          <ProtectedRoute exact path="/questions/:id" component={QuestionShowContainer} />
          <ProtectedRoute exact path="/questions/:questionId/edit" component={QuestionEditContainer} />
          <ProtectedRoute exact path="/search/q=:searchTerm" component={SearchBarContainer} />
        </Switch>
      <Footer />
    </>
  );
}
