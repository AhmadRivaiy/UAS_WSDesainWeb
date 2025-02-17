import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './HomePage.css';
import videoBg from '../../assets/video/Mt_Baker.mp4';
import imgPeople from '../../assets/billgates.png';
import imgBuilding2 from '../../assets/building.png';
import imgBuilding1 from '../../assets/building_i1920.png';
import imgColor1 from '../../assets/color-1.jpg';
import Typed from 'react-typed';
import { Link, Element, Events } from 'react-scroll'
import { Link as LinkTo } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_home: [],
      is_lang: [!localStorage.getItem('is_lang_now') ? 0 : JSON.parse(localStorage.getItem('is_lang_now')).param]
    };
  }
  scrollToTop = () => window.scrollTo(0, 0);

  async componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
    // try {
    //   await userService.getData(apiGetContentHome + this.state.is_lang)
    //   .then(
    //     user => {
    //       this.setState({ data_home: user.data.data })
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   )
    // } catch (error) {
    //   console.log(error)
    // }
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <MDBView
          className="movingText d-flex justify-content-center d-block d-lg-none">
          <div>
            <div className="row">
              <div className="col d-flex flex-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div className="d-flex justify-content-center" style={{ minHeight: 600 }}>
                  <h1 className="align-self-center" style={{ fontWeight: 'bold', color: 'white', fontSize: 52, fontFamily: 'Poppins-Medium' }}>
                    <Typed
                      strings={[
                        'Creative',
                        'Innovative',
                        'Collaborative']}
                      typeSpeed={40}
                      backSpeed={70}
                      startDelay={80}
                      showCursor={false}
                      loop>
                    </Typed>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col d-flex justify-content-center">
                <Link activeClass="active" to="moreWelcome" offset={-40} spy={true} smooth={true} duration={1200} >
                  <MDBBtn color="indigo" className="align-self-center z-depth-3" style={{ textTransform: 'capitalize' }}>
                    {t('more_about.btn.label')} <span><i className="fas fa-chevron-down cs_pointer ml-1"></i></span>
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </div>
        </MDBView>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          mobileGesture
          className='corrouselRender z-depth-1 d-block d-lg-none'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block vh-100 w-100'
                  src='https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block vh-100 w-100'
                  src='https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block vh-100 w-100'
                  src='https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        {/* <MDBEdgeHeader color='grey darken-3' className='sectionPage d-none d-lg-block' /> */}
        <header className="d-none d-lg-block">
          <div className="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="contents h-100" style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '2%', marginRight: '1%' }}>
            <div className="row">
              <div className="col d-flex flex-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <img src="/assets/img/logow.png" style={{ maxWidth: 280, marginTop: '65px' }} className="img-fluid align-self-center" alt="" />
                <h1 style={{ color: 'white', fontFamily: 'Rokkitt-Regular', textAlign: 'center', marginTop: '20px', letterSpacing: 3 }}>{t('title.univ.label')}</h1>
                <div className="d-flex justify-content-center" style={{ height: '350px' }}>
                  <h1 className="align-self-center" style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Rokkitt-Bold', fontSize: '4em' }}>
                    <Typed
                      strings={[
                        'Creative',
                        'Innovative',
                        'Collaborative']}
                      typeSpeed={40}
                      backSpeed={70}
                      startDelay={80}
                      showCursor={false}
                      loop>
                    </Typed>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col d-flex justify-content-center align-items-center" style={{ height: '23vh' }}>
                <Link activeClass="active" to="moreWelcome" offset={-25} spy={true} smooth={true} duration={1200} >
                  <MDBBtn color="indigo" className="align-self-center z-depth-3" style={{ textTransform: 'capitalize' }}>
                    {t('more_about.btn.label')} <span><i className="fas fa-chevron-down cs_pointer ml-1"></i></span>
                  </MDBBtn>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Element name="moreWelcome" className="sloganMenu">
          <div className="liheBreakCustom"></div>
          <div className="row justify-content-md-center" style={{ margin: '0.01%' }}>
            <div className="col col-12 col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
              <h2 className="subTitleSeparator align-self-center" style={{ fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>"{t('quotesLeft.banner.home')}"</h2>
              <br />
              <h5 className="subTitleSeparator align-self-center">Klasterisasi Kemenristekdikti</h5>
            </div>
            <div className="col col-12 col-lg-2 colVerticalLine d-flex justify-content-center flex-row">
              <div className="vl-one align-self-center"></div>
              <div className="vl-two align-self-center"></div>
              <div className="vl-three align-self-center"></div>
            </div>
            <div className="col col-12 col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
              <h2 className="subTitleSeparator align-self-center" style={{ fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>"{t('quotesRight.banner.home')}"</h2>
              <br />
              <h5 className="subTitleSeparator align-self-center">Webometrics</h5>
            </div>
          </div>
        </Element>
        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <MDBRow id='categories'>
                  <MDBCol md="12">
                    <MDBCol md="8">
                      <MDBCard>
                        <MDBCardImage className="img-fluid" src={imgPeople} />
                        <MDBCardBody>
                          <MDBCardText>{t('quotesOwner.card.home')}</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <br />
                    <h2><b>Bill Gates</b></h2>
                    <p dangerouslySetInnerHTML={
                      { __html: t('desk.paragraph.home') }
                    } style={{ fontFamily: 'MerriweatherSans-Light' }} />
                  </MDBCol>
                  <MDBCol md="12">
                    <img src={imgBuilding1} width="80%" height="auto" alt="UPTD TIKOMDIK" />
                  </MDBCol>
                  <MDBCol md="12">
                    <br />
                    <p dangerouslySetInnerHTML={
                      { __html: t('desk.paragraph.home') }
                    } style={{ fontFamily: 'MerriweatherSans-Light' }} />
                  </MDBCol>
                </MDBRow>
                <div className="d-flex justify-content-center mt-4 mb-2">
                  <div className="titleWild">For Wildlife @Bill_Gates See <font className="linkWild">https://Bill_Gates</font></div>
                </div>
              </MDBCol>
              <MDBCol md='12' className='d-flex justify-content-center mb-5'>
                <div className="wildLife">
                  <div className="iconWildLife">
                    <i class="fab fa-accusoft fa-2x"></i>
                  </div>
                  <div className="contentWildLife">
                    <div className="nameWild">@Ahmad_R</div>
                    <div>|</div>
                    <div>My Portofolio</div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md='12'>
              <p dangerouslySetInnerHTML={
                      { __html: t('desk.paragraph2.home') }
                    } style={{ fontFamily: 'MerriweatherSans-Light' }} />
              </MDBCol>
              <MDBCol md='12' className="mt-5">
                <h3>Bill Gates</h3>
                <h4>Master of Example College</h4>
              </MDBCol>
              <MDBCol md='12' className="btnGroup mt-5">
                <div className="btnBottomContent btnYellow">
                  {t('discover.btn.label')}
                </div>
                <div className="btnBottomContent btnSky">
                  {t('tour.btn.label')}
                </div>
              </MDBCol>
            </MDBRow>
            <hr className='my-5' />
          </MDBContainer>
          <div className="flex-column d-none d-lg-block">
            <div className="mt-4">
              <MDBAnimation reveal type='fadeInRight'>
                <div className="d-flex flex-row">
                  <p className="fontTitleRightContentPrim">{t('news.sidecontent.all')}</p>
                  <div className="d-flex justify-content-center">
                  </div>
                </div>
                <LinkTo to="/news/new-building-at-this-year-2021-will-usefull-for-practicing-milenial">
                  <div className="rightMenu">
                    <div className="overlayRightMenu">
                      <div className="fontTitleRightContent">10 Nov 2020</div>
                      <div className="fontSubTitleRightContent">NEW BUILDING</div>
                    </div>
                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/building.png" waves alt="" />
                  </div>
                </LinkTo>
              </MDBAnimation>
            </div>
            <div className="mt-4">
              <MDBAnimation reveal type='fadeInRight'>
                <div className="d-flex flex-row">
                  <p className="fontTitleRightContentPrim">{t('upcomming.sidecontent.all')}</p>
                  <div className="d-flex justify-content-center">
                  </div>
                </div>
                <LinkTo to='/events/forthcoming-events/wtcsp-course-new-and-aspiring-leaders'>
                  <div className="rightMenu">
                    <div className="overlayRightMenu">
                      <div className="fontTitleRightContent">10 Nov 2020</div>
                      <div className="fontSubTitleRightContent">NEW BUILDING</div>
                    </div>
                    <div className="eventRightContent"/>
                  </div>
                </LinkTo>
              </MDBAnimation>
            </div>
            <div className="mt-4">
              <MDBAnimation reveal type='fadeInRight'>
                <div className="d-flex flex-row">
                  <p className="fontTitleRightContentPrim">{t('what.sidecontent.all')}</p>
                  <div className="d-flex justify-content-center">
                  </div>
                </div>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInRight'>
                <div className="rightMenu mt-2">
                  <div className="overlayRightMenu">
                    <div className="fontSubTitleRightContent">Admission of New Students</div>
                  </div>
                  <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/students.png" waves />
                </div>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInRight'>
                <div className="rightMenu mt-2">
                  <div className="overlayRightMenu">
                    <div className="fontSubTitleRightContent">Where We are</div>
                  </div>
                  <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/forest.png" waves />
                </div>
              </MDBAnimation>
              <MDBAnimation reveal type='fadeInRight'>
                <div className="rightMenu mt-2">
                  <LinkTo to='/about'>
                    <div className="overlayRightMenu">
                      <div className="fontSubTitleRightContent">The Example Identity</div>
                    </div>
                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/identy.png" waves />
                  </LinkTo>
                </div>
              </MDBAnimation>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(HomePage);
