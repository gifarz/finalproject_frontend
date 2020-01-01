import React ,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
// import Auth from './Context/Auth';

 const Register = (props) => {

    const {register, errors, handleSubmit} = useForm({mode: "onChange" })
    const url = "http://127.0.0.1:8080/api/auth/signup"
    const [form,setForm ] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        roles: ["USER"]
    })

    // const handleRoles = (e) => {
    //     const role = e.target.value;
    //     if(role === "USER") {
    //         console.log('this is user')
    //     } else if(role === "ADMIN") {
    //         console.log('this is admin')
    //     }
    // }

    const submit = () => {
        // e.preventDefault()
        axios.post(url,form)
        .then(res=>{
            alert('Registered successfully!')
            props.history.push("/login")
        })
        .catch(function(err){
            console.log(err)
        })
    }

    const handleChange = (e) => {
		const {name,value} = e.target
		setForm({
			...form,
			[name] : value
		})
    }
    return (
        // <Auth.Provider value={{submit}}>
            <div 
            style={{
                background: 'url(https://images7.alphacoders.com/313/313719.jpg) center / cover',
                position: "relative",
                height: "850px",
                paddingTop: "30px"
            }}>
                <div className="card" style={{width: "600px", margin: "auto"}}>
                    <div className="card-body">
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <h3>Please Register!</h3>
                            <hr/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                onChange={(e) => handleChange(e)}
                                value={form.name}
                                type="text" 
                                name="name" 
                                id="name" 
                                className="form-control" 
                                placeholder="Insert name"
                                ref={register({
                                    required: "This is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimal character is 3"
                                    }
                                })}
                            />
                        </div>
                        {errors.name && <p style={{color: "red"}}>{errors.name.message}</p> }

                        <div className="form-group"> 
                            <label>Username</label>
                            <input 
                                onChange={(e) => handleChange(e)}
                                value={form.username}
                                type="text" 
                                name="username" 
                                id="username" 
                                className="form-control" 
                                placeholder="Insert username"
                                ref={register({
                                    required: "This is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimal character is 3"
                                    }
                                })}
                            />
                        </div>
                        {errors.username && <p style={{color: "red"}}>{errors.username.message}</p> }

                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                onChange={(e) => handleChange(e)}
                                value={form.email}
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Insert email"
                                ref={register({
                                    required: "This is required"
                                })}
                            />
                        </div>
                        {errors.email && <p style={{color: "red"}}>{errors.email.message}</p> }

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                onChange={(e) => handleChange(e)}
                                value={form.password}
                                type="password" 
                                name="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Insert password"
                                ref={register({
                                    required: "This is required",
                                    minLength: {
                                        value: 3,
                                        message: "Minimal character is 3"
                                    }
                                })}
                            />
                        </div>
                        {errors.password && <p style={{color: "red"}}>{errors.password.message}</p> }

                        {/* <div className="form-group">
                            <label>User Role</label>
                            <input 
                                onChange={(e) => handleRoles(e)}
                                value={form.roles}
                                type="roles" 
                                name="roles" 
                                id="roles" 
                                className="form-control" 
                                placeholder="Insert roles"
                            />
                        </div> */}
                        <p>Already have an account ? Please <a href="/login">login here</a></p>
                        <button className="btn btn-success">Register</button>
                    </form>
                        
                </div>
            </div>
        </div>
    // </Auth.Provider>
    )

}

export default Register