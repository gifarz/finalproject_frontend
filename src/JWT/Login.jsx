import React ,{useState} from 'react';
import axios from 'axios'

 const Login = (props) => {

    const url = "http://127.0.0.1:8080/api/auth/signin"

    const [form,setForm ] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url,form)
        .then(res=>{
            if(res.status === 200){
                sessionStorage.setItem("token",res.data.accessToken);
                alert(
                    `Login Succes \nYour Acces Token is : ${sessionStorage.getItem('token')}`
                )
            } else {
                throw new Error('Login Failed')
            }
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
        <div 
        style={{
            background: 'url(https://images7.alphacoders.com/313/313719.jpg) center / cover',
            position: "relative",
            height: "615px",
            paddingTop: "100px"
        }}>
            <div className="card" style={{width: "600px", margin: "auto"}}>
                <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <h3>Please Login!</h3>
                        <hr/>
                    </div>
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
                        />
                    </div>
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
                        />
                    </div>
                    <button className="btn btn-danger">Login</button>
                </form>
                    
            </div>
        </div>
    </div>
    )

}

export default Login