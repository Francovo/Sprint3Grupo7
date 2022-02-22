import { db } from "../Firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { types } from "../types/types";

export const RegistroAsincronoFavoritos = (pelicula) => {
  return () => {
    addDoc(collection(db, "Sprint3grupo07"), pelicula);
  };
};

export const listarFavoritosAsincrono = () => {
  return async (dispatch) => {
    const listar = await getDocs(collection(db, "Sprint3grupo07"));
    let listarInfo = [];

    listar.forEach((element) => {
      listarInfo.push({ ...element.data() });
    });
    dispatch(listarFavoritosSincrono(listarInfo));
  };
};

export const listarFavoritosSincrono = (listarInfo) => {
  return {
    type: types.listarfavoritos,
    payload: listarInfo,
  };
};

export const eliminarFavoritoSincrono = (IdPelicula) => {
  return {
    type: types.eliminar,
    payload: IdPelicula,
  };
};

export const eliminarFavoritoAsincrono = (IdPelicula) => {
  return async (dispatch) => {
    const pelCollection = collection(db, "Sprint3grupo07");
    const q = query(pelCollection, where("id", "==", IdPelicula));

    const datos = await getDocs(q);
    datos.forEach((docu) => {
      console.log(docu);

      deleteDoc(doc(db, "Sprint3grupo07", docu.id));
    });

    dispatch(eliminarFavoritoSincrono(IdPelicula));
    dispatch(listarFavoritosAsincrono());
  };
};

export const editarFavoritoAsincrono = (id, data) => {
  return async () => {
    const pelCollection = collection(db, "Sprint3grupo07");
    const q = query(pelCollection, where("id", "==", id));

    const datos = await getDocs(q);
    let idForEach
    datos.forEach(async(documento) => {
      idForEach = documento.id
    })

    const EditarFavorito = doc(db, "Sprint3grupo07", idForEach)
    await updateDoc(EditarFavorito,data)
    .then(() => {
      listarFavoritosAsincrono()
    }
    )
  };
};

export const editarFavoritoSincrono = (data) => {
  return {
    type: types.editar,
    payload: data,
  };
};
