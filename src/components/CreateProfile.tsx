import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { GameController } from "phosphor-react";
import { useState, useEffect, FormEvent } from "react";
import { createService } from "../services/createService";
import { Input } from "./Form/Input";
import { ListaGames } from "./ListaGames";



export function CreateProfile() {
 
const [title, setTitle] = useState<string>("");
const [imageURL, setImageUrl] = useState<string>("");

  async function handleCreateProfile(event: FormEvent) {
    event.preventDefault();
    const user: any = JSON.parse(localStorage.getItem('user') as string);
    const userId = user.id;
    const data = { title, imageURL, userId};
    createService.createProfile(data);
    window.location.reload();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#3c5645] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
        <Dialog.Title className="txt-3xl font-black text-center">
        CADASTRE UM NOVO PERFIL
        </Dialog.Title>
        <form onSubmit={handleCreateProfile} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold text-xs">
              Nome do Perfil
            </label>
            <Input
             type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              id="name"
              placeholder="Nome do Perfil"
              required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bannerUrl" className="font-semibold text-xs">
              Avatar Perfil
            </label>
            <Input
              name="imageURL"
              value={imageURL}
              onChange={(e) => setImageUrl(e.target.value)}
              id="bannerUrl"
              type="text"
              placeholder="Link da Imagem"
              required
            />
          </div>
          
          
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
              // onClick={()=> {props.onFinish ? props.onFinish() : false;}}
            >
              Cancelar
            </Dialog.Close>
            
            <button
              className="bg-green-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-green-700"
              type="submit"
            >
              <GameController size={24} />
              Cadastrar
            </button>
          </footer>
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  );
}
