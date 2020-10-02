import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GoogleLogin} from 'react-google-login';
import {signInGoogleRequest, signInRequest} from "../actions/userActions";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";

export const LoginContainer = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const token = useSelector((store) => store.user.token);

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
        if (token) {
            history.push('/chat');
        }
    }, [token]);

    return (
        <div>
            <form className="form-staff">

                <InputComponent
                    title="Email"
                    htmlFor="formGroupExampleInput"
                    type="text"
                    className="form-control"
                    name="email"
                    error={errors.email}
                    id="formGroupExampleInput"
                    placeholder="Enter Email"
                    inputRef={register({
                        required: "Enter Email",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i,
                            message: "Enter a valid email",
                        }
                    })}

                />

                <InputComponent
                    title="Password"
                    htmlFor="formGroupExampleInput2"
                    type="password"
                    className="form-control"
                    name="password"
                    id="formGroupExampleInput2"
                    placeholder="password"
                    error={errors.password}
                    inputRef={register({
                        required: "Enter password",
                    })}
                />

                <ButtonComponent
                   type = "submit"
                   onClick = {handleSubmit(sendData)}
                   disabled = {errors.password || errors.email}
                   className = "btn btn-primary width-100 btn-login"
                   title = "Submit"
                />
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
