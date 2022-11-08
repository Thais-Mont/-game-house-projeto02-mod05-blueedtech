import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { GameController } from "phosphor-react";
import { useState, useEffect, FormEvent } from "react";
import api from "../services/api";
import { Input } from "./Form/Input";
import { ListaGames } from "./ListaGames";


interface Game {
  id: string;
  title: string;
  genero: string;
  bannerUrl: string;
  descricao: string;
  videoUrl: string;
}

interface Genero {
  name: string;
}

interface CreateEditAdModalProps {
  gameEdit?: Game;
  onFinish: () => void;
}

export function CreateEditAdModal(props: CreateEditAdModalProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [title, setTitle] = useState<string>("");
  const [bannerUrl, setBannerUrl] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  

  const [generos] = useState<Genero[]>([
    {
      name: "Ação",
    },
    {
      name: "Aventura",
    },
    {
      name: "Jogo de tiro",
    },
    {
      name: "Estratégia",
    },
  ]);

  useEffect(() => {
    axios(`${api}games`).then((response) => {
      setGames(response.data);
    });
  }, []);


useEffect(() => {
  if(props.gameEdit) {
    console.log(props.gameEdit)
    setTitle(props.gameEdit.title);
    setBannerUrl(props.gameEdit.bannerUrl);
    setGenero(props.gameEdit.genero);
    setDescricao(props.gameEdit.descricao);
    setVideoUrl(props.gameEdit.videoUrl);
  }
}, [props.gameEdit])


  async function handleCreateGame(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const teste = data.videoUrl.toString();
    const newVideoUrl = teste.replace('watch?v=', 'embed/');
    const newApi = props.gameEdit ? props.gameEdit.id : 'new-game'
    try { 
      await axios.post(`${api}/games/${newApi}`, {
        title: data.title,
        bannerUrl: data.bannerUrl,
        genero: data.genero,
        descricao: data.descricao,
        videoUrl: newVideoUrl,
      })
      {props.gameEdit ? alert('Jogo alterado com Sucesso!') : alert('Jogo criado com Sucesso!')}
      props.onFinish()
      // window.location.reload();
    } catch(err) {
      console.log(err)
      {props.gameEdit ? alert('Erro ao Salvar!') : alert('Erro ao criar novo jogo')}
    }
  }

  async function handleRemove() {
    const newApi = props.gameEdit ? props.gameEdit.id : 'new-game';
    console.log(api);
    const response = await axios.delete(`${api}/game/${newApi}`);
    if(response) {
      alert('Jogo deletado com Sucesso!')
      props.onFinish()
      window.location.replace('/');
    }
  }


  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#3c5645] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
        <Dialog.Title className="txt-3xl font-black text-center">
        {props.gameEdit ? 'EDITAR JOGO' : 'CADASTRE UM NOVO JOGO'} 
        </Dialog.Title>
        <form onSubmit={handleCreateGame} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-semibold text-xs">
              Qual o Game?
            </label>
            <Input
             type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              id="game"
              placeholder="Nome do Jogo"
              required/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="bannerUrl" className="font-semibold text-xs">
              Imagem Banner
            </label>
            <Input
              name="bannerUrl"
              value={bannerUrl}
              onChange={(e) => setBannerUrl(e.target.value)}
              id="bannerUrl"
              type="text"
              placeholder="Link da Imagem"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="font-semibold text-xs">
              Descrição do Game:
            </label>
            <Input
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              id="descricao"
              type="text"
              placeholder="Digite aqui uma breve descrição sobre o jogo."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="videoUrl" className="font-semibold text-xs">
              Trailler
            </label>
            <Input
              name="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              id="videoUrl"
              type="text"
              placeholder="Link vídeo Youtube"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genero" className="font-semibold text-xs">
              Gênero{" "}
            </label>
            <select
              name="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              className="bg-zinc-900 py-2 px-4 rounded text-sm placeholder:text-zinc-500"
              required
            >
              <option disabled selected value="">
                Selecione um gênero
              </option>
              {generos.map((genero) => {
                return (
                  <option key={genero.name} value={genero.name}>
                    {genero.name}
                  </option>
                );
              })}
            </select>
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold"
              onClick={()=> {props.onFinish ? props.onFinish() : false;}}
            >
              Cancelar
            </Dialog.Close>
            
            <button
              className="bg-green-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-green-700"
              type="submit"
            >
              <GameController size={24} />
              {props.gameEdit ? 'Salvar' : 'Cadastrar'} 
            </button>
          </footer>
        </form>
        {props.gameEdit && 
            <button className="bg-red-600 px-5 h-12 rounded-md font-semibold flex justify-end items-center hover:bg-red-700"
            onClick={()=> handleRemove()}>Deletar</button>} 
      </Dialog.Content>
    </Dialog.Portal>
  );
}
