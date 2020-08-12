import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            success: false
        }

        this.sendEmail= this.sendEmail.bind(this)
    }

    sendEmail(e) {
        e.preventDefault();
        this.setState({
            loading:true
        })
        console.log("si entra aqui",e.target);
        emailjs.sendForm('gmail', 'cvform', e.target, 'user_8N8bPZTTTrm73NRJsiqsS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        this.setState({
            loading: false,
            success: true
        })
    }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

      const loading = this.state.loading ? <div><img alt="" src="images/loader.gif" /></div>: <></>
      const success = this.state.success ? <div><i className="fa fa-check"></i>Your message was sent, thank you!<br /></div>: <></>

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.sendEmail}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" required></textarea>
                  </div>

                  <div>
                      <input className="submit" type="submit" value="Send" />

                      {loading}


                  </div>
					</fieldset>
				   </form>


				   <div >
                       {success}
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
                           <h4>Email</h4>
                           <p className="address">{email}</p>
					   </p>
				   </div>


            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
