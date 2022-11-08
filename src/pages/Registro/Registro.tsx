
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoxRegistro } from "../../components/BoxRegistro";
import { RoutePath } from "../../types/routes";


export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(RoutePath.LOGIN);
    }

    return (
                <BoxRegistro
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                />
                );
}
