import * as Dialog from '@radix-ui/react-dialog';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeartIcon } from '@radix-ui/react-icons'
import { FaHeart } from 'react-icons/fa';
import { CreateEditAdModal } from "../../components/CreateEditAdModal";
import api from '../../services/api';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  genero: string;
  descricao: string;
  videoUrl: string;
  _count: {
    ads: number;
  };
}

interface GameBannerProps {
  game: Game;
}

export default function DetalhesGame() {
  const [game, setGame] = useState<Game>();
  const [refreshGames, setRefreshGames] = useState(false);
  const [gameEdit, setGameEdit] = useState<Game | any>(null);
  const [favoritos, setFavoritos] = useState([]);
  const { id } = useParams();

  async function handleRemove() {
    const response = await axios.delete(`${api}/game/${id}`);
    if(response) {
      alert('Jogo deletado com Sucesso!')
       window.location.replace('/');
    }
  }


  useEffect(() => {
    axios(`${api}/games/${id}`).then(response => {
      console.log(response);
        setGame(response.data);
      });
  }, [refreshGames]);

  const editGame = (game: Game) => {
    setGameEdit(game);
  }

  const favoritar = async (game: Game) => {
    console.log(favoritos);
    const profileId: any = JSON.parse(localStorage.getItem('profile') as string);
    await api.post(`/profile/${profileId}/favorito`, {
      gameId: game.id,
    }).then(response =>  alert('Jogo foi adicionado aos favoritos!'))
  }

  const editFinish = () => {
    setGameEdit(null);
    window.location.reload();
  }

    return (
      <>
      {game ?  
      <><div className="max-w-[760px] mx-auto my-20 flex items-center gap-10">
            <div>
              <img className="min-w-[250px]" src={game.bannerUrl} alt="" />

              <span className="text-white h-10 flex bg-black justify-center cursor-pointer" onClick={()=> favoritar(game)}>
               <HeartIcon className="mx-2 my-1"/> Favoritar </span> 
            
            </div>
            <section className="d-flex flex-col text-center">
              <div className="text-white font-bold text-2xl mt-0 mb-10">
                {game.title}
              </div>
              <div className="text-white text-left">
                {game.descricao}
              </div>
              <div className="flex gap-5 mt-5 justify-center">
                      <button
                      className="bg-green-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-green-700"
                      type="submit"
                      onClick={()=> editGame(game)}
                    >
                    EDITAR
              
          
            </button>
         
                      <button className="bg-red-600 px-5 h-12 rounded-md font-semibold flex justify-end items-center hover:bg-red-700"
                    onClick={()=> handleRemove()}>DELETAR</button>
              </div>
           
            </section>
          </div>
          <section className="d-flex flex-col items-center justify-center">
              <div className="text-white font-bold text-2xl mt-0 mb-10">
                CONHEÇA UM POUCO MAIS SOBRE O JOGO:
              </div>
              <iframe width="780" height="520" src={game.videoUrl} title={game.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </section>
      
            
            <Dialog.Root open={gameEdit !== null}>                
            <CreateEditAdModal
                        gameEdit={gameEdit}
                        onFinish= {editFinish}
                        />
            </Dialog.Root>  
            </>

    : 'Ops! Jogo não encontrado'}</>
    );

}