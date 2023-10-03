import "./contactDetails.css";
import ContactDetailsCard from "./contactDetailsCard";
import mailPic from "../imgs/icons8-mail-48.png"
import phonePic from '../imgs/icons8-whatsapp-48.png'
import linkedInPic from '../imgs/icons8-linkedin-48.png'
import githubPic from '../imgs/icons8-github-50.png'

function ContactDetails(props) {
  const linkedinLink = "https://www.linkedin.com/in/jonatan-shlomov/";
  const githubLink = "https://github.com/jshlomov";
  const whatsappLink = "https://wa.me/+972583250298";
  const mailLink = 
  
        "mailto:jonatanshv@gmail.com";

  return (
    <div className="wrapper Contact-details">
      <div className="wrapperCards">
      <ContactDetailsCard title="Gmail: jonatanshv@gmail.com" imge={mailPic} link= {mailLink} />
      <ContactDetailsCard title="WhatsApp: +972583250298" imge={phonePic} link= {whatsappLink}/>
      <ContactDetailsCard title="LinkedIn" imge={linkedInPic} link = {linkedinLink}/>
      <ContactDetailsCard title="GitHub" imge={githubPic} link={githubLink}/>
      </div>
    </div>
  );
}
export default ContactDetails;
