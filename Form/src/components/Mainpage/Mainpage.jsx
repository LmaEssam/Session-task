import { useState } from 'react';
import * as yup from 'yup';
import './Mainpage.css';

function Mainpage() {
    const [formdata, setformdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
        gender: '',
        age: '',
        querytype: '',
        ruleacceptance: false,
    });

    const userschema = yup.object().shape({
        firstname: yup.string().min(4, "please take care you must enter more than 4 character"),
        lastname: yup.string(),
        email: yup.string().email('must be valid Email').required(),
        message: yup.string().max(100, 'take care you must write less than or equal 100 word'),
        querytype: yup.string(),
        ruleacceptance: yup.boolean(),
        gender: yup.string().oneOf(['Male', 'Female']),
        age: yup.number().positive().integer(),
    });

    async function testvalidation() {
        try {
            await userschema.validate(formdata, { abortEarly: false });
            console.log("Validation passed");
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                err.inner.forEach((error) => {
                    alert(`${error.path}: ${error.message}`);
                });
            }
        }
    }

    function onhandlesubmit(event) {
        event.preventDefault();
        testvalidation();
        console.log(formdata);
    }

    function onhandlechange(event) {
        let value = event.target.value;
        const key = event.target.name;

        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        if (key === 'age') {
            
           value=Number(value)
        }

        setformdata({
            ...formdata,
            [key]: value,
        });
    }

    return (
        <form onSubmit={onhandlesubmit}>
            <div id='main'>
                <h1>Contact Us</h1>
                <div id='info'>
                    <div id='information'>
                        <div className='first'>
                            <label htmlFor='Name'>First Name</label>
                            <input
                                required
                                id='Name'
                                value={formdata.firstname}
                                onChange={onhandlechange}
                                name='firstname'
                            />
                        </div>
                        <div className='first'>
                            <label htmlFor='last'>Last Name</label>
                            <input
                                required
                                id='last'
                                value={formdata.lastname}
                                onChange={onhandlechange}
                                name='lastname'
                            />
                        </div>
                        <div className='first'>
                            <label htmlFor='email'>Email Address</label>
                            <input
                                required
                                id='email'
                                value={formdata.email}
                                onChange={onhandlechange}
                                name='email'
                            />
                        </div>
                        <div className='second'>
                            <label htmlFor='age'>Age</label>
                            <input
                                type='number'
                                id='age'
                                value={formdata.age}
                                onChange={onhandlechange}
                                name='age'
                            />
                        </div>
                    </div>
                </div>
                <label>Gender</label>
                <div className='gender-container'>
                    <div className='gender-option'>
                        <input
                            type='radio'
                            id='male'
                            name='gender'
                            value='Male'
                            checked={formdata.gender === 'Male'}
                            onChange={onhandlechange}
                        />
                        <label htmlFor='male'>Male</label>
                    </div>
                    <div className='gender-option'>
                        <input
                            type='radio'
                            id='female'
                            name='gender'
                            value='Female'
                            checked={formdata.gender === 'Female'}
                            onChange={onhandlechange}
                        />
                        <label htmlFor='female'>Female</label>
                    </div>
                </div>
                <label>Query Type</label>
                <div className="query-type-container">
                    <div className="query-option">
                        <input
                            type="radio"
                            id="general-enquiry"
                            name="querytype"
                            value="General Enquiry"
                            checked={formdata.querytype === 'General Enquiry'}
                            onChange={onhandlechange}
                        />
                        <label htmlFor="general-enquiry">General Enquiry</label>
                    </div>
                    <div className="query-option">
                        <input
                            type="radio"
                            id="support-request"
                            name="querytype"
                            value="Support Request"
                            checked={formdata.querytype === 'Support Request'}
                            onChange={onhandlechange}
                        />
                        <label htmlFor="support-request">Support Request</label>
                    </div>
                </div>
                <div id='textarea'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        value={formdata.message}
                        onChange={onhandlechange}
                    ></textarea>
                </div>
                <div id='check'>
                    <input
                        type='checkbox'
                        name='ruleacceptance'
                        onChange={onhandlechange}
                        id='checkbox'
                        checked={formdata.ruleacceptance}
                    />
                    <label htmlFor='ruleacceptance'>Please check our rules</label>
                </div>
                <button id='submit' disabled={!formdata.ruleacceptance}>SUBMIT</button>
            </div>
        </form>
    );
}

export default Mainpage;


// value = parseInt(value, 10) || '';