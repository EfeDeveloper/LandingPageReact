import React, { Component } from "react";

export class Header extends Component {
   render() {
      return (
         <header id="header">
            <div className="intro">
               <div className="overlay">
                  <video
                     autoPlay="autoplay"
                     loop="loop"
                     muted
                     style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                     }}
                  >
                     <source
                        src="https://firebasestorage.googleapis.com/v0/b/clarora-61db5.appspot.com/o/Landing.mp4?alt=media&token=d15b3635-0d1e-4c03-9f82-deee5cb10544"
                        type="video/mp4"
                     />
                     Your browser does not support the video tag.
                  </video>
                  <div className="container">
                     <div className="row">
                        <div className="col-md-8 col-md-offset-2 intro-text">
                           <h1>
                              {this.props.data ? this.props.data.title : "Loading"}
                              <span></span>
                           </h1>
                           <p>
                              {this.props.data ? this.props.data.paragraph : "Loading"}
                           </p>
                           <br/>
                           <br/>
                           <br/>
                           {/* <a
                              href="#features"
                              className="btn btn-custom btn-lg page-scroll"
                           >
                              Mira mas!
                           </a>{" "} */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default Header;
