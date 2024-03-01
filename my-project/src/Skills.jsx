import './css/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return(
        <div id="skills" className="mt-[10%]">
            <h2 className=' text-center font-[700] text-[1.8rem] text-[#9466FE] drop-shadow-lg'>Habilidades</h2>
           <div className="back flex flex-row justify-center items-center  pb-[3%]">
            <div className="line h-[.3vh] w-[2.5rem] bg-[#9466FE] me-[.3%]"></div>
            <FontAwesomeIcon icon={faCode} className='text-[#9466FE]' />
            <h2 className='ps-[.2%] text-[#9466FE] uppercase'>Skills</h2>
            <div className="line h-[.3vh] w-[2.5rem] ms-[.3%] bg-[#9466FE]"></div>
           </div>

           <div className='techStack'>
            <div className="item html flex flex-col justify-center items-center">  
              
                <h3>HTML</h3>
                <p>Nível: Avançado</p>
           </div>
            <div className="item css flex flex-col justify-center items-center"> 
                  
                    <h3>CSS</h3>
                <p>Nível: Avançado</p>
           </div>
            <div className="item tailwind flex flex-col justify-center items-center">
                  
                    <h3>Tailwind CSS</h3>
                <p>Nível: Intermediário</p>
          </div>
            <div className="item js flex flex-col justify-center items-center"> 
                  
                  <h3>JavaScript</h3>
                <p>Nível: Intermediário</p>
           </div>
            <div className="item react flex flex-col justify-center items-center"> 
                 
                 <h3>React</h3>
                <p>Nível: Básico - Intermediário</p>
         </div>
            <div className="item flutter flex flex-col justify-center items-center"> 
                  
                  <h3>Flutter</h3>
                <p>Nível: Básico</p>
          </div>
         
          
         
       
        
        
           </div>
        </div>
    )
}
export default Skills