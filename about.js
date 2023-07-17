import React from "react";
import './styles.css';


function Lab() {
return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>KEC AI </title>
          <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
          <link href="C:/Users/hp/keclabai/src/styles.css" rel="stylesheet" />
          <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="#page-top">KEC LAB BOOKING</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
              <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                  <h1 className="text-white font-weight-bold">WORK HARD IN SILENCE..!! LET SUCESS MAKE THE NOISE..!!</h1>
                  <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 mb-5"><b>WELCOME TO KEC LAB BOOKING</b></p>
                  <a className="btn btn-primary btn-xl" href="./login.js">BOOK NOW:)</a>
                </div>
              </div>
            </div>
          </header>
          {/* About*/}
          <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">ARTIFICIAL INTELLIGENCE!</h2>
                  <hr className="divider divider-light" />
                  <p className="text-white-75 mb-4">AIML &amp; AIDSLaboratory is used to enable the students to develop software applications using Python and Java. It provides practical exposure to the students for implementing software applications.</p>
                  <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                </div>
              </div>
            </div>
          </section>
          {/* Services*/}
          <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
              <h2 className="text-center mt-0">At Your Service</h2>
              <hr className="divider" />
              <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2"><i className="bi-gem fs-1 text-primary" /></div>
                    <h3 className="h4 mb-2">NO PREMIUM PLANS</h3>
                    <p className="text-muted mb-0">FREEE BOOKING!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2"><i className="bi-laptop fs-1 text-primary" /></div>
                    <h3 className="h4 mb-2">Up to Date</h3>
                    <p className="text-muted mb-0">Webinars and coding competetion happening in CC.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                    <h3 className="h4 mb-2">INTERNET CONNECTIVITY</h3>
                    <p className="text-muted mb-0">You can use the ethernet as, or else you connect to free-wifi!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <div className="mb-2"><i className="bi-heart fs-1 text-primary" /></div>
                    <h3 className="h4 mb-2">Made with Love</h3>
                    <p className="text-muted mb-0"> The Door of opportunity is always open; you have to make us of it..!!!!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                  <h2 className="mt-0">Let's Get In Touch!</h2>
                  <hr className="divider" />
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                      <label htmlFor="name">Full name</label>
                      <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                      <label htmlFor="email">Email address</label>
                      <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                      <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div className="form-floating mb-3">
                      <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                      <label htmlFor="phone">Phone number</label>
                      <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                      <label htmlFor="message">Message</label>
                      <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">Form submited successfully!</div>
                        <br />
                      </div>                                    
                    </div>
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <div className="d-grid"><button className="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button></div>
                  </form>
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                  <i className="bi-phone fs-2 mb-3 text-muted" />
                  <div>+91 9965031902</div>
                </div>
              </div>
            </div>
          </section>
          <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5"><div className="small text-center text-muted">@KEC CC lab booking Booking(AI) 2023 </div></div>
          </footer>
        </div>
      );
    }
export default Lab;
