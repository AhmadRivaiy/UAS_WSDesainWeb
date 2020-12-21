import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBBtn,
  MDBTypography
} from 'mdbreact';
import './HomePage.css';
import videoBg from '../../assets/video/Mt_Baker.mp4';
import imgPeople from '../../assets/billgates.png';
import imgBuilding1 from '../../assets/building_i1920.png';
import imgLogo from '../../assets/logo.png';
import Typed from 'react-typed';
import { Link, Element, Events } from 'react-scroll'
import { userService } from '../../services/user.service';
import { apiGetContentHome } from '../../components';
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
    const { data_home } = this.state;
    const { t } = this.props;
    return (
      <>
        <MDBView
          className="movingText d-flex justify-content-center d-block d-lg-none">
          <h1 className="align-self-center" style={{ fontWeight: 'bold', color: 'white', fontSize: 52, fontFamily: 'Poppins-Medium' }}>
            <Typed
              strings={[
                'Creative',
                'Innovative',
                'Collaborative']}
              typeSpeed={40}
              backSpeed={70}
              showCursor={false}
              loop>
            </Typed>
          </h1>
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
                  className='d-block w-100'
                  src='https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg'
                  alt='First slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1'
                  alt='Second slide'
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src='https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg'
                  alt='Third slide'
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        {/* <MDBEdgeHeader color='grey darken-3' className='sectionPage d-none d-lg-block' /> */}
        <video className="videoBg d-none d-lg-block" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="d-none d-lg-block" style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '2%', marginRight: '1%', backgroundColor: 'grey' }}>
          <div className="row">
            <div className="col d-flex flex-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div className="d-flex flex-column">
                <img src="https://i.pinimg.com/originals/86/7d/ac/867daccad6db6687934fb6b7e81c4316.png" style={{ maxWidth: 280, margin: '50px' }} className="img-fluid align-self-center" alt="" />
                <h1 style={{ color: 'white', fontFamily: 'Poppins-Light', textAlign: 'center' }}>Empowers To Educate</h1>
                <div className="d-flex justify-content-center" style={{ height: '350px' }}>
                  <h1 className="align-self-center" style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins-Medium', fontSize: '4em' }}>
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
          </div>
          <div className="row" style={{ paddingBottom: '5%' }}>
            <div className="col d-flex justify-content-center">
              <Link activeClass="active" to="moreWelcome" offset={-40} spy={true} smooth={true} duration={1200} >
                <MDBBtn color="indigo" className="align-self-center z-depth-3" style={{ textTransform: 'capitalize' }}>
                  {t('more_about.btn.label')} <span><i className="fas fa-chevron-down cs_pointer ml-1"></i></span>
                </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
        <Element name="moreWelcome" className="element" >
          <div className="row justify-content-md-center" style={{ margin: '0.01%' }}>
            <div className="col col-12 col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
              <h2 className="subTitleSeparator align-self-center">"Everybody Get Up and Sleep Again"</h2>
              <br />
              <h5 className="subTitleSeparator align-self-center">Tes Of Week</h5>
            </div>
            <div className="col col-12 col-lg-2 colVerticalLine d-flex justify-content-center flex-row">
              <div className="vl-one align-self-center"></div>
              <div className="vl-two align-self-center"></div>
              <div className="vl-three align-self-center"></div>
            </div>
            <div className="col col-12 col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
              <h2 className="subTitleSeparator align-self-center">"Everybody Get Up and Sleep Again"</h2>
              <br />
              <h5 className="subTitleSeparator align-self-center">Tes Of Week</h5>
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
                          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <br />
                    <h3><b>Bill Gates</b></h3>
                    <p dangerouslySetInnerHTML={
                      { __html: t('desk.home.paragraph') }
                    } style={{ fontFamily: 'MerriweatherSans-Light' }} />
                  </MDBCol>
                  <MDBCol md="12">
                    <img src={imgBuilding1} width="80%" height="auto" alt="UPTD TIKOMDIK" />
                  </MDBCol>
                  <MDBCol md="12">
                    <br />
                    <p dangerouslySetInnerHTML={
                      { __html: t('desk.home.paragraph') }
                    } style={{ fontFamily: 'MerriweatherSans-Light' }} />
                  </MDBCol>
                </MDBRow>
                <hr className='my-5' />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="flex-column d-none d-lg-block">
            <div>
              <div className="d-flex flex-row">
                <p style={{ fontFamily: 'Poppins-ExtraBold' }}>Related News</p>
                <div className="d-flex justify-content-end" style={{ width: '65%' }}>
                  <span><i class="fas fa-ellipsis-h cs_pointer ml-1"></i></span>
                </div>
              </div>
              <MDBCardImage className="img-fluid" src={imgPeople} style={{ maxWidth: 350 }} waves />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(HomePage);
