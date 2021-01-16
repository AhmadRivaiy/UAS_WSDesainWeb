import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation, MDBCardImage
} from 'mdbreact';
import { Helmet } from 'react-helmet';
import { Link as LinkTo } from 'react-router-dom';
import './SubEvents.css';
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
            <Helmet>
                <title>WCTSP Course: New and Aspiring Leaders</title>
            </Helmet>
                <div className="headerCustom mt-2">
                    <div className="overlay"></div>
                    <img src="/assets/img/event-one.jpg" className="customImg align-self-center d-none d-lg-block" alt="" />
                    <img src="/assets/img/phone_res.jpg" className="customImg align-self-center d-block d-lg-none" alt="" />
                </div>
                <div name="moreWelcome" className="d-flex flex-row mb-5">
                    <MDBContainer size="sm">
                        <div style={{ paddingLeft: '20vh' }}>
                            <MDBRow>
                                <MDBCol md='12' className='mt-4'>
                                    <p className="titleContent">WCTSP Course: New and Aspiring Leaders</p>
                                    <h4>20 January 2021</h4><br/>
                                    <p dangerouslySetInnerHTML={
                                        { __html: t('desk.paragraph.home') }
                                    } className="textContent" />
                                    <p className="textContent">
                                        He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldn't be sure. Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long.
                                    </p>
                                    <p className="textContent">
                                        It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.
                                    </p>
                                    <p className="textContent">
                                        What have you noticed today? I noticed that if you outline the eyes, nose, and mouth on your face with your finger, you make an "I" which makes perfect sense, but is something I never noticed before. What have you noticed today?
                                    </p>
                                    <p className="textContent">
                                        Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?
                                    </p>
                                    <p className="textContent">
                                        It had been her dream for years but Dana had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As she woke, she realized she was once again at a crossroads. Would it be another excuse or would she finally find the courage to pursue her dream? Dana rose and took her first step.
                                    </p>
                                    <p className="textContent">
                                        Sometimes there isn't a good answer. No matter how you try to rationalize the outcome, it doesn't make sense. And instead of an answer, you are simply left with a question. Why?
                                    </p>
                                </MDBCol>
                                {/* <MDBCol  className="btnGroup mt-5">
                                    <LinkTo to="/news">
                                        <div className="btnBottomContent btnOrange btnNext" >
                                            <span><i className="fas fa-arrow-left cs_pointer fa-lg"></i></span> Back To News
                                        </div>
                                    </LinkTo>
                                </MDBCol> */}
                            </MDBRow>
                        </div>
                    </MDBContainer>
                    <div className="flex-column d-none d-lg-block">
                        <div className="mt-4">
                            <MDBAnimation reveal type='fadeInRight'>
                                <div className="d-flex flex-row">
                                    <p className="fontTitleRightContentPrim">Recent News</p>
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
                                <div className="rightMenu">
                                    <div className="overlayRightMenu">
                                        <div className="fontTitleRightContent">10 Nov 2020</div>
                                        <div className="fontSubTitleRightContent">NEW BUILDING</div>
                                    </div>
                                    <div className="eventRightContent"/>
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
                </div>
            </>
        );
    }
};
export default withTranslation()(NewsPage);
