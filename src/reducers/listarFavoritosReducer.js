import { types } from "../types/types"

const initialstate = {array: []}

export const listarFavoritosReducer = (estadoInicial=initialstate, action) => {
    switch (action.type) {
        case types.listarfavoritos:
            return{
                array: [ ...action.payload]
            }
        case types.eliminar:
            return{
                array: estadoInicial.array.filter(fav => fav.id !== action.payload)
            }
        default:
            return estadoInicial
    }
}

