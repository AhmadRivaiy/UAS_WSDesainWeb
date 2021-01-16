import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation, MDBCardImage,
    MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon
} from 'mdbreact';
import { Link as LinkTo } from 'react-router-dom';
import './NewsAndEvents.css';
import { Link, Element, Events } from 'react-scroll'
import { withTranslation } from 'react-i18next';

class NewsPage extends React.Component {
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
        const newsCount = [1, 2, 3, 4, 5];
        return (
            <>
                <div className="headerCustom mt-2">
                    <div className="overlay"></div>
                    <img src="/assets/img/forth_event.jpg" className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src="/assets/img/phone_res.jpg" className="customImg align-self-center d-block d-lg-none" alt="" />
                </div>
                <Element name="moreWelcome" className="d-flex flex-row mb-5">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md='12' className='mt-4'>
                                <p className="titleContent">{t('events.forth.sidemenu.label')}</p>
                                <p dangerouslySetInnerHTML={
                                    { __html: t('desk.paragraph.home') }
                                } className="textContent" />
                                {newsCount.map((newsCount) =>
                                    <MDBRow className="mt-4" center>
                                        <MDBCol sm="12" md="4">
                                            <MDBCard wide>
                                                <MDBCardImage
                                                    className='view view-cascade gradient-card-header blue-gradient p-2 white-text text-right'
                                                    cascade
                                                    tag='div'
                                                >
                                                    <MDBIcon icon='calendar-alt' /> 26.07.2017
                                                </MDBCardImage>
                                                <MDBCardBody cascade>
                                                    <h2 className="titleEventsContent">
                                                        WCTSP Course: New and Aspiring Leaders
                                                    </h2>
                                                    <br/>
                                                    <LinkTo to='/events/forthcoming-events/wtcsp-course-new-and-aspiring-leaders'
                                                        className='blue-text mt-1 d-flex justify-content-end align-items-center'
                                                    >
                                                        <h5 className=''>
                                                            Read more{' '}
                                                            <MDBIcon
                                                                icon='chevron-right'
                                                                className='ml-2'
                                                                size='sm'
                                                            ></MDBIcon>
                                                        </h5>
                                                    </LinkTo>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        <MDBCol sm="12" md="4">
                                            <MDBCard wide>
                                                <MDBCardImage
                                                    className='view view-cascade gradient-card-header blue-gradient p-2 white-text text-right'
                                                    cascade
                                                    tag='div'
                                                >
                                                    <MDBIcon icon='calendar-alt' /> 26.07.2017
                                                </MDBCardImage>
                                                <MDBCardBody>
                                                    <h2 className="titleEventsContent">
                                                        WCTSP Course: New and Aspiring HoDs
                                                    </h2>
                                                    <br/>
                                                    <a
                                                        href='!#'
                                                        className='blue-text mt-1 d-flex justify-content-end align-items-center'
                                                    >
                                                        <h5 className=''>
                                                            Read more{' '}
                                                            <MDBIcon
                                                                icon='chevron-right'
                                                                className='ml-2'
                                                                size='sm'
                                                            ></MDBIcon>
                                                        </h5>
                                                    </a>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                )}
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
                                            <LinkTo to='/events/forthcoming-events'>
                                                {t('events.nav.label')}
                                            </LinkTo>
                                        </li>
                                        <li>{t('events.forth.sidemenu.label')}</li>
                                    </ul>
                                </div>
                                <p className="subTitleRightMenu">{t('news.nav.label')}</p>
                                <ul className='list-unstyled text-center'>
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
                                        <LinkTo className="white-text" to='/news'>
                                            <div className="subListRightMenu">
                                                Link 4
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
                                <LinkTo to='/about'>
                                    <div className="rightMenu mt-2">
                                        <div className="overlayRightMenu">
                                            <div className="fontSubTitleRightContent">{t('about.sidemenu.sublabel')}</div>
                                        </div>
                                        <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/identy.png" waves alt=""  />
                                    </div>
                                </LinkTo>
                            </MDBAnimation>
                        </div>
                    </div>
                </Element>
            </>
        );
    }
};
export default withTranslation()(NewsPage);
