import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation, MDBCardImage
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
        return (
            <>
                <header className="mt-2">
                    <div className="overlay"></div>
                    <img src="/assets/img/news.png" className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src="/assets/img/phone_res.jpg" className="customImg align-self-center d-block d-lg-none" alt="" />
                    <div className="contents">
                        <div className="row align-items-end" style={{ height: '90vh' }}>
                            <div className="col col-12 col-lg-6 d-flex titleHeaderPhone">
                                News
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
                                <p className="titleContent">Lates News</p>
                                <p dangerouslySetInnerHTML={
                                    { __html: t('desk.home.paragraph') }
                                } className="textContent" />
                                <MDBRow>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="mt-4">
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="mt-4">
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className="mt-4">
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                    <MDBCol sm="12" md="4">
                                        <div className="d-flex justify-content-center align-items-center newsContent">
                                            <div className="overlayNewsContent">
                                                <div className="fontTitleRightContent">10 Nov 2020</div>
                                                <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                            </div>
                                            <MDBCardImage className="img-fluid imgNewsContent" src="/assets/img/building.png" waves alt=""  />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md='12' className="d-flex d-block d-lg-none d-md-none">
                                <div className="pagination p1 d-flex justify-content-center align-items-center mt-5">
                                    <ul>
                                        <LinkTo to="#"><li>Previous</li></LinkTo>
                                        <LinkTo to="#"><li>1</li></LinkTo>
                                        <LinkTo to="#"><li>2</li></LinkTo>
                                        <LinkTo to="#" className="is-active"><li>3</li></LinkTo>
                                        <LinkTo to="#"><li>4</li></LinkTo>
                                        <LinkTo to="#"><li>5</li></LinkTo>
                                        <LinkTo to="#"><li>6</li></LinkTo>
                                        <LinkTo to="#"><li>Next</li></LinkTo>
                                    </ul>
                                </div>
                            </MDBCol>
                            <MDBCol md='12' className="d-none d-lg-block">
                                <div className="pagination p12 d-flex justify-content-center align-items-center mt-5">
                                    <ul>
                                        <LinkTo to="#"><li>Previous</li></LinkTo>
                                        <LinkTo to="#"><li>1</li></LinkTo>
                                        <LinkTo to="#"><li>2</li></LinkTo>
                                        <LinkTo to="#" className="is-active"><li>3</li></LinkTo>
                                        <LinkTo to="#"><li>4</li></LinkTo>
                                        <LinkTo to="#"><li>5</li></LinkTo>
                                        <LinkTo to="#"><li>6</li></LinkTo>
                                        <LinkTo to="#"><li>Next</li></LinkTo>
                                    </ul>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="flex-column d-none d-lg-block">
                        <div className="bgRightMenu">
                            <div className="d-flex flex-column align-items-center">
                                <img className="img-fluid m-4 imgRightMenu" src="/assets/img/logow.png" alt=""/>
                                <p className="titleRightMenu">The Example College</p>
                                <div className="d-flex ">
                                    <ul className="breadcrumb">
                                        <li>
                                            <LinkTo to='/'>
                                                Home
                                            </LinkTo>
                                        </li>
                                        <li>
                                            <LinkTo to='/news'>
                                                News
                                            </LinkTo>
                                        </li>
                                        <li>Lates News</li>
                                    </ul>
                                </div>
                                <p className="subTitleRightMenu">News</p>
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
                                                Old News
                                            </div>
                                        </LinkTo>
                                    </li>
                                </ul>
                            </div>
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
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/identy.png" waves alt=""  />
                                </div>
                            </MDBAnimation>
                        </div>
                    </div>
                </Element>
            </>
        );
    }
};
export default withTranslation()(NewsPage);
