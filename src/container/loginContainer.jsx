import React, {useState} from "react";
import connect from "react-redux/lib/connect/connect";
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from "react-redux";
import {signInGoogleRequest} from "../actions/userActions";
import { useForm } from "react-hook-form";

export const LoginContainer = ({}) => {

    const dispatch = useDispatch()

    const responseGoogle = (response) => {
        const { name } = response.profileObj;
        console.log(response);
        dispatch(signInGoogleRequest(name));
    }

    const {register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log("Data submitted: ", data);
        sendData(data);
        getData();
    }


    const sendData = (data) =>{
        fetch('http://192.168.0.109:8000/auth',
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password
                }),
            })
            .then((res) => res.json())
            .then((result) => data(result.rows))
    }

    const getData = (setData) =>{
        fetch('http://192.168.0.109:8000/auth/me',
            {
                method: 'GET',
                body: JSON.stringify({
                    email: setData.email,
                    password: setData.password,
                    token: setData.token
                })
             })
            .then((res) => res.json())
            .then((result) => setData(result.rows))
    }

    return(
        <div>
            <form className="form-staff" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <fieldset>
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input name="email" type="text" className="form-control" id="formGroupExampleInput"
                               placeholder="Enter Email" ref={register({
                            required:"Enter Email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid email",
                               }})}/>
                        {errors.email && <p className="error error-staff">{errors.email.message}</p>}
                    </fieldset>
                </div>
                <div className="form-group">
                    <fieldset>
                        <label htmlFor="formGroupExampleInput2">Password</label>
                        <input name="password" type="password" className="form-control" id="formGroupExampleInput2"
                               placeholder="password" ref={register({
                            required:"Enter password",
                        })}/>
                        {errors.password && <p className="error error-staff">{errors.password.message}</p>}
                    </fieldset>
                </div>
                <button type="submit" disabled={errors.password || errors.email} className="btn btn-primary width-100">Submit</button>
                <GoogleLogin
                    clientId="216757630496-asjs0cafllgi8hr0bpgjk9e7jj0upkae.apps.googleusercontent.com"
                    buttonText="Залогиниться через Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />

            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    };
};

// export default connect(mapStateToProps, {  })(LoginContainer);
export default LoginContainer;
