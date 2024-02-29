import './App.css';
import { Typewriter } from 'react-simple-typewriter';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function App() {


  return (
    <div>
      <nav className='menu flex flex-row pt-[1.3rem] z-10 relative'>
        <div className="logo flex flex-row items-center lg:pb-0 pb-[0%]">
            <div className='text-[#9466FE] text-[1.1rem] font-[700]'>&lt;/&gt;</div>
            <div className="letter">R</div>
            <div className="letter">a</div>
            <div className="letter">f</div>
            <div className="letter">a</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">a</div>
          </div>
          <ul className='nav scroll-smooth flex flex-row text-[#D6D6DC] font-[600] gap-[8%] z-20 '>
              <li className='hidden lg:inline-block md:hidden'><a href='#about'>Sobre</a></li>
              <li className='hidden lg:inline-block md:hidden'><a href='#projects'>Projetos</a></li>
              <li className='hidden lg:inline-block md:hidden'><a href='#resume'>Resume</a></li>
              <li className='hidden lg:inline-block md:hidden'><a href='#contact'>Contato</a></li>
            </ul>
        <div className='menuBurger md:block lg:hidden block   '>
          <div className="burgerLine w-[1.8rem] h-[.15vh]  bg-white"></div>
          <div className='mb-[23%]'></div>
          <div className="burgerLine w-[1.2rem] h-[.15vh] bg-white"></div>
          <div className='mb-[23%]'></div>
          <div className="burgerLine  w-[1.8rem] h-[.15vh]  bg-white"></div>
        </div>
      </nav>
      <main className='mt-[8%]' >
        <div className='banner relative mt-[5%] flex flex-row items-center justify-center gap-[5%]'>
            <div className='bannerText w-[430px]'>
              <p className='text-[#D6D6DC] text-[1.7rem]'>👋🏻 Olá, o meu nome é</p>
              <h2 className='name font-[800] text-[2.2rem] bg-gradient-to-r from-[#9466FE] to-[#3378FF] text-transparent bg-clip-text'>Rafaela Bourdette</h2>
              <div  className='gradient text-[2rem] font-[400] text-[#fff]'>
              <Typewriter words={["Desenvolvedora Front-End"]} />
            
              </div>
            
            
            </div>
              <img src="https://i.etsystatic.com/18836924/r/il/9932f8/4807616307/il_570xN.4807616307_cjeo.jpg" width="400" className='imgBanner' />        
            <div >
            
            </div>
            <div className='icons p-[1%] w-[20%] flex flex-col gap-[14%] justify-center items-center  fixed bottom-[5%] left-[0%]'>
              <FontAwesomeIcon icon={faGithub} className='icon1 text-[1.5rem] text-[#fff]  pt-[1.5%] fixed bottom-[26%] left-[8.6%]'/>
            <FontAwesomeIcon icon={faLinkedin} className='icon2 text-[1.5rem] text-[#fff]  pt-[1.5%] fixed bottom-[22%] left-[8.6%]'/>
            <div className="line h-[20vh] w-[.2rem] bg-[#fff]  fixed bottom-[0%] left-[9%]">

            </div>
          </div>  
        </div>
        
        <About/> 
        <Skills />
        <Projects/>
        <Contact />
      </main>     
     <footer className=' text-center text-white bg-[#322453] p-[.5%] mt-[10%]'>Desenvolvido por Rafaela Bourdette 2024</footer>
    </div>
  )
}

export default App
