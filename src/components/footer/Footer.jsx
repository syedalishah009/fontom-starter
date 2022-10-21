import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <div className="footer">
            <img src="images/footer.png" alt="" className="footerImg" />
            <img src="images/footer-back-2.png" alt="" className="footerImg footerImg-m" />
            <div className="footerTop">
                <div className="footer-content">
                    <h2>Interested in a career at FS MultiChain?</h2>
                    <p>We are always looking out for exceptional talent, see our open roles below.</p>
                    <div class="FBton">
                        <div class="Fbtn1">
                            <button>Open roles</button>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="footerBottom">
               <div className='fBtop'>
                    <img src="images/fs-logo-footer.png" alt="footerLog" />
                    <div class="FBton">
                        <div class="Fbtn1">
                            <button>Open roles</button>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="arrowicons" />
                        </div>
                    </div>
               </div>
               <div className="links">
                    <div className="links1">
                        <h2>FantomStarter</h2>
                        <a href="#">About </a>
                        <a href="#">Litepaper </a>
                        <a href="#">Audit </a>
                        <a href="#">Scout </a>
                        <a href="#">program </a>
                    </div>
                    <div className="links1">
                        <h2>Help</h2>
                        <a href="#">FAQ  </a>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                        
                    </div>
                    <div className="links1">
                        <h2>Social</h2>
                        <a href="#">Twitter  </a>
                        <a href="#">Telegram  </a>
                        <a href="#">Discord  </a>
                        <a href="#">Github  </a>
                        <a href="#">Blog </a>
                    </div>
                    <div className="links1 icons">
                       
                        <a href="#"><img src="images/Socials.svg" alt="" /> </a>
                        <a href="#"><img src="images/Socials (1).svg" alt="" /> </a>
                        <a href="#"><img src="images/Socials (2).svg" alt="" /> </a>
                        <a href="#"><img src="images/Socials (3).svg" alt="" /> </a>
                       
                    </div>
                  
               </div>

            </div>
        </div>
    )
}

export default Footer
