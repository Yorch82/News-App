import { useState } from "react";
import './Form.scss'
import { useNavigate } from "react-router-dom";

export const Form = () => {
    let dataUser = JSON.parse(localStorage.getItem("DATOS")) || [];
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    text:""
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const initialState = {
    name: "",
    phone: "",
    email: "",
    text:""
  };
  const clearState = () => {
    setData({ ...initialState });
  };
  const handleInputChange = (event) => {
    if ( data.name.length < 3) {
        setMessage("Nombre debe tener 3 caracteres como mínimo");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false);
      }    
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se lanza el formulario", data);
    dataUser.push(data);
    localStorage.setItem("DATOS", JSON.stringify(dataUser))
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 3000);
    };
  
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        
            <h2>CONTACT US</h2>
            <div>
                <div className="entrada">
                    <label>Name:</label>
                    <input className="datos" type="text" placeholder="Write your name here..." onChange={handleInputChange} name="name"/>
                </div>
                <div className="entrada">
                    <label>Phone:</label>
                    <input className="datos" type="text" placeholder="Write your phone here..." onChange={handleInputChange} name="phone"/>
                </div>
                <div className="entrada">
                    <label>Email:</label>
                    <input className="datos" type="email" placeholder="Let us know how to contact you back.." onChange={handleInputChange} name="email"/>
                </div>
                <div className="entrada">
                    <label>Message:</label>
                    <input  className="datos" placeholder="What would you like to tell us.." name="text"></input>
                </div>
            </div>
            <div>
                <button className="boton" type="submit" disabled={btnDisabled}>Send Message</button>{message}
            </div>
            {/* <div className="bottom">
              <span class="fa fa-phone"></span>123 45 67 89
              <span class="fa fa-envelope-o"></span> Yorch@gmail.com
            </div> */}
    </form>
    </div>
    
  );
};

export default Form