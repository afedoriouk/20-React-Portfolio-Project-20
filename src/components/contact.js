import React, {useState} from "react";
import {validateEmail} from'../../util/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
        
    });
    const [errorMessage, setErrorMesage] = useState("");

    const {name, email, message} = formState;
    function handleChange(e)
}
