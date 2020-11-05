import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBEdgeHeader } from 'mdbreact';
import './Account.css';
import { withTranslation } from 'react-i18next';

class LoginPage extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <MDBContainer>
                    <MDBRow center>
                        <MDBCol middle md={12} className='mt-5 mx-auto' style={{ paddingTop: 20 }}>
                            <MDBCard
                                className='bgCardLogin card-image align-self-center'
                            >
                                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                                    <div className='text-center'>
                                        <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                                            <strong>SIGN</strong>
                                            <a href='#!' className='green-text font-weight-bold'>
                                                <strong> IN</strong>
                                            </a>
                                        </h3>
                                    </div>
                                    <MDBInput
                                        label='Your email'
                                        group
                                        type='text'
                                        validate
                                        labelClass='white-text'
                                        style={{ color: 'white' }}
                                    />
                                    <MDBInput
                                        label='Your password'
                                        group
                                        type='password'
                                        validate
                                        labelClass='white-text'
                                        style={{ color: 'white' }}
                                    />
                                    <MDBRow className='d-flex align-items-center mb-4'>
                                        <div className='text-center mb-3 col-md-12'>
                                            <MDBBtn
                                                color='success'
                                                type='button'
                                                gradient="aqua"
                                                className='btn-block z-depth-1'
                                                onClick={() => console.log(window.location.pathname)}
                                            >
                                                <strong>{t('account.form.label')}</strong>
                                            </MDBBtn>
                                        </div>
                                    </MDBRow>
                                    <MDBCol md='12'>
                                        <p className='font-small white-text d-flex justify-content-end'>
                                            Don't have an account yet?
                                            <a href='/register' className='green-text ml-1 font-weight-bold'>
                                                Register now
                                            </a>
                                        </p>
                                    </MDBCol>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
};

export default withTranslation()(LoginPage);