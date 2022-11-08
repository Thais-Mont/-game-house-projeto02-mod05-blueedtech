import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import axios from "axios";
import { ListaGames } from "../../components/ListaGames";
import { CreateNewGame } from "../../components/CreateNewGame";
import { CreateEditAdModal } from "../../components/CreateEditAdModal";
import { matchByText } from "../../helpers/utils";
import DetalhesGame from "../DetalhesGame/DetalhesGame";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../types/routes";
import { Favoritos } from "../../components/Favoritos";
import api from "../../services/api";


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  genero: string;
  descricao: string;
  videoUrl: string;
}

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [gameEdit, setGameEdit] = useState<Game | any>(null);
  const [favoritos, setFavoritos] = useState<Game[]>([]);

  useEffect(() => {
    const profileId: any = JSON.parse(
      localStorage.getItem("profile") as string
    );
    axios(`${api}/games`).then((response) => {
      setGames(response.data);
      axios(`${api}/profile/${profileId}/favoritos`).then(
        (resp) => {
          console.log(resp);
          const favoritos = response.data.filter((jogo: { id: any; }) => resp.data.includes(jogo.id));
          setFavoritos(favoritos);
        }
      );
    });
  }, []);


  const editGame = (game: Game) => {
    setGameEdit(game);
  };

  const editFinish = () => {
    setGameEdit(null);
    window.location.reload();
  };

  return (
    <>
      <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
        <h1 className="text-6xl text-white font-black mt-20 items-center text-center">
          Seu{" "}
          <span className="bg-clip-text text-transparent bg-font-gradient">
            jogo
          </span>{" "}
          está aqui.
        </h1>

        <h2 className="text-3xl text-white font-black mt-20 items-right text-right">
          Favoritos
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-6 gap-6 mt-16">

            {favoritos.map((favorito) => {
              return (
                <Favoritos key={favorito.id} game={favorito}  />
              );
            })}
        </div>
        <h2 className="text-3xl text-white font-black mt-20 items-right text-right">
          Populares
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-6 gap-6 mt-16">
          <Dialog.Root open={gameEdit !== null}>
            {games.map((game) => {
              return <ListaGames key={game.id} game={game} onEdit={editGame} />;
            })}
            <CreateEditAdModal gameEdit={gameEdit} onFinish={editFinish} />
          </Dialog.Root>
        </div>

        <Dialog.Root>
          <CreateNewGame />
          <CreateEditAdModal onFinish={editFinish} />
        </Dialog.Root>
      </div>
    </>
  );
}
