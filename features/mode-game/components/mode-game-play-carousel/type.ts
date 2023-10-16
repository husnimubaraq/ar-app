import { TGame } from "features/mode-game/types"

export type TProps = {
    data: TGame[],
    onClick: (item: TGame, index: number) => void
}