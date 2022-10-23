import React from 'react'
import SideBar from '../SideBar/SideBar';
import './about.scss'
import Background from '../Images/Nitmed.png'




function About() {
  return (
    
    <div className = "aboutPage"> 
      <SideBar />
      
      <div className="about">
        <div className='title'><h3 className='title'>About Nitmed</h3>
          <div >
          <div className='discription'>
          NitMed is a donation platform created to HELP,<br/>
          the less fortunate in our society who cannot afford to buy medicine. <br/>
          Here we encourage those who have unused medicine that is not yet expired<br/>
          to give freely and with an open heart. By doing so we encourage<br/>
          Utilization of unused medicine as well as save a life in the process.<br/>
          <b>NOTE:<i>It is a shame to throw away medicine while others suffer because of lack of the same</i></b></div>

          <div className='encrgmnt'>
          Your contribution goes a long way!
          </div>
         <div> <img src={Background} alt=''  width='60%' height='60%'/></div>
         <footer>
            <div className='footer-body' >
                <ul className='list'>
                    <li> Email:nitmed@gmail.com</li>
                    <li>Phone:0713538108</li>
                </ul>
                <div className='founder'>Founder: Macharia Tonny Githinji</div>
            </div>
         </footer>
         </div>
        </div>
        </div>
    </div>
  )
}

export default About