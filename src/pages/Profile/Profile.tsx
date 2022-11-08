import * as Dialog from '@radix-ui/react-dialog';
import { Button} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {ListaUsuarios} from '../../components/ListaUsuarios'
import { CreateProfile } from "../../components/CreateProfile";
import { PlusCircle } from "phosphor-react";
import api from '../../services/api';
export default function Profile() {
  const [user, setUser] = useState([]);
  const [gerenciar, setGerenciar] = useState(true);
  console.log(gerenciar);

  const changeGerenciar = () => {
    setGerenciar(!gerenciar)
  }

  useEffect(() => {
    const user: any = JSON.parse(localStorage.getItem('user') as string);
    const userId = user.id;
    axios(`${api}/user/${userId}/profile`).then(response => {
      setUser(response.data);
      console.log(user);
      });
  }, []);



  return (
    <><div className="grid grid-cols-5 gap-3 mt-16 mx-5">
      {user.map((item: any) => {
        return (
          <ListaUsuarios
            id={item.id}
            name={item.title}
            imgUser={item.imageURL}
            _count={{ games: [] }} 
            
            />
        );
      })}
      <Dialog.Root>
      <Dialog.Trigger className="py-4 px-5 bg-green-800 hover:bg-green-600 text-white rounded flex items-center gap-3">
          <PlusCircle size={100} />
        </Dialog.Trigger>
        <CreateProfile  />

      </Dialog.Root>

    </div></>    
  )
}
