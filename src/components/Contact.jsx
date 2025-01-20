import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {

    return (
        <section id="contact" className='p-8 bg-secondary text-white'>
            <div className='contact flex flex-col justify-center items-center gap-4'>
                <h2 className='contact-header text-3xl'>Contact</h2>
                <div className='contact-info flex flex-col gap-2 items-center'>
                    <div className='contact-address'>{CONTACT.address}</div>
                    <div className='contact-phonenumber'>{CONTACT.phoneNo}</div>
                    <div className='contact-email'>{CONTACT.email}</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;