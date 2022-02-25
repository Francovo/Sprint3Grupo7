import { v4 as uuidv4 } from "uuid";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { editarFavoritoSincrono, RegistroAsincronoFavoritos } from "../../actions/actionFavoritos";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  agregar: {
    id: uuidv4(),
    imagen: "",
    nombre: "",
    año: "",
    sinopsis: "",
    calificacion: "",
  },
};

const data = {
    id:'',
    imagen: "",
    nombre: "",
    año: "",
    sinopsis: "",
    calificacion: "",
}

let store = mockStore(initState);

describe(`Pruebas con las actiones Taks`, () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("Crear", async () => {
    await store.dispatch(
      RegistroAsincronoFavoritos({
        id: uuidv4(),
        imagen: "",
        nombre: "",
        año: "",
        sinopsis: "",
        calificacion: "",
      })
    );

    const actions = store.getActions();
  });

  test('Modificar', () => { 
      store.dispatch(
    editarFavoritoSincrono(data)
      )
   })
});
