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
import imgHendra from '../assets/unnamed.jpg';
import Typed from 'react-typed';
import { Link, Element, Events } from 'react-scroll'

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <>
        <MDBView
          className="movingText d-flex justify-content-center d-block d-lg-none">
          <h1 className="align-self-center" style={{fontWeight: 'bold', color: 'white', fontSize: 52}}>
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
        <MDBEdgeHeader color='grey darken-3' className='sectionPage d-none d-lg-block' />
        <div className="d-none d-lg-block" style={{ backgroundColor: 'grey' }}>
          <div className="row" style={{ padding: '5%', marginRight: '1%' }}>
            <div className="col d-flex flex-column" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div className="d-flex flex-column">
                <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: '3em' }}>UPTD TIKomDik Jawa Barat</h1>
                <h1 style={{ color: 'white' }}>Empowers To Educate</h1>
                <hr style={{ borderWidth: 5 }} />
                <h1 style={{ fontWeight: 'bold', color: 'white', textAlign: 'start' }}>
                  | <Typed
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
            <div className="col z-depth-3 py-0 px-0">
              <MDBAnimation reveal type='fadeIn'>
                <video className='video-fluid d-block' autoPlay muted loop>
                  <source
                    src='https://mdbootstrap.com/img/video/Tropical.mp4'
                    type='video/mp4'
                    style={{ width: '100%' }}
                  />
                </video>
              </MDBAnimation>
            </div>
          </div>
          <div className="row" style={{ margin: '5%', paddingBottom: '5%' }}>
            <div className="col d-flex justify-content-center">
              <Link activeClass="active" to="moreWelcome" offset={-50} spy={true} smooth={true} duration={1200} >
                <MDBBtn color='primary' className="align-self-center">
                  More About Welcome <span><i className="fas fa-chevron-down cs_pointer ml-1"></i></span>
                </MDBBtn>
              </Link>
            </div>
          </div>
          <Element name="moreWelcome" className="element" >
            <div className="row justify-content-md-center" style={{ margin: '0.01%' }}>
              <div className="col col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
                <h2 className="subTitleSeparator align-self-center">"Everybody Get Up and Sleep Again"</h2>
                <br/>
                <h5 className="subTitleSeparator align-self-center">Tes Of Week</h5>
              </div>
              <div className="col col-lg-2 colVerticalLine d-flex justify-content-center flex-row">
                <div className="vl-one align-self-center"></div>
                <div className="vl-two align-self-center"></div>
                <div className="vl-three align-self-center"></div>
              </div>
              <div className="col col-lg-5 colSeparatorHome d-flex justify-content-center flex-column">
                <h2 className="subTitleSeparator align-self-center">"Everybody Get Up and Sleep Again"</h2>
                <br/>
                <h5 className="subTitleSeparator align-self-center">Tes Of Week</h5>
              </div>
            </div>
          </Element>
        </div>
        <div className='mt-3 mb-5'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <hr className='my-5' />
                <MDBRow id='categories'>
                  <MDBCol md="12">
                    <MDBCol md="8">
                      <img src={imgHendra} className="img-fluid" width="100%" height="auto" alt="Pak Hendra"/>
                      <MDBFreeBird>
                        <MDBRow className="justify-content-md-start">
                          <MDBCol
                            md='8'
                            lg='7'
                            className='text-left mx-auto float-none white z-depth-1 py-2 px-2 d-flex justify-content-start'
                          >
                            <MDBCardBody>
                              <MDBCardTitle>
                                <p style={{ fontSize: '1em' }}>
                                  “Education is not the filling of a pail, but the lighting of a fire.”
                                </p>
                                </MDBCardTitle>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBFreeBird>
                    </MDBCol>
                    <hr className='my-5' />
                    <MDBTypography tag="p" style={{ fontFamily: 'MerriweatherSans-Regular' }}>
                      TIKOMDIK tidak hanya berkaitan dengan teknologi tetapi bagaimana dapat berbagi pengetahuan dan informasi, meningkatkan komunikasi yang efisien dan efektif, dapat membangun komunitas belajar serta menciptakan budaya profesionalime di lingkungan Pendidikan.
                    </MDBTypography>
                    <MDBTypography tag="p" style={{ fontFamily: 'MerriweatherSans-Light' }}>
                      Disrupsi Teknologi 4.0 mempengaruhi dunia pendidikan secara eksponensial. Di sisi lain peserta didik saat ini adalah Generasi Neo Milenial atau dikenal juga sebagai Generasi Z. Peserta didik saat ini memiliki kebiasaan highly mobile, apps-dependent, visually-literate, dan always connected (selalu terhubung online). Mereka sudah terbiasa berkomunikasi antar sesamanya di jaringan internet diantaranya melalui media sosial. Mereka terbiasa belajar dan mengakses informasi melalui kanal-kanal yang tersedia secara online.
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="8">
                    <img src="https://tikomdik.jabarprov.go.id/static/media/1.fb4fbd61.jpg" width="100%" height="auto"></img>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
