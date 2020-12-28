import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
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
  MDBLink,
  MDBAnimation
} from 'mdbreact';
import { HashRouter, BrowserRouter as Router, Link } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import Routes from './Routes';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';
import { slide as Menu } from 'react-burger-menu';
import imgBurger from './assets/ic_menu.png';
import imgLogo from './assets/img/home/logo.png';

class App extends Component {
  state = {
    collapseID: '',
    sidebarOpen: false,
    en: false,
    id: false,
    darkMode: false,
    activeItemPills: '1'
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

  togglePills = tab => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab,
        sidebarOpen: false
      });
    }
  };
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  onSetSidebarOpen() {
    const { sidebarOpen } = this.state;
    this.setState({ sidebarOpen: !sidebarOpen });
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

    const { collapseID, sidebarOpen, en, id, darkMode, activeItemPills  } = this.state;
    const { t } = this.props;
    const theme = 'dark';

    return (
      <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router basename="/UAS_WSDesainWeb">
            <div className='flyout'>
              <MDBNavbar className="d-none d-lg-block" dark expand='md' scrolling={false} fixed='top' style={{ maxHeight: 50, backgroundColor: '#4C6789' }}>
                <MDBCollapse id='mainNavbarCollapse' navbar className="container">
                  <MDBNavbarNav right>
                    <MDBNavItem className="d-block d-md-none">
                      <MDBView
                        disabled={true}
                      >
                        <br />
                      </MDBView>
                    </MDBNavItem>
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
              <MDBNavbar className="d-block d-lg-none" dark expand='md' scrolling={false} fixed='top' style={{ backgroundColor: '#4C6789' }}>
                <div className="row">
                  <div className="col col-2">
                    <MDBNavbarToggler
                      onClick={() => this.onSetSidebarOpen()}
                      right={true}
                      image={imgBurger}
                      className="text-left"
                    />
                  </div>
                  <div className="col col-9 text-center">
                    <MDBNavbarBrand>
                      <strong>Empowers To Educate</strong>
                    </MDBNavbarBrand>
                  </div>
                </div>

              </MDBNavbar>
              {collapseID && overlay}
              <Menu
                onOpen={() => this.setState({ sidebarOpen: true })}
                onClose={() => this.setState({ sidebarOpen: false })}
                isOpen={sidebarOpen}
                customBurgerIcon={<span><i class="fas fa-bars fa-lg"></i></span>}
                pageWrapId={"page-wrap"}
                disableAutoFocus
                width={350}
                itemListElement="div"
              >
                <div className="d-flex flex-column">
                  <img src={imgLogo} style={{ maxWidth: 150 }} className="img-fluid align-self-center" alt="" />
                  <h3 className="text-center mt-4 white-text ">Empowers To Educate</h3>
                </div>
                <hr style={{ border: '1', borderColor: 'white' }}/>
                <div className="flex-column d-block d-lg-none">
                  <div className="menuTopMobile">
                    <div className="pt-2"><i className="fas fa-search fa-lg"></i></div>
                    <div><input checked={!darkMode} type="checkbox" name="checkbox" className="switch" onChange={() => this.setState({ darkMode: !darkMode })} /></div>
                    <div className="pt-2"><font onClick={() => this.chooseLanguage('id', '0')}>ID</font> | <font onClick={() => this.chooseLanguage('en', '1')}>EN</font></div>
                  </div>
                  <hr style={{ border: '1', borderColor: 'white' }}/>
                </div>
                <MDBBtn
                  color="blue-darken-4"
                  onClick={this.toggleCollapse("Collapse1")}
                  style={{ width: '99%', backgroundColor: 'transparent' }}
                  size="lg"
                  className="btnMenu text-capitalize text-left pt-3 pb-3 pl-2 pr-0 mb-0 mr-0"
                >
                  <i className={collapseID == "Collapse1" ? "fa fa-angle-down" : "fa fa-angle-down fa-rotate-270"} />    News & Events
                </MDBBtn>
                <div>
                  <MDBCollapse id="Collapse1" isOpen={this.state.collapseID}>
                    <ul className='list-unstyled'>
                      <li>
                        <Link className="white-text" to='/' onClick={this.togglePills('1')}>
                          <div className="subListMenu">
                            Home
                          </div>
                        </Link>
                      </li>
                      <li>
                        <a href='#!' className="white-text">
                          <div className="subListMenu">
                            Link 2
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#!' className="white-text">
                          <div className="subListMenu">
                            Link 3
                          </div>
                        </a>
                      </li>
                      <li>
                        <Link className="white-text" to='/about' onClick={this.togglePills('2')}>
                          <div className="subListMenu">
                            About
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </MDBCollapse>
                </div>
                <MDBBtn
                  color="blue-darken-4"
                  onClick={this.toggleCollapse("Collapse2")}
                  style={{ width: '99%', backgroundColor: 'transparent' }}
                  size="lg"
                  className="btnMenu text-capitalize text-left pt-3 pb-3 pr-0 pl-2 mb-0 mr-0"
                >
                  <i className={collapseID == "Collapse2" ? "fa fa-angle-down" : "fa fa-angle-down fa-rotate-270"} />    Academic
                </MDBBtn>
                <div>
                  <MDBCollapse id="Collapse2" isOpen={this.state.collapseID}>
                    <ul className='list-unstyled'>
                      <li>
                        <MDBLink className="white-text" to='/' active={activeItemPills === '1'} onClick={this.togglePills('1')} link>
                        <div className="subListMenu">
                            Home
                          </div>
                        </MDBLink>
                      </li>
                      <li>
                        <a href='#!' className="white-text">
                          <div className="subListMenu">
                            Link 2
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#!' className="white-text">
                          <div className="subListMenu">
                            Link 3
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#!' className="white-text">
                          <div className="subListMenu">
                            Link 4
                          </div>
                        </a>
                      </li>
                    </ul>
                  </MDBCollapse>
                </div>
              </Menu>
              <MDBAnimation type="fadeIn" duration="2s">
                <main id="page-wrap">
                    <Routes />
                </main>
              </MDBAnimation>
              <MDBFooter className="pt-4 mt-4" style={{ backgroundColor: '#154678' }}>
                <MDBContainer>
                  <MDBRow style={{ padding: '0.8rem' }}>
                    <MDBCol md='4' className="d-flex flex-column" style={{ alignItems: 'center', marginBottom: 15 }}>
                      <img src={imgLogo} style={{ maxWidth: 120 }} className="img-fluid align-self-center" alt="" />
                      <br />
                      <h4>
                        Empowers To Educate
                      </h4>
                    </MDBCol>
                    <MDBCol md='4' className="d-flex flex-column align-items-center align-items-md-start mb-3">
                      <h2 className="titleFooter mb-3">
                        Get In Touch
                      </h2>
                      <h5 className="titleFooter">CONTACT US</h5>
                      <p>Kota, Kabupaten, Provinsi</p>

                      <h5 className="titleFooter">EMAIL</h5>
                      <p>example@email.ac.id</p>

                      <h5 className="titleFooter">CONNECT WITH US</h5>
                      <p>
                        <a href="#"><span><i class="fab fa-twitter-square fa-2x"></i></span></a>
                        <a href="#"><span><i class="fab fa-google-plus-square fa-2x ml-3"></i></span></a>
                        <a href="#"><span><i class="fab fa-facebook-square fa-2x ml-3"></i></span></a>
                        <a href="#"><span><i class="fas fa-share-alt-square fa-2x ml-3"></i></span></a>
                      </p>
                    </MDBCol>
                    <MDBCol md='4' className="d-flex flex-column align-items-center align-items-md-start">
                      <p style={{ fontSize: '1em', textAlign: 'center' }}>
                        "QUOTES OR HISTORY about THE COLLEGE Sed pretium nunc leo, eu ullamcorper velit sagittis id. Nam lobortis leo eget imperdiet commodo."
                      </p>
                      <h5 className='title d-flex justify-content-center justify-content-md-start'>Handy Links</h5>
                      <div className="row">
                        <div className="col-6 col-md-6 d-flex justify-content-center justify-content-md-start">
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
                        <div className="col-6 col-md-6  d-flex justify-content-center justify-content-md-start">
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
