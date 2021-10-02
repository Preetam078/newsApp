import React, { Component } from 'react'
import { FaInstagram } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import {FaGithub,FaLinkedin, FaTwitter} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {FiPhoneCall} from 'react-icons/fi'
import "../App.css"


export default class Footer extends Component {
    render() {
        return (
            <div className=" my-5">
          
            <footer
                    className="text-center text-lg-start text-white"
                    style={{
                        backgroundColor: '#3b3d3b',}} >
      
              <div className="container p-4 pb-0">
              
                <section className="">
                  
                  <div className="row">
                   
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">
                       Developer Name
                      </h6>
                      <p>PREETAM MONDAL</p>
                       <p>Student At National Institute of Technology-Raipur, India
                      </p>
                    </div>

          
    
                
          
                 
                    <hr className="w-100 clearfix d-md-none" />
          
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                      <p><ImLocation/> New Delhi, ND 110044, IN</p>
                      <p><a href="mailto: preetammondal78@gmail.com" target="_blank"  rel="noreferrer"><MdEmail/> Preetammondal78@gmail.com</a></p>
                      <p><a href="tel: 7827817030"><FiPhoneCall/> +91 7827817030</a></p>
                    </div>
                    
                  
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold">Follow me</h6>
        
                     
                      <a className="mx-2" href="https://www.instagram.com/preetam078/" target="_blank"  rel="noreferrer"><FaInstagram className="zoom" size="2rem" color="#db215f"/></a>
          
               
                      <a
                         className="mx-2"
                         href="https://github.com/Preetam078" target="_blank"  rel="noreferrer"
                         ><FaGithub className="zoom" size="2rem" color="black"/></a>
          
                    
                      <a
                         className="mx-2"
                         href="https://www.linkedin.com/in/preetam-mondal-aa975b130" target="_blank"  rel="noreferrer"
                         ><FaLinkedin className="zoom" size="2rem" color="#0267ab"/></a>
          
                     
                      <a
                         className="mx-2"
                         
                         href="https://twitter.com/Preetam34223498" target="_blank"  rel="noreferrer"
                      
                         ><FaTwitter className="zoom" size="2rem" color="#43bae6"/></a>
          
               
                      <a className="mx-2"
                         href="mailto: preetammondal78@gmail.com " target="_blank"  rel="noreferrer"
                    
                         ><MdEmail className="zoom" size="2rem" color="#bd263f"/></a>
                    </div>
                  </div>
                
                </section>
               
              </div>
              <div
                   className="text-center p-3"

                   >
               
                <a className="text-white" href="/"> © All Rights are reserved by the developer</a>
              </div>
            
            </footer>
       
          </div>
        )
    }
}
