import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { history } from './helpers';

//Main
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about_us/AboutPage';
import NewsPage from './pages/events/NewsPage';
import AcademicPage from './pages/academic/AcademicPage';
import ContactPage from './pages/contact/ContactUsPage';

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
{/* 
            <Route exact path='/addons' component={AddonsNavPage} />
            <Route exact path='/advanced' component={AdvancedNavPage} />
            <Route exact path='/components' component={ComponentsNavPage} />
            <Route exact path='/css' component={CSSNavPage} />
            <Route exact path='/forms' component={FormsNavPage} />
            <Route exact path='/modals' component={ModalsNavPage} />
            <Route exact path='/navigation' component={NavigationNavPage} />
            <Route exact path='/tables' component={TablesNavPage} />

            <Route path='/addons/iframe' component={IframePage} />
            <Route path='/addons/edge-header' component={EdgeHeaderPage} />
            <Route path='/addons/notifications' component={NotificationPage} />
            <Route path='/addons/treeview' component={TreeviewPage} />
            <Route path='/addons/Rating' component={RatingPage} />
            <Route path='/advanced/carousel' component={CarouselPage} />
            <Route path='/advanced/collapse' component={CollapsePage} />
            <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
            <Route path='/advanced/videocarousel' component={VideoCarouselPage} />
            <Route path='/advanced/alerts' component={AlertPage} />
            <Route path='/advanced/popover' component={PopoverPage} />
            <Route path='/advanced/tooltips' component={TooltipsPage} />
            <Route path='/advanced/charts' component={ChartsPage} />
            <Route path='/advanced/scrollbar' component={ScrollBarPage} />
            <Route path='/css/animations' component={AnimationPage} />
            <Route path='/css/icons' component={FaPage} />
            <Route path='/css/jumbotron' component={JumbotronPage} />
            <Route path='/css/masks' component={MasksPage} />
            <Route path='/css/hover' component={HoverPage} />
            <Route path='/css/masonry' component={MasonryPage} />
            <Route path='/components/media' component={MediaPage} />
            <Route path='/components/badge' component={BadgePage} />
            <Route path='/components/cards' component={CardsPage} />
            <Route path='/components/buttons' component={ButtonPage} />
            <Route path='/components/dropdown' component={DropdownPage} />
            <Route path='/components/progress' component={ProgressPage} />
            <Route path='/components/pagination' component={PaginationPage} />
            <Route path='/components/list-group' component={ListGroupPage} />
            <Route path='/components/panels' component={PanelPage} />
            <Route path='/components/search' component={SearchPage} />
            <Route path='/components/spinner' component={SpinnerPage} />
            <Route path='/components/tabs' component={TabsPage} />
            <Route path='/components/pills' component={PillsPage} />
            <Route path='/forms/forms' component={FormsPage} />
            <Route path='/forms/validation' component={ValidationPage} />
            <Route path='/forms/input' component={InputPage} />
            <Route path='/forms/inputgroup' component={InputGroupPage} />
            <Route path='/modals/modal' component={ModalPage} />
            <Route path='/modals/modal-form' component={ModalFormPage} />
            <Route path='/modals/modal-examples' component={ModalExamplesPage} />
            <Route path='/navigation/navbar' component={NavbarPage} />
            <Route path='/navigation/breadcrumb' component={BreadcrumbPage} />
            <Route path='/navigation/navs' component={NavsPage} />
            <Route path='/navigation/footer' component={FooterPage} />
            <Route path='/tables/table' component={TablePage} />
            <Route path='/tables/table-responsive' component={TableResponsivePage} />
            <Route path='/tables/table-scroll' component={TableScrollPage} />
            <Route path='/tables/table-styles' component={TableStylesPage} />
            <Route path='/tables/datatable-api' component={DatatableApiPage} />
            <Route path='/tables/datatable' component={DatatablePage} />
            <Route path='/tables/datatable-2' component={DatatablePageV5} /> */}

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
