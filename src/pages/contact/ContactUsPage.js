import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation, MDBCardImage, MDBBtn, MDBIcon
} from 'mdbreact';
import { Link as LinkTo } from 'react-router-dom';
import './Contact.css';
import { Link, Element, Events } from 'react-scroll'
import { withTranslation } from 'react-i18next';

class ContactUsPage extends React.Component {
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
                <header className="mt-0">
                    <div className="overlay"></div>
                    <img src="/assets/img/contact.png" className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src="/assets/img/phone_res.jpg" className="customImg align-self-center d-block d-lg-none" alt="" />
                    <div className="contents">
                        <div className="row align-items-end" style={{ height: '90vh' }}>
                            <div className="col col-12 col-lg-6 d-flex titleHeaderPhone">
                                {t('title.page.contact_us')}
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
                                <p dangerouslySetInnerHTML={
                                    { __html: t('desk.paragraph.home')}
                                } className="textContent" />
                                <form>
                                    <MDBRow>
                                        <MDBCol sm="12" md="5" className="m-2">
                                            <label htmlFor="titleContact" className="labelFormContact">
                                                {t('label.form.title.contact_us')}*
                                            </label>
                                            <input type="text" id="titleContact" className="form-control " />
                                        </MDBCol>
                                        <MDBCol sm="12" md="5" className="m-2">
                                            <label htmlFor="nameContact" className="labelFormContact">
                                                {t('label.form.name.contact_us')}*
                                            </label>
                                            <input type="text" id="nameContact" className="form-control" />
                                        </MDBCol>
                                        <MDBCol sm="12" md="5" className="m-2">
                                            <label htmlFor="subjectContact" className="labelFormContact">
                                                {t('label.form.subject.contact_us')}*
                                            </label>
                                            <input type="text" id="subjectContact" className="form-control" />
                                        </MDBCol>
                                        <MDBCol sm="12" md="5" className="m-2">
                                            <label htmlFor="emailContact" className="labelFormContact">
                                                Email*
                                            </label>
                                            <input type="text" id="emailContact" className="form-control" />
                                        </MDBCol>
                                        <MDBCol sm="12" md="11" className="m-2">
                                            <label htmlFor="defaultFormContactMessageEx" className="labelFormContact">
                                                {t('label.form.message.contact_us')}*
                                            </label>
                                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="6" />
                                        </MDBCol>
                                        <MDBCol sm="12" md="12" className="m-2">
                                            <p>{t('label.form.policy.contact_us')}<br/><LinkTo to="#">{t('label.link.policy.contact_us')}</LinkTo></p>
                                        </MDBCol>
                                        <MDBCol sm="12" md="3" className="ml-2">
                                            <div className='d-flex flex-direction-row justify-content-space-between align-items-center verifyBox'>
                                                <input type="checkbox" id="verifyCheck" className="form-control" style={{ maxWidth: 45 }}/>
                                                <p className="h5 pl-2 mt-2 titleVerify">I'am not a robot</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol sm="12" md="12" className="mt-4 ml-1">
                                            <div className="mt-2">
                                                <MDBBtn color="primary" outline type="submit" style={{ width: 200 }}>
                                                    Send
                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                                </MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCol>
                            <MDBCol md='12' className="btnGroup mt-5">
                                <div className="btnBottomContent btnOrange btnNext">
                                    <span><i class="fas fa-arrow-left cs_pointer fa-lg"></i></span> Curiculum
                                </div>
                                <div className="btnBottomContent btnYellow btnNext">
                                    <div>E-Learning</div> <span><i class="fas fa-arrow-right cs_pointer fa-lg"></i></span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="flex-column d-none d-lg-block">
                        <div className="bgRightMenu">
                            <div className="d-flex flex-column align-items-center">
                                <img className="img-fluid m-4 imgRightMenu" src="/assets/img/logow.png" alt="" />
                                <p className="titleRightMenu">{t('title.univ.label')}</p>
                                <div className="d-flex ">
                                    <ul className="breadcrumb">
                                        <li>
                                            <LinkTo to='/'>
                                                {t('home.nav.label')}
                                            </LinkTo>
                                        </li>
                                        <li>
                                            <LinkTo to='/contact_us'>
                                                {t('contact.nav.label')}
                                            </LinkTo>
                                        </li>
                                        <li>{t('title.page.contact_us')}</li>
                                    </ul>
                                </div>
                                <p className="subTitleRightMenu">{t('title.page.contact_us')}</p>
                                <ul className='list-unstyled text-center'>
                                    <li>
                                        <LinkTo className="white-text" to='/'>
                                            <div className="subListRightMenu">
                                                Where We Are
                                            </div>
                                        </LinkTo>
                                    </li>
                                    <li>
                                        <LinkTo className="white-text" to='/'>
                                            <div className="subListRightMenu">
                                                How To Visit Us
                                            </div>
                                        </LinkTo>
                                    </li>
                                    <li>
                                        <LinkTo className="white-text" to='/'>
                                            <div className="subListRightMenu">
                                                Link 3
                                            </div>
                                        </LinkTo>
                                    </li>
                                    <li>
                                        <LinkTo className="white-text" to='/'>
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
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/building.png" waves alt="" />
                                </div>
                            </MDBAnimation>
                        </div>
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">{t('upcomming.sidecontent.all')}</p>
                                    <div className="d-flex justify-content-center">
                                    </div>
                                </div>
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/color-1.jpg" waves alt="" />
                                </div>
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
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/students.png" waves alt="" />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">Where We are</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/forest.png" waves alt="" />
                                </div>
                            </MDBAnimation>
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="rightMenu mt-2">
                                    <div className="overlayRightMenu">
                                        <div className="fontSubTitleRightContent">{t('about.sidemenu.sublabel')}</div>
                                    </div>
                                    <MDBCardImage className="img-fluid imgRightContent" src="/assets/img/identy.png" waves alt="" />
                                </div>
                            </MDBAnimation>
                        </div>
                    </div>
                </Element>
            </>
        );
    }
};
export default withTranslation()(ContactUsPage);
