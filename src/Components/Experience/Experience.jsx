import React from "react";
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience=()=>{
    return(
        <>
         <section id="experience">
             <h5>What Skills I have</h5>
             <h2>My Experience</h2>
             <div className="container experience_container">
                 <div className="experience_hard">
                     <h3>Main Technical Skills</h3>
                     <div className="experience_content">
                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>HTML</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                            
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>CSS</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                            
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>

                            <div>
                            <h4>JavaScript</h4>
                             <small className="text-light">Experienced</small>
                            </div>
                            
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Sass/Less</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                           
                         </article>

                        
                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>ReactJS</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                            
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Redux</h4>
                             <small className="text-light">Intermediate</small>
                             </div>
                            
                         </article>

                        
                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Rest Api</h4>
                             <small className="text-light">Intermediate</small>
                             </div>
                             
                         </article>
                     </div>
                 </div>
                 <div className="experience_soft">
                 <h3>Additional Technical Skills</h3>
                     <div className="experience_content">
                     <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Testing</h4>
                             <small className="text-light">Pre-Intermediate</small>
                             </div>
                           
                    </article>

                     <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>JQuery</h4>
                             <small className="text-light">Pre-Intermediate</small>
                             </div>
                            
                         </article>

                     <article className="experience_details">

                             <BsPatchCheckFill className="experiance_ditail_icon"/>

                             <div>
                             <h4>React Native</h4>
                             <small className="text-light">Pre-Intermediate</small>
                             </div>
                             
                         </article>

                         <article className="experience_details">

                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Styling Components</h4>
                             <small className="text-light">Upper-Intermediate</small>
                             </div>
                
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>TypeScript</h4>
                             <small className="text-light">Pre-Intermediate</small>
                             </div>
                             
                         </article>
                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>NextJS</h4>
                             <small className="text-light">Pre-Intermediate</small>
                             </div>
                            
                         </article>
                         <article className="experience_details">
                             <BsPatchCheckFill className="experiance_ditail_icon"/>
                             <div>
                             <h4>Bootstrap</h4>
                             <small className="text-light">Experienced</small>
                             </div>
                            
                         </article>


                         {/* <article className="experience_details">
                             <BsPatchCheckFill/>
                             <h4>Communication</h4>
                             
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill/>
                             <h4>Listening</h4>
                           
                         </article>

                         <article className="experience_details">
                             <BsPatchCheckFill/>
                             <h4>Flexibility</h4>
                        </article>

                        <article className="experience_details">
                             <BsPatchCheckFill/>
                             <h4>Thinking visually</h4>
                        </article>
 */}


                        
                     </div>
                 </div>
             </div>
         </section>
    
        </>
    );
}
export default Experience;