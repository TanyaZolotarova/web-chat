import React from "react";


export const LoginContainer = ({}) => {
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
                  <button type="submit" className="btn btn-primary width-100 margin-top10">Google</button>
                  <button type="submit" className="btn btn-primary width-100 margin-top10">Facebook</button>
              </form>
     </div>
     );
}

export default LoginContainer;
