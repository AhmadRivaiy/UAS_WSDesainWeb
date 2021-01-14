import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { history } from './helpers';

//Main
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about_us/AboutPage';
import NewsPage from './pages/events/NewsPage';
import AcademicPage from './pages/academic/AcademicPage';
import ContactPage from './pages/contact/ContactUsPage';

import ContentNews from './pages/events/v_sub_news/ExampleNews';

import LoginPage from './pages/account/LoginPage';
import RegisterPage from './pages/account/RegisterPage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class Routes extends React.Component {
  render() {
    return (
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />

            <Route exact path='/news' component={NewsPage} />
            <Route exact path='/academic_faculties' component={AcademicPage} />
            <Route exact path='/contact_us' component={ContactPage} />

            <Route path='/news/:urlnews' component={ContentNews} />

            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route
              render={function () {
                return <h1 className="text-center">Not Found</h1>;
              }}
            />
          </Switch>
        </React.Suspense>
    );
  }
}

export default Routes;
