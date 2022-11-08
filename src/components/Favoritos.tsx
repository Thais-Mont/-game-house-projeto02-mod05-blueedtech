import { CreateEditAdModal } from "./CreateEditAdModal";
import { Link } from 'react-router-dom';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  genero: string;
  _count: {
    ads: number;
  };
}


interface GameBannerProps {
  game: Game;
  onEdit: (game: Game) => void;
}
export function Favoritos(props: GameBannerProps) {
  return (
<><Link to={`/detalhes/${props.game.id}`}>
      <div className="relative rounded-lg overflow-hidden" onClick={() => props.onEdit(props.game)}>
        <img className="min-w-auto" src={props.game.bannerUrl} alt="logo" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">
            {props.game.title}
          </strong>
          <span className="text-zinc-300 text-sm block mt-1">{props.game.genero}</span>
        </div>
      </div>
    </Link>

      </>
  )
}