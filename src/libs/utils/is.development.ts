import { GAME_MODE } from "../../config/game.config";

export function isDevelopment (): boolean {
    if (GAME_MODE === 'development') {
        return true;
    } else {
        console.error('Mode is not development please check what do you do!');
        return false;
    }
}