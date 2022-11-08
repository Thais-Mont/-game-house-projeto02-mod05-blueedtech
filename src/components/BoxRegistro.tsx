import { LockClosedIcon } from "@radix-ui/react-icons";
import { HTMLAttributes, useState } from "react";
import { Link } from "react-router-dom";
import { createService } from "../services/createService";
import { RoutePath } from "../types/routes";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>

export type BoxLoginProps = {
  onSubmitData: (data: {name: string, senha: string, email: string, cpf: string}) => void
  errorMessage: string
} & BoxLoginType;


export function BoxRegistro({onSubmitData, errorMessage}: BoxLoginProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');

  
  const handleSubmit = (): void => {
    const data = {email, name, cpf, senha};
    onSubmitData(data);
    createService.createUser(data);
   
  } 




  
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
           Crie Sua Conta Grátis
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Nome Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Nome Completo"
                value={name}
                onChange={({target}) => setName(target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                CPF
              </label>
              <input
                id="cpf"
                name="cpf"
                type="text"
                maxLength={11}
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="CPF (Somente números)"
                value={cpf}
                onChange={({target}) => setCpf(target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                placeholder="Senha"
                value={senha}
                onChange={({target}) => setSenha(target.value)}
              />
            </div>
          </div>



          <div>
            <button
            value="cadastrar"
            onClick={handleSubmit}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-green-500 group-hover:text-green-400"
                  aria-hidden="true"
                />
              </span>
              CADASTRAR
            </button>

            <div className="text-sm mt-2">
              <a
                href="#"
                className="font-medium  text-white hover:text-green-500"
              >
                Já tem Cadastro? <Link to={RoutePath.LOGIN}>Clique AQUI para ENTRAR!</Link>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
