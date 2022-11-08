import { Link } from 'react-router-dom';
import { TrashIcon } from '@radix-ui/react-icons'
import './ListaUsuarios.css'

interface UsuariosProps {
  id: string;
  name: string;
  imgUser: string;
  _count: {
    games: any[];
  };
  
}



export function ListaUsuarios(props: UsuariosProps) {
  const handleSubmit = () => {
    console.log(props.id);
    localStorage.setItem('profile', JSON.stringify(props.id));
  }
  return (
    <><Link to={"/"}>
    <section className="d-flex flex-col text-center" onClick={() => handleSubmit()}>
      <div>
        <img className="card" src={props.imgUser} />
      </div>
      <span className="text-slate-200">{props.name} </span>
    </section>
    </Link>
     </>
  )
}