import { useState } from 'react'
import './Mainpage.css'
function Mainpage (){
    const [formdata,setformdata]=useState({
        firstname:'',
        lastname:'',
        email:'',
        message:'',
        querytype:'',
        ruleacceptance:false,
    
    })
    function onhandlesubmit(event){
        event.preventDefault()
        console.log(formdata)

    }
    function onhandlechange(event){
        var value = event.target.value
        const key= event.target.name
        if (event.target.type=='checkbox') {
            value = event.target.checked
            console.log(check)
            
        } 
        setformdata({
            ...formdata,
            [key]:value,
        })

    }
    return(
        <form onSubmit={onhandlesubmit}>
        <div id='main'>
            <h1>Contact Us</h1>
            <div id='info'>
                <div id='information'>
                    <div className='first'>
                    <label htmlFor='Name'>First Name</label>
                    <input required id='Name' value={formdata.firstname} onChange={onhandlechange} name='firstname' />
                    </div>
                    <div className='first'>
                    <label htmlFor='last'>Last Name</label>
                    <input required id='last' value={formdata.lastname}  onChange={onhandlechange} name='lastname'/>
                    </div>

                </div>
                <div className='first'>
                    <label htmlFor='email'>Email Address</label>
                    <input required id='email' value={formdata.email} onChange={onhandlechange} name='email'/>
                    </div>
            </div>
            <div className="query-type-container">
        <div className="query-option">
            <input type="radio" id="general-enquiry" name="querytype" />
            <label htmlFor="general-enquiry">General Enquiry</label>
        </div>
        <div className="query-option">
            <input type="radio" id="support-request" name="querytype" />
            <label htmlFor="support-request">Support Request</label>
        </div>
    </div>
    <div id='textarea'>
    <label htmlFor='message'>message</label>
    <textarea name='message' id='message' value={formdata.message} onChange={onhandlechange}></textarea>
    </div>
    <div id='check'>
    <input type='checkbox' name='ruleacceptance' onChange={onhandlechange} id='checkbox'/>
    <label htmlFor='ruleacceptance'>please check our rule</label>
    </div>
            <button id='submit'disabled={!formdata.ruleacceptance} >SUBMIT</button>

        </div>
        </form>
    )
}
export default Mainpage