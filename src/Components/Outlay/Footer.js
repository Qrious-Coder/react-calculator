import  github  from "../styles/github.png"
import tele from "../styles/tele.png"
import whatsapp from "../styles/whatsapp.png"
import gmail from "../styles/gmail.png"

const Footer =() => { 
  
  return (
    <div className="text-center text-blue-200 m-10">
      <p>This project is built with React and Tailwind CSS.</p>
      <p><small> View my code on <span style={{ textDecoration: 'underline purple' }}><a href="https://github.com/Qrious-Coder/react-calculator" 
            target="_blank">Github</a></span> or drop me your comments at any below:</small></p>
      <p className="grid grid-cols-4 gap-0 mx-auto place-content-center w-48 my-5">    
        <span className="footerIcon">
          <a href="https://github.com/Qrious-Coder/react-calculator" 
            target="_blank">
            <img src={github} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=[q81188118@gmail.com]" 
            target="_blank">
            <img src={gmail} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://wa.me/639086471423" 
            target="_blank">
            <img src={whatsapp} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://t.me/Hillary_Duan" 
            target="_blank">
            <img src={tele} alt="email" width={30} height={30}/>
          </a>
        </span>
      </p>
      <p><small>Copyright © 2022 Q_coder. All Rights Reserved.</small></p>
    </div>  
  )
}

export default Footer