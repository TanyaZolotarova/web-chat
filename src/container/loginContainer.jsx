import React from "react";
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from "react-redux";
import {signInGoogleRequest} from "../actions/userActions";

import { useSelector } from 'react-redux';


export const LoginContainer = ({}) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    const responseGoogle = (response) => {
        dispatch(signInGoogleRequest(response.profileObj));
    }

    const responseGoogleFail = (response) => {
        console.log('responseGoogleFail - ', response.profileObj)
    }

     return(
         <div>
              <form className="form-staff">
                  <div className="form-group">
                      <fieldset>
                      <label htmlFor="formGroupExampleInput">Example label</label>
                      <input type="text" className="form-control" id="formGroupExampleInput"
                             placeholder="Example input placeholder"/>
                      </fieldset>
                  </div>
                  <div className="form-group">
                      <fieldset>
                      <label htmlFor="formGroupExampleInput2">Another label</label>
                      <input type="text" className="form-control" id="formGroupExampleInput2"
                             placeholder="Another input placeholder"/>
                      </fieldset>
                  </div>
                  <button type="submit" className="btn btn-primary width-100">Submit</button>
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

const mapStateToProps = (state) => {
    return {
    };
};

// export default connect(mapStateToProps, {  })(LoginContainer);
export default LoginContainer;
