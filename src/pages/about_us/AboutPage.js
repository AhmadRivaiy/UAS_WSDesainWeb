import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBCard, MDBCardImage, MDBCardBody
} from 'mdbreact';
import { Link as LinkTo } from 'react-router-dom';
import './AboutPage.css';
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
                    <img src="/assets/img/about.png" className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src="/assets/img/phone_res.jpg" className="customImg align-self-center d-block d-lg-none" alt="" />
                    <div className="contents">
                        <div className="row align-items-end" style={{ height: '90vh' }}>
                            <div className="col col-12 col-lg-6 d-flex titleHeaderPhone">
                                {t('title.page.about_us')}
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
                                                        <iframe title="Condong Pada Mimpi" width="100%" height="480" src="https://www.youtube.com/embed/2n10aj7xf2g?controls=1&autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted;" allowfullscreen ></iframe>
                                                    </div>
                                                    </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <br />
                                        <p dangerouslySetInnerHTML={
                                            { __html: t('desk.paragraph.home') }
                                        } className="textContent" />
                                    </MDBCol>
                                    <MDBCol md="12">
                                        <img src="/assets/img/about_img.png" width="80%" height="auto" alt="UPTD TIKOMDIK" />
                                    </MDBCol>
                                    <MDBCol md="12">
                                        <br />
                                        <p dangerouslySetInnerHTML={
                                            { __html: t('desk.paragraph.home') }
                                        } className="textContent" />
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
                                <img className="img-fluid m-4 imgRightMenu" src="/assets/img/logow.png" alt=""/>
                                <p className="titleRightMenu">{t('title.univ.label')}</p>
                                <div className="d-flex ">
                                    <ul className="breadcrumb">
                                        <li>
                                            <LinkTo to='/'>
                                                {t('home.nav.label')}
                                            </LinkTo>
                                        </li>
                                        <li>
                                            <LinkTo to='/about'>
                                                {t('contact.nav.label')}
                                            </LinkTo>
                                        </li>
                                        <li>{t('title.page.about_us')}</li>
                                    </ul>
                                </div>
                                <p className="subTitleRightMenu">{t('about.sidemenu.sublabel')}</p>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a href='#!' className="white-text">
                                            <div className="subListRightMenu">
                                                Link 1
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className="white-text">
                                            <div className="subListRightMenu">
                                                Link 2
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className="white-text">
                                            <div className="subListRightMenu">
                                                Link 3
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <LinkTo className="white-text" to='/about'>
                                            <div className="subListRightMenu">
                                                {t('about.sidemenu.label')}
                                            </div>
                                        </LinkTo>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">{t('news.sidecontent.all')}</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/building.png" waves alt=""  />
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
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/color-1.jpg" waves alt=""  />
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
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/students.png" waves alt=""  />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">Where We are</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/forest.png" waves alt=""  />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">The Example Identity</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/identy.png" waves  alt="" />
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
