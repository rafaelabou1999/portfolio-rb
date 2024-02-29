
import './css/about.css';
import Profile from './images/profile.jpg';
const About = () => {
  return(
    <div id="about" className="flex flex-row gap-[2%] justify-center mt-[10%]">
        <img src={Profile} width="400"/>
        <div className=" text-[#fff] w-[30%]">
            <div>
            <h2 className='aboutH2 font-[700] text-[1.8rem] text-[#9466FE] drop-shadow-lg'>Sobre mim</h2>
            <div className="line1 h-[.1vh] w-[5rem] bg-[#9466FE] mb-[5%]"></div>
            </div>
           <div className='aboutTxt'>
           <p>  Olá, me chamo Rafaela Bourdette! Sou uma Desenvolvedora Front-End que adora criar websites inspiradores e criativos. Atualmente, estou estudando Análise e Desenvolvimento de Sistemas(3 Periodo).   </p>
            <p className="pt-[5%]">Estudei Letras-Inglês por 4 semestres, onde formei uma base sólida
              desse idioma. Porém, a vontade de aprender novas linguagens me
              levou a descoberta do mundo da TI, com seus desafios e inúmeras
              possibilidades.</p>
           </div>
         
           
        </div>
    </div>
  )
}
export default About;