import React from 'react';
import{Grid, Cell} from 'react-mdl';
import kcimg from './images/poc.png';
const Yangesh = () => {
 
    return (
        <React.Fragment>
		{/*npm i react-mdl*/}
              <div style={{width:'100%', margin:'auto'}}>
          
                 <img src={kcimg}  alt='avatar' className="avatar-img"/>          
              </div>

              <div className="about-me">
              <i class="fas fa-laptop-code"> <h1>Preview:</h1></i>
              <div>
              <i class="fas fa-bug"> Senior Year @ SFSU 2021<br/>
                                     Computer Science Major <br/>
                                     
                                     Interests: <br/> 
                                     	
                                     	<br/> Machine Learning & NLP
                                     	<br/> UI/UX Design
                                     
                                        </i>
                                     
                                     
              </div>
              </div>

              <div className="banner-text">
                <h1> Yangesh KC</h1>
                  <h2> <i>Full Stack Web Developer</i></h2>
                  <hr/>
                   <i class="fab fa-google">
                   <h3>Skills:</h3>
                   <p> HTML/CSS | Bootstrap | Python | C++ | Java | JavaScript | React | ReactNative | NodeJS | Express | MongoDB | GoogleCloud |NLP </p></i>
                
                <div className="social-links"> 
                 {/*Linkedin */}
                 <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>  
                </a>

                  {/*Github */} 
                <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"  aria-hidden="true"/>  
                </a>

                <a href="http://freecodecamp.org" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>  
                </a>                  
                {/*reddit */}
                <a href="http://reddit.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-reddit-square"  aria-hidden="true"/>  
                </a>

             
               </div>

             </div>
            

        </React.Fragment>


    )


};

export default Yangesh;
