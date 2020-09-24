import React from "react";
import connect from "react-redux/lib/connect/connect";
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from "react-redux";
import {signInGoogleRequest} from "../actions/userActions";

export const LoginContainer = ({}) => {

    const dispatch = useDispatch()

    const responseGoogle = (response) => {
        const { name } = response.profileObj;
        console.log(response);
        dispatch(signInGoogleRequest(name));
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
