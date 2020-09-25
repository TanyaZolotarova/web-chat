import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GoogleLogin} from 'react-google-login';
import {signInGoogleRequest, signInRequest} from "../actions/userActions";
import {useForm} from "react-hook-form";


export const LoginContainer = ({}) => {
    const dispatch = useDispatch();

    const token = useSelector((store) => store.user.user.token);

    const {register, handleSubmit, errors} = useForm(); // hook writing from form

    const user = useSelector((state) => state.user.user);

    const responseGoogle = (response) => {
        dispatch(signInGoogleRequest(response.profileObj));
    }

    const responseGoogleFail = (response) => {
        console.log('responseGoogleFail - ', response.profileObj)
    }


    const sendData = (data) => {
        dispatch(signInRequest(data));

        if (token) {
            return [];
        }
    };


/*

3. если получили токен - переходим на страницу чата
4. (сначала обсудить!) если при загрузке страницы есть токен, не разрешаем вернуться на страницу логина (заранее обсудить!)
5. если сервер прислал ошибку, а не токен - показать инфу о том, что не можем зайти.
без усложнения логики или интерфейса

причины, по которым может сервер не пустить:Н
- не контиролируемая ошибка (например, проблема подключения к бд)
- не правильный пароль (если пользователь уже есть в бд)
- не прошли валидацию по полям
- пользователь забанен (запрещен вход)
*/

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
