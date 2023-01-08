import { StateShort } from "./states";

export type Color = "red" | "blue" | "yellow" | "black"

export interface StateColor {
    state: StateShort | null
    color: Color
}