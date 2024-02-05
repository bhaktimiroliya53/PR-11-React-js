import axios from 'axios';
import React, { useState } from 'react'


function Form() {

const [name , setName] = useState('');    
const [company , setCompany] = useState('');    
const [email , setEmail] = useState('');    
const [phone , setPhone] = useState('');    
const [message , setMessage] = useState('');   

const submit = async(e) => {
    e.preventDefault();
    try{
        let {data} = await axios.post(`https://realtime-react-project-28257-default-rtdb.firebaseio.com/uses.json`,{
            name : name,
            company : company,
            email : email,
            phone : phone,
            message : message
        })
        console.log(data);
        setName('')
        setCompany('')
        setEmail('')
        setPhone('')
        setMessage('') 

        alert('Record is Add')

    }catch(err){
        console.log(err);
        return false
    }
}


    return (
        <>
            <div style={{ padding: '20px', width: '65%'}}>

                <h1 style={{ color: 'rgb(241, 72, 106)', marginBottom: '30px' }}>Title</h1>

                <div style={{ boxShadow: '0px 0px 22px -2.9px #FFC0C0', display: 'flex' }}>

                    <div className='col-md-5'
                        style={{ width: '300px', height: '500px', backgroundColor: 'rgb(241, 72, 106)', margin: '0' }}>

                        <h2
                            style={{ color: 'white', textAlign: 'left', padding: '28px 20px 15px 20px', fontWeight: 'bold' }}>
                            Contact US
                        </h2>

                        <h3
                            style={{ color: 'black', textAlign: 'left', padding: '0px 30px', fontSize: '18px' }}>
                            Address
                        </h3>

                        <h3
                            style={{ color: 'black', textAlign: 'left', padding: '0px 30px', fontSize: '18px' }}>
                            Phone Number
                        </h3>

                        <h3
                            style={{ color: 'black', textAlign: 'left', padding: '0px 30px', fontSize: '18px' }}>
                            Email
                        </h3>
                    </div>
                    <div style={{ margin: '30px', marginLeft: '100px' }}>

                        <h4 style={{ fontWeight: 'bold' }}>Email Us</h4>

                        <form style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <label style={{ width: '50%', marginBottom: '20px' }}>

                                <h4 style={{ margin: '0', fontSize: '18px', fontWeight: 'normal' }}>
                                    Name
                                </h4>

                                <input type="text" style={{ padding: '5px', marginTop: '5px', width: '180px', border: '1px solid #f1486b', borderRadius: '5px', outline: 'none' }} onChange={ (e) => setName(e.target.value)} value={name}/>

                            </label>

                            <label style={{ width: '50%', marginBottom: '20px' }}>

                                <h4 style={{ margin: '0', fontSize: '18px', fontWeight: 'normal' }}>
                                    Company
                                </h4>

                                <input type="text" style={{ padding: '5px', marginTop: '5px', width: '180px', border: '1px solid #f1486b', borderRadius: '5px', outline: 'none' }} onChange={ (e) => setCompany(e.target.value)} value={company}/>

                            </label>

                            <label style={{ width: '50%', marginBottom: '20px' }}>

                                <h4 style={{ margin: '0', fontSize: '18px', fontWeight: 'normal' }}>
                                    Email
                                </h4>

                                <input type="email" style={{ padding: '5px', marginTop: '5px', width: '180px', border: '1px solid #f1486b', borderRadius: '5px', outline: 'none' }} onChange={ (e) => setEmail(e.target.value)} value={email}/>

                            </label>

                            <label style={{ width: '50%', marginBottom: '20px' }}>

                                <h4 style={{ margin: '0', fontSize: '18px', fontWeight: 'normal' }}>
                                    Phone
                                </h4>

                                <input type="phone" style={{ padding: '5px', marginTop: '5px', width: '180px', border: '1px solid #f1486b', borderRadius: '5px', outline: 'none' }} onChange={ (e) => setPhone(e.target.value)} value={
                                    phone
                                }/>

                            </label>

                            <label style={{}}>

                                <h4 style={{ margin: '0', fontSize: '18px', fontWeight: 'normal', marginBottom: '8px' }}>
                                    Message
                                </h4>

                                <textarea cols='53' rows='4' style={{ padding: '5px', marginTop: '5px', border: '1px solid #f1486b', borderRadius: '5px', outline: 'none' }} onChange={ (e) => setMessage(e.target.value)} value={message
                                }></textarea>

                            </label>

                        </form>

                        <button type='button' onClick={submit} style={{ width: '90%', backgroundColor: 'rgb(241, 72, 106)', border: 'none', padding: '8px', marginTop: '32px', color: 'white', fontWeight: 'bold' }}>
                            Submit
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Form