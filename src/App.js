import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon, MDBView,
  MDBRow, MDBCol, MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Routes from './Routes';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';

class App extends Component {
  state = {
    collapseID: '',
    sidebarOpen: false,
    en: false,
    id: false,
    darkMode: false
  };

  componentDidMount() {
    this.navLanguage()
  }

  async navLanguage() {
    try {
      var data = await JSON.parse(localStorage.getItem('is_lang_now'));
      if (data) {
        if (data.index === 'en') {
          this.setState({ [data.index]: true, id: false })
        } else {
          this.setState({ [data.index]: true, en: false })
        }
        i18n.changeLanguage(data.index);
      } else {
        console.log('null')
      }
    } catch (error) {

    }
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  chooseLanguage(index, params) {
    var data = {
      index: index,
      param: params
    }
    const notReload = {
      "/login": true
    }
    localStorage.setItem('is_lang_now', JSON.stringify(data));
    i18n.changeLanguage(index);
    const locationNow = window.location.pathname;
    if (!notReload[locationNow]) {
      window.location.reload()
    }
    this.navLanguage();
  }

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID, sidebarOpen, en, id, darkMode } = this.state;
    const { t } = this.props;
    const theme = 'dark';

    return (
      <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router>
            <div className='flyout'>
              {/* <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={sidebarOpen}
            onSetOpen={() => this.onSetSidebarOpen(!sidebarOpen)}
            touch={true}
            styles={{ sidebar: { background: "white" } }}
          > */}
              <MDBNavbar dark expand='md' fixed='top' scrolling color='#4C6789' style={{ maxHeight: 43, backgroundColor: '#4C6789' }}>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('mainNavbarCollapse')}
                  //onClick={() => this.setState({ sidebarOpen: !sidebarOpen })}
                  right={true}
                  image="https://www.iconfinder.com/data/icons/basic-ui-27/64/Artboard_18-512.png"
                />
                <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem className="d-block d-md-none">
                      <MDBView
                        disabled={true}
                      >
                        <br />
                      </MDBView>
                    </MDBNavItem>
                    {/* <MDBNavItem>
                      <MDBNavLink
                        exact
                        to='/'
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                      >
                        <strong>{t('home.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink
                        to='/addons'
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                      >
                        <strong>{t('news.nav.label')}</strong>
                      </MDBNavLink>
                      </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/components'
                      >
                        <strong>{t('profile.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/advanced'
                      >
                        <strong>{t('events.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/navigation'
                      >
                        <strong>{t('gallery.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/forms'
                      >
                        <strong>{t('academic.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/tables'
                      >
                        <strong>{t('about.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem> */}
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/modals'
                      >
                        <strong>{t('our_partner.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to='/addons'
                      >
                        <strong>{t('account.nav.label')}</strong>
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <strong>
                        <MDBDropdown>
                          <MDBDropdownToggle caret nav={true}>
                            <MDBIcon icon="language" size="1x" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu basic>
                            <MDBDropdownItem header>Language</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem active={id} onClick={() => this.chooseLanguage('id', '0')}>Indonesia</MDBDropdownItem>
                            <MDBDropdownItem active={en} onClick={() => this.chooseLanguage('en', '1')}>English</MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </strong>
                    </MDBNavItem>
                    <MDBNavItem>
                      <div>
                        <input checked={!darkMode} type="checkbox" name="checkbox" className="switch" onChange={() => this.setState({ darkMode: !darkMode })} />
                      </div>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
              {collapseID && overlay}
              <main style={{ marginTop: '2rem' }}>
                <Routes />
              </main>
              <MDBFooter className="pt-4 mt-4" style={{ backgroundColor: '#2d2e2f' }}>
                <MDBContainer fluid className='text-left' style={{ fontSize: 12 }}>
                  <MDBRow style={{ padding: '0.8rem' }}>
                    <MDBCol md='3'>
                      <h5 className='title'>Logo</h5>
                      <p>
                        Penjelasan Singkat UPTD Tikomdik.
                      </p><br />
                    </MDBCol>
                    <MDBCol md='3' >
                      <div className="row">
                        <div className="col-6 col-md-12">
                          <h5 className='title'>Products</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <a href='#!'>Link 1</a>
                            </li>
                            <li>
                              <a href='#!'>Link 2</a>
                            </li>
                            <li>
                              <a href='#!'>Link 3</a>
                            </li>
                            <li>
                              <a href='#!'>Link 4</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-12">
                          <h5 className='title'>Support</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <a href='#!'>Link 1</a>
                            </li>
                            <li>
                              <a href='#!'>Link 2</a>
                            </li>
                            <li>
                              <a href='#!'>Link 3</a>
                            </li>
                            <li>
                              <a href='#!'>Link 4</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md='3'>
                      <div className="row">
                        <div className="col-6 col-md-12">
                          <h5 className='title'>Handy Links</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <a href='#!'>Link 1</a>
                            </li>
                            <li>
                              <a href='#!'>Link 2</a>
                            </li>
                            <li>
                              <a href='#!'>Link 3</a>
                            </li>
                            <li>
                              <a href='#!'>Link 4</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-12">
                          <h5 className='title'>Find Us</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <a href='#!'>Link 1</a>
                            </li>
                            <li>
                              <a href='#!'>Link 2</a>
                            </li>
                            <li>
                              <a href='#!'>Link 3</a>
                            </li>
                            <li>
                              <a href='#!'>Link 4</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol md='3'>
                      <MDBView className="d-flex flex-column">
                        <h5 className='title'>About</h5>
                        <ul className='list-unstyled'>
                          <li>
                            <a href='#!'>Link 1</a>
                          </li>
                          <li>
                            <a href='#!'>Link 2</a>
                          </li>
                          <li>
                            <a href='#!'>Link 3</a>
                          </li>
                          <li>
                            <a href='#!'>Link 4</a>
                          </li>
                        </ul>
                      </MDBView>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBFooter>
              {/* </Sidebar> */}
            </div>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default withTranslation()(App);
