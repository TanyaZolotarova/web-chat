import React from "react";
import "./chat.css";

class Chat extends React.Component{
    render() {
        return(
          <div className="main-staff">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Staff
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a className="dropdown-item" data-toggle="modal" data-target="#settings" href="#">Настройки</a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">Выход</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </nav>
              <div className="modal fade" id="settings" tabIndex="-1" role="dialog"
                   aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title" id="settings">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close"/>
                          </div>
                          <div className="modal-body">
                              <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text" id="inputGroup-sizing-default">Логин</span>
                                  </div>
                                  <input type="text" className="form-control" aria-label="Sizing example input"
                                         aria-describedby="inputGroup-sizing-default"/>
                              </div>
                              <div className="input-group mb-3">
                                  <div className="input-group-prepend">
                                      <span className="input-group-text" id="inputGroup-sizing-default">Пароль</span>
                                  </div>
                                  <input type="text" className="form-control" aria-label="Sizing example input"
                                         aria-describedby="inputGroup-sizing-default"/>
                              </div>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="direction">
              <div className="users-block">
                  <a>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper tincidunt mi, ac pretium ante blandit a. Nullam convallis eget orci et finibus. Donec tincidunt diam at ante tincidunt, ut interdum metus imperdiet. Quisque fringilla blandit nisi, nec fringilla enim varius vitae. Cras vehicula neque sit amet orci vulputate gravida. Donec et faucibus sem. Fusce a ligula sit amet leo euismod mollis. Donec sed eros purus. Morbi dignissim volutpat ante sit amet vehicula.

                      Sed venenatis arcu ipsum, at laoreet enim suscipit sollicitudin. Mauris diam augue, rhoncus sit amet lectus eget, laoreet ultricies orci. Ut vel elit in orci iaculis tempus. Etiam id fringilla magna. Aenean sed ligula ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Proin blandit facilisis lectus, nec congue ante gravida sed. Nulla rutrum nisi sit amet enim ullamcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut vehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, tincidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.

                      Donec consectetur finibus purus. Mauris rutrum velit sit amet erat eleifend vulputate nec at erat. Donec eget pulvinar libero, eget aliquam arcu. Nulla a velit faucibus est commodo malesuada. In luctus elit eu sem pellentesque elementum. Aenean semper iaculis massa, eget luctus arcu egestas vitae. Praesent aliquam venenatis lacus in semper. Phasellus laoreet, ex quis luctus lobortis, tellus nisl tempus nibh, sed lobortis dolor augue malesuada enim. Aenean sodales ex quis nisl ornare, non vulputate lacus fringilla. Etiam vulputate mauris quis lobortis posuere. Nulla faucibus id ante in bibendum.

                      Vestibulum elit libero, accumsan ac est vel, efficitur hendrerit felis. Aenean sit amet enim justo. Nam feugiat, urna id sodales vestibulum, ipsum ante dapibus quam, vitae pellentesque eros nisl in nunc. Etiam et nisl nisi. Aenean eget dignissim mauris. Fusce in suscipit risus. Fusce a felis ipsum. Cras non enim eu purus ornare auctor. Nunc scelerisque vitae augue vel scelerisque. Morbi commodo risus nec magna volutpat mollis.

                      Donec commodo libero et lectus varius porta a ut sapien. Praesent id dolor odio. Praesent aliquam eleifend rhoncus. In hac habitasse platea dictumst. Duis quis ipsum quis mi scelerisque vehicula id in nibh. Sed at ipsum quis ligula fringilla tempor. Praesent nisl justo, semper sit amet libero a, consequat convallis turpis. Sed congue quam quis lobortis volutpat. Morbi dictum maximus dapibus.


                  </a>

              </div>
              <div className="chat-block">
                  <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper tincidunt mi, ac pretium ante blandit a. Nullam convallis eget orci et finibus. Donec tincidunt diam at ante tincidunt, ut interdum metus imperdiet. Quisque fringilla blandit nisi, nec fringilla enim varius vitae. Cras vehicula neque sit amet orci vulputate gravida. Donec et faucibus sem. Fusce a ligula sit amet leo euismod mollis. Donec sed eros purus. Morbi dignissim volutpat ante sit amet vehicula.

                      Sed venenatis arcu ipsum, at laoreet enim suscipit sollicitudin. Mauris diam augue, rhoncus sit amet lectus eget, laoreet ultricies orci. Ut vel elit in orci iaculis tempus. Etiam id fringilla magna. Aenean sed ligula ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Proin blandit facilisis lectus, nec congue ante gravida sed. Nulla rutrum nisi sit amet enim ullamcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut vehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, tincidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.

                      Donec consectetur finibus purus. Mauris rutrum velit sit amet erat eleifend vulputate nec at erat. Donec eget pulvinar libero, eget aliquam arcu. Nulla a velit faucibus est commodo malesuada. In luctus elit eu sem pellentesque elementum. Aenean semper iaculis massa, eget luctus arcu egestas vitae. Praesent aliquam venenatis lacus in semper. Phasellus laoreet, ex quis luctus lobortis, tellus nisl tempus nibh, sed lobortis dolor augue malesuada enim. Aenean sodales ex quis nisl ornare, non vulputate lacus fringilla. Etiam vulputate mauris quis lobortis posuere. Nulla faucibus id ante in bibendum.

                      Vestibulum elit libero, accumsan ac est vel, efficitur hendrerit felis. Aenean sit amet enim justo. Nam feugiat, urna id sodales vestibulum, ipsum ante dapibus quam, vitae pellentesque eros nisl in nunc. Etiam et nisl nisi. Aenean eget dignissim mauris. Fusce in suscipit risus. Fusce a felis ipsum. Cras non enim eu purus ornare auctor. Nunc scelerisque vitae augue vel scelerisque. Morbi commodo risus nec magna volutpat mollis.

                      Donec commodo libero et lectus varius porta a ut sapien. Praesent id dolor odio. Praesent aliquam eleifend rhoncus. In hac habitasse platea dictumst. Duis quis ipsum quis mi scelerisque vehicula id in nibh. Sed at ipsum quis ligula fringilla tempor. Praesent nisl justo, semper sit amet libero a, consequat convallis turpis. Sed congue quam quis lobortis volutpat. Morbi dictum maximus dapibus.

                  </a>
              </div>
              </div>
          </div>
        );
    }
}

export default Chat;
