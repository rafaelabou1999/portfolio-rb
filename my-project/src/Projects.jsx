import Pedra from './images/pedraPapel.png';
import SiteMedico from './images/siteMedico.png'
import ReactSite from './images/reactSite.png';
import './css/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return(
        <div>
            <div className='mt-[35%] flex flex-col justify-center'>
              <h2 className=' text-center font-[700] text-[1.8rem] text-[#9466FE] drop-shadow-lg'>Projetos</h2>
              <div className="back flex flex-row justify-center items-center ] pb-[3%]">
                <div className="line h-[.3vh] w-[2.5rem] bg-[#9466FE] me-[.3%]"></div>
                <FontAwesomeIcon icon={faCode} className='text-[#9466FE]' />
                <h2 className='ps-[.2%] text-[#9466FE] uppercase'>Projects</h2>
                <div className="line h-[.3vh] w-[2.5rem] ms-[.3%] bg-[#9466FE]"></div>
             </div>
           </div>

           <div>
            <div className="project flex flex-row justify-center items-center ">
                <img src={SiteMedico} className='w-[40rem] h-[20rem] object-cover'/>
                <div className="w-[15rem] ms-[3%]">
                    <h2 className='text-[#9466FE] font-[600] text-[1.6rem]'>Site para Médico</h2>
                    <div className="line bg-[#9466FE] h-[.1vh] w-[6rem] mb-[5%]"></div>
                    <div className='text-white'>
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>JavaScript</h3>
                    </div>
                    <div className='mt-[12%]'>
                   <a href="https://github.com/rafaelabou1999/site-medico"> <FontAwesomeIcon icon={faGithub} className='text-[1.2rem] text-[#fff]  pt-[1.5%]'/></a>
                   <a href="https://renatabourdettecardiologista.com/"> <FontAwesomeIcon icon={faCode} className='text-[1.2rem] text-[#fff] ms-[5%] pt-[1.5%] '/></a>
                    </div>
                </div>
                
           </div>
            <div className="project flex flex-row justify-center items-center mt-[5%] ">
                <img src={ReactSite} className='w-[40rem] h-[20rem] object-cover'/>
                <div className="w-[15rem] ms-[3%]">
                    <h2 className='text-[#9466FE] font-[600] text-[1.6rem]'>Primeiro site em React</h2>
                    <div className="line bg-[#9466FE] h-[.1vh] w-[6rem] mb-[5%]"></div>
                    <div className='text-white'>
                        <h3>React.js</h3>
                        <h3>Tailwind CSS</h3>
                    </div>
                    <div className='mt-[12%]'>
                   <a href="https://github.com/rafaelabou1999/react-site"> <FontAwesomeIcon icon={faGithub} className='text-[1.2rem] text-[#fff]  pt-[1.5%]'/></a>
                   <a href="https://6578709d18523f7430905175--velvety-sunshine-0b7ba2.netlify.app/"> <FontAwesomeIcon icon={faCode} className='text-[1.2rem] text-[#fff] ms-[5%] pt-[1.5%] '/></a>
                    </div>
                </div>
                
           </div>
         <div className='mt-[2%] mb-[30%]'>
            <button className=' bg-[#9466FE] pt-[1%] pb-[1%] pe-[2%] ps-[2%]'><a href="https://github.com/rafaelabou1999" className='text-[#141414] font-[600]'>Veja mais</a></button>
         </div>
        </div>
       
      </div>
    )
}
export default Projects;