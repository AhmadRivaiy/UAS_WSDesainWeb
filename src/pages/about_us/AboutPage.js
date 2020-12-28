import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBBtn,
    MDBCard, MDBCardImage, MDBCardBody, MDBCardText
} from 'mdbreact';
import './AboutPage.css';
import imgBgAbout from '../../assets/img/about/about.png';
import imgBgAboutPhone from '../../assets/img/about/phone_res.jpg';
import imgPeople from '../../assets/billgates.png';
import imgBuilding2 from '../../assets/building.png';
import imgBuilding1 from '../../assets/building_i1920.png';
import imgColor1 from '../../assets/color-1.jpg';
import imgStudent from '../../assets/students.png';
import imgForest from '../../assets/forest.png';
import imgIdenty from '../../assets/identy.png';
import imgLogo from '../../assets/img/home/logo.png';
import { Link, Element, Events } from 'react-scroll'
import { withTranslation } from 'react-i18next';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_about: [],
            is_lang: [!localStorage.getItem('is_lang_now') ? 0 : JSON.parse(localStorage.getItem('is_lang_now')).param]
        };
    }
    scrollToTop = () => window.scrollTo(0, 0);

    async componentDidMount() {
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        const { t } = this.props;
        return (
            <>
                <header className="mt-2">
                    <div className="overlay"></div>
                    <img src={imgBgAbout} className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src={imgBgAboutPhone} className="customImg align-self-center d-block d-lg-none" alt="" />
                    <div className="contents">
                        <div className="row align-items-end" style={{ height: '90vh' }}>
                            <div className="col col-12 col-lg-6 d-flex titleHeaderPhone">
                                The Example College Identity
                                </div>
                            <div className="col col-12 col-lg-6 btnPhone">
                                <Link activeClass="active" to="moreWelcome" offset={-45} spy={true} smooth={true} duration={1200} >
                                    <div className="round-button">
                                        <span><i class="fas fa-arrow-down cs_pointer fa-lg"></i></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <Element name="moreWelcome" className="d-flex flex-row mb-5">
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
                                        <h2><b>Bill Gates</b></h2>
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
                            </MDBCol>
                            <MDBCol md='12' className="btnGroup mt-5">
                                <div className="btnBottomContent btnYellow">
                                    Discover What's On
                            </div>
                                <div className="btnBottomContent btnSky">
                                    Take The School Tour
                            </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="flex-column d-none d-lg-block">
                        <div style={{ backgroundColor: '#38567C' }}>
                            <div className="d-flex flex-column align-items-center">
                                <img className="img-fluid m-4" src={imgLogo} style={{ maxWidth: 100 }} />
                                <p style={{ fontFamily: 'Poppins-ExtraBold', color: 'white', letterSpacing: 2 }}>The Example College</p>
                                <div className="d-flex ">
                                    <ul className="breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li>The Example College</li>
                                    </ul>
                                </div>
                                <p style={{ fontFamily: 'Poppins-ExtraBold', color: '#41BBDB', fontSize: 32 }}>About</p>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href='#!' className="white-text">
                                        <div className="subListMenu">
                                            Link 1
                                        </div>
                                        </a>
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
                                        <a href='/about' className="white-text">
                                        <div className="subListMenu">
                                            About
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{ marginTop: 25 }}>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p style={{ fontFamily: 'Poppins-ExtraBold' }}>Related News</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div style={{ color: '#F6E0C4', fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>10 Nov 2020</div>
                                        <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid" src={imgBuilding2} style={{ maxWidth: 350, opacity: '0.9' }} waves />
                                </div>
                            </MDBAnimation>
                        </div>
                        <div style={{ marginTop: 25 }}>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p style={{ fontFamily: 'Poppins-ExtraBold' }}>Upcomming Events</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div style={{ color: '#F6E0C4', fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>10 Nov 2020</div>
                                        <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid" src={imgColor1} style={{ maxWidth: 350, opacity: '0.9', height: 350 }} waves />
                                </div>
                            </MDBAnimation>
                        </div>
                        <div style={{ marginTop: 25 }}>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p style={{ fontFamily: 'Poppins-ExtraBold' }}>What's Next ?</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu" style={{ marginTop: 15 }}>
                                    <div className="overlayRightMenu">
                                        <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>Admission of New Students</div>
                                    </div>
                                    <MDBCardImage className="img-fluid" src={imgStudent} style={{ maxWidth: 350, opacity: '0.9' }} waves />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu" style={{ marginTop: 15 }}>
                                    <div className="overlayRightMenu">
                                        <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>Where We are</div>
                                    </div>
                                    <MDBCardImage className="img-fluid" src={imgForest} style={{ maxWidth: 350, opacity: '0.9' }} waves />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu" style={{ marginTop: 15 }}>
                                    <div className="overlayRightMenu">
                                        <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Rokkitt-Bold' }}>The Example Identity</div>
                                    </div>
                                    <MDBCardImage className="img-fluid" src={imgIdenty} style={{ maxWidth: 350, opacity: '0.9' }} waves />
                                </div>
                            </MDBAnimation>
                        </div>
                    </div>
                </Element>
            </>
        );
    }
};
export default withTranslation()(AboutPage);
