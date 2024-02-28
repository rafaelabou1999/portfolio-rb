import './App.css';
import { Typewriter } from 'react-simple-typewriter';

import About from './About';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function App() {


  return (
    <div>
      <nav className='menu flex flex-row justify-around pt-[1.3rem]'>
        <div className="logo flex flex-row items-center ">
            <div className='text-[#9466FE] text-[1.1rem] font-[700]'>&lt;/&gt;</div>
            <div className="letter">R</div>
            <div className="letter">a</div>
            <div className="letter">f</div>
            <div className="letter">a</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">a</div>
          </div>
          <ul className='nav flex flex-row text-[#D6D6DC] font-[600] gap-[8%]'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Sobre</a></li>
              <li><a href='#'>Projetos</a></li>
              <li><a href='#'>Resume</a></li>
              <li><a href='#'>Contato</a></li>
            </ul>
        
      </nav>
      <main className=' '>
        <div className='relative mt-[5%] flex flex-row items-center justify-center gap-[5%]'>
            <div className='w-[430px]'>
              <p className='text-[#D6D6DC] text-[1.7rem]'>👋🏻 Olá, o meu nome é</p>
              <h2 className='name font-[800] text-[2.2rem] bg-gradient-to-r from-[#9466FE] to-[#3378FF] text-transparent bg-clip-text'>Rafaela Bourdette</h2>
              <div  className='text-[2rem] font-[400] text-[#fff]'>
              <Typewriter words={["Desenvolvedora Front-End"]} />
            
              </div>
            
            
            </div>
              <img src="https://i.etsystatic.com/18836924/r/il/9932f8/4807616307/il_570xN.4807616307_cjeo.jpg" width="400" className='imgBanner' />        
            <div >
            
            </div>
            <div className='p-[1%] w-[20%] flex flex-col gap-[14%] justify-center items-center  fixed bottom-[5%] left-[0%]'>
              <FontAwesomeIcon icon={faGithub} className='text-[1.5rem] text-[#fff]  pt-[1.5%] fixed bottom-[26%] left-[8.6%]'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-[1.5rem] text-[#fff]  pt-[1.5%] fixed bottom-[22%] left-[8.6%]'/>
            <div className="line h-[20vh] w-[.2rem] bg-[#fff]  fixed bottom-[0%] left-[9%]">

            </div>
          </div>  
        </div>
        
        <About/> 
        <Skills/>
      </main>     
     
    </div>
  )
}

export default App
