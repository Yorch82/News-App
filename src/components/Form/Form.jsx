import { useState } from "react";
// import './Form.scss'
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
    <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Rellena todos los campos</legend>
            <div>
                <div className="entrada">
                    <label>Nombre</label>
                    <input className="datos" type="text" placeholder="Su nombre aquí..." onChange={handleInputChange} name="name"/>
                </div>
                <div className="entrada">
                    <label>Teléfono</label>
                    <input className="datos" type="text" placeholder="Su teléfono aquí..." onChange={handleInputChange} name="phone"/>
                </div>
                <div className="entrada">
                    <label>Correo</label>
                    <input className="datos" type="email" placeholder="Su correo electrónico aquí..." onChange={handleInputChange} name="email"/>
                </div>
                <div className="entrada">
                    <label>Mensaje</label>
                    <textarea  className="datos" placeholder="Escriba aquí su consulta..." name="text"></textarea>
                </div>
            </div>
            <div>
                <button className="boton" type="submit" disabled={btnDisabled}>Enviar</button>{message}
            </div>
        </fieldset>
        
    </form>
  );
};

export default Form