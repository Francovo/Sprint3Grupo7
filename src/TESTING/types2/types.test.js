import { types } from "../../types/types";

describe("Verificar types ", () => {
  test("comparar objetos", () => {
    expect(types).toEqual({
        login: 'login',
        logout: 'logout',
        registro: 'registro',
    
    
    
        listarfavoritos: 'listarfavoritos',
        eliminar: 'eliminar',
        editar: 'editar'
    });
  });
});
