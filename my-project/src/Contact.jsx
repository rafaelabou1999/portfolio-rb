import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './css/contact.css'
const Contact = () => {
    return(
        <div id="contact" className="">
            <div className="flex flex-row gap-[5%] justify-center gap-[10%]">
                <div className="text-white text-[1.1rem]">
                    <h2 className='font-[700] text-[1.8rem] text-[#9466FE] drop-shadow-lg'>Contato</h2>
                    <div className="line1 h-[.1vh] w-[5rem] bg-[#9466FE] mb-[5%]"></div>
                    <div className='mt-[20%]'>
                        <a  className='cont p-[2%]  flex flex-row gap-[2%] items-center '>
                            <FontAwesomeIcon icon={faGithub} className=''/>
                            <h3>@rafaelabou1999</h3>
                        </a> 
                    </div>
                    <div>
                        <a className='cont mt-[2%] p-[2%] flex flex-row gap-[2%] items-center'>
                            <FontAwesomeIcon icon={faLinkedin} className=''/>
                            <h3>Rafaela Bourdette</h3>
                        </a>
                    </div>
                    <div>
                        <a className='cont mt-[2%] p-[2%] flex flex-row gap-[2%] items-center w-[20rem]'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <h3>rafaelabourdette@gmail.com</h3>
                        </a>
                    </div>
                    
                </div>
                
                <img src="https://i.pinimg.com/736x/8f/40/09/8f400923a0e8b08fd4c16294551dbd87.jpg" className="w-[450px] object-cover"/>
            </div>
        </div>
    )
}
export default Contact