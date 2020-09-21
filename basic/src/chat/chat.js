import React from "react";
import "./chat.css";

class Chat extends React.Component{
    render() {
        return(
          <div className="main-staff">
              <div className="direction">
              <nav className="nav-user navbar navbar-expand-lg navbar-light bg-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <div className="media">
                              <img src="..." className="mr-3" alt="..."/>
                                  <div className="media-body">
                                      <div className="dropdown">
                                          <button className="btn btn-secondary dropdown-toggle" type="button"
                                                  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                  aria-expanded="false">
                                              username
                                          </button>
                                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                              <input type="text" className=" form-control"
                                                     placeholder="изменить имя"
                                                     aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                              <input type="text" className=" form-control"
                                                     placeholder="изменить пароль"
                                                     aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                          </div>
                                      </div>
                                  </div>
                          </div>
                      </ul>
                  </div>
              </nav>
              <nav className="nav-chat navbar navbar-expand-lg navbar-light bg-light">

              </nav>
              </div>
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
                  <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Recipient's username"
                             aria-label="Recipient's username" aria-describedby="button-addon2"/>
                          <div className="input-group-append">
                              <button className="btn btn-outline-secondary bg-white" data-toggle="modal"
                                      data-target="#create" type="button" id="button-addon2">+
                              </button>
                          </div>
                  </div>
                  <div className="modal fade" id="create" tabIndex="-1" role="dialog"
                       aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">Создать беседу</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <input type="text" className="form-control" placeholder="Название беседы"
                                         aria-label="Recipient's username" aria-describedby="button-addon2"/>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                  </button>
                                  <button type="button" className="btn btn-primary">Save changes</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <a>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper tincidunt mi,
                      ac pretium ante blandit a. Nullam convallis eget orci et finibus. Donec tincidunt di
                      Sed venenatis arcu ipsum, at laoreet enim suscipit sollicitudin. Mauris diam augue, rho
                      ncus sit amet lectus eget, laoreet ultricies orci. Ut vel elit in orci iaculis tempus. E
                      tiam id fringilla magna. Aenean sed ligula ipsum. Class aptent taciti sociosqu ad litora
                      torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Proi
                      n blandit facilisis lectus, nec congue ante gravida sed. Nulla rutrum nisi sit amet enim ull
                      amcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque
                      commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut v
                      ehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, t
                      incidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.

                  </a>

              </div>
              <div className="chat-block">
                  <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper tincidunt mi, ac pretium ante blandit a. Nullam convallis eget orci et finibus. Donec tincidunt diam at ante tincidunt, ut interdum metus imperdiet. Quisque fringilla blandit nisi, nec fringilla enim varius vitae. Cras vehicula neque sit amet orci vulputate gravida. Donec et faucibus sem. Fusce a ligula sit amet leo euismod mollis. Donec sed eros purus. Morbi dignissim volutpat ante sit amet vehicula.

                      Sed venenatis arcu ipsum, at laoreet enim suscipit sollicitudin. Mauris diam augue, rhoncus sit amet lectus eget, laoreet ultricies orci. Ut vel elit in orci iaculis tempus. Etiam id fringilla magna. Aenean sed ligula ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Proin blandit facilisis lectus, nec congue ante gravida sed. Nulla rutrum nisi sit amet enim ullamcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut vehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, tincidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.

                     libero et lectus varius porta a ut sapien. Praesent id dolor odio. Praesent aliquam eleifend rhoncus. In hac habitasse platea dictumst. Duis quis ipsum quis mi scelerisque vehicula id in nibh. Sed at ipsum quis ligula fringilla tempor. Praesent nisl justo, semper sit amet libero a, consequat convallis turpis. Sed congue quam quis lobortis volutpat. Morbi dictum maximus dapibus.
                      amcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque
                      commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut v
                      ehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, t
                      incidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.
                      amcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque
                      commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut v
                      ehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, t
                      incidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.
                      amcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque
                      commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut v
                      ehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, t
                      incidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.
                      amcorper ultrices. Maecenas varius tempor massa, id tristique massa rutrum eget. Pellentesque
                      commodo ex turpis, vitae auctor diam luctus ut. Ut dignissim sem ut vestibulum suscipit. Ut v
                      ehicula nulla at libero rhoncus vulputate. Praesent quis risus suscipit, ornare metus a, t
                      incidunt dui. Duis in lectus id nibh blandit accumsan. Nulla viverra quis neque sit amet molestie.
                  </a>
                  <div className="space"></div>
                  <div className="chat-input">
                      <input type="text" className="form-control"
                             aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  </div>
              </div>
              </div>
          </div>
        );
    }
}

export default Chat;
