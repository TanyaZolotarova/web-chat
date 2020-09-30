import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GoogleLogin} from 'react-google-login';
import {signInGoogleRequest, signInRequest} from "../actions/userActions";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';



export const LoginContainer = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const token = useSelector((store) => store.user.user.token);

    const {register, handleSubmit, errors} = useForm(); // hook writing from form

    const responseGoogle = (response) => {
        dispatch(signInGoogleRequest(response.profileObj));

    }

    const responseGoogleFail = (response) => {
        console.log('responseGoogleFail - ', response.profileObj)
    }

    const sendData = (data) => {
        dispatch(signInRequest(data));
    };

    useEffect(() => {

        if(token){
            history.push('/chat');
        }
    },[token]);

    return (
        <div>
            <form className="form-staff">
                <div className="form-group">
                    <fieldset>
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input name="email"
                               type="text"
                               className="form-control"
                               id="formGroupExampleInput"
                               placeholder="Enter Email"
                               ref={register({
                                   required: "Enter Email",
                                   pattern: {
                                       value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                       message: "Enter a valid email",
                                   }
                               })}
                        />
                        {errors.email && <p className="error error-staff">{errors.email.message}</p>}
                    </fieldset>
                </div>
                <div className="form-group">
                    <fieldset>
                        <label htmlFor="formGroupExampleInput2">Password</label>
                        <input name="password"
                               type="password"
                               className="form-control"
                               id="formGroupExampleInput2"
                               placeholder="password"
                               ref={register({
                                   required: "Enter password",
                               })}
                        />
                        {errors.password && <p className="error error-staff"> {errors.password.message} </p>}
                    </fieldset>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit(sendData)}
                    disabled={errors.password || errors.email}
                    className="btn btn-primary width-100"
                >Submit
                </button>
                <GoogleLogin
                    clientId="584019000189-2bikvl7c5s002gdl55eaepo88hdjq3bg.apps.googleusercontent.com"
                    buttonText="Залогиниться через Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleFail}
                />
            </form>
        </div>
    );
}

export default LoginContainer;
