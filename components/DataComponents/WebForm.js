import React, {useState} from 'react';

function WebForm( {element} ) {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendmail", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    
    <div className="web-form">

        <h1>Javite se</h1>
        <p className="sub-title">
            Želite li stupiti u kontakt? 
            Voljeli bismo čuti vaše mišljenje. 
            Evo kako možete doći do nas.
        </p>

        <div id="contact-container">
            <div className="contact-info">
                <h4>
                    Kontaktne informacije
                </h4>
                <p>Ispunite obrazac i pošaljite</p>
                <div className="icon-text">
                    <i className="fa gg-phone"></i>
                    <span>+385 98 9176039</span>
                </div>
                <div className="icon-text">
                    <i className="fa gg-mail"></i>
                    <span>uptzri@gmail.com</span>
                </div>
                <div className="icon-text">
                    <i className="fa gg-track"></i>
                    <span>Ante Kovačića 17, 51000 Rijeka, Croatia</span>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/uptz18/" className="icon-circle">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/uptz_aats" className="icon-circle">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/uptz" className="icon-circle">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC7Z4qrgwJTPRyPaHnAP94hg" className="icon-circle">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="fullname">Ime</label>
                        <input 
                        type="text" 
                        value={fullname}
                        onChange={(e) => {
                        setFullname(e.target.value);
                        }}
                        name="fullname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Vaš mail</label>
                        <input 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="subject">Predmet</label>
                        <input 
                        type="text" 
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                        setSubject(e.target.value);
                        }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo">
                        <label htmlFor="message">Vaša poruka</label>
                        <textarea 
                        name="message"
                        value={message}
                        onChange={(e) => {
                        setMessage(e.target.value);
                        }}
                        ></textarea>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group solo right">
                        <button type="submit" className="primary">{buttonText}</button>
                    </div>
                </div>    

            </form>
        </div>

    </div>
    
  );
  
 

}

export default WebForm