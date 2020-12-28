import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBBtn,
    MDBCard, MDBCardImage, MDBCardBody, MDBCardText
} from 'mdbreact';
import { Link as LinkTo } from 'react-router-dom';
import './AboutPage.css';
import imgBgAbout from '../../assets/img/about/about.png';
import imgBgAboutPhone from '../../assets/img/about/phone_res.jpg';
import imgBuilding2 from '../../assets/building.png';
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
                                        <MDBCol md="9">
                                            <MDBCard>
                                                <MDBCardBody>
                                                    <div>
                                                        <iframe width="100%" height="480" src="https://www.youtube.com/embed/2n10aj7xf2g?controls=1&autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted;" allowfullscreen ></iframe>
                                                    </div>
                                                    </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <br />
                                        <p dangerouslySetInnerHTML={
                                            { __html: t('desk.home.paragraph') }
                                        } style={{ fontFamily: 'MerriweatherSans-Light' }} />
                                    </MDBCol>
                                    <MDBCol md="12">
                                        <img src="/assets/img/about_img.png" width="80%" height="auto" alt="UPTD TIKOMDIK" />
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
                                <div className="btnBottomContent btnSky btnNext">
                                    Take The School Tour <span><i class="fas fa-arrow-right cs_pointer fa-lg"></i></span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="flex-column d-none d-lg-block">
                        <div className="bgRightMenu">
                            <div className="d-flex flex-column align-items-center">
                                <img className="img-fluid m-4 imgRightMenu" src={imgLogo} />
                                <p className="titleRightMenu">The Example College</p>
                                <div className="d-flex ">
                                    <ul className="breadcrumb">
                                        <li>
                                            <LinkTo to='/'>
                                                Home
                                            </LinkTo>
                                        </li>
                                        <li>
                                            <LinkTo to='/about'>
                                                About
                                            </LinkTo>
                                        </li>
                                        <li>The Example College</li>
                                    </ul>
                                </div>
                                <p className="subTitleRightMenu">About</p>
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
                                        <LinkTo className="white-text" to='/about'>
                                            <div className="subListMenu">
                                                About
                                            </div>
                                        </LinkTo>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">Related News</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src={imgBuilding2} waves />
                                </div>
                            </MDBAnimation>
                        </div>
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">Upcomming Events</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src={imgColor1} waves />
                                </div>
                            </MDBAnimation>
                        </div>
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">What's Next ?</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">Admission of New Students</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src={imgStudent} waves />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">Where We are</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src={imgForest} waves />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">The Example Identity</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src={imgIdenty} waves />
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
