import { loginSincrono, logoutSincrono } from "../../actions/actionLogin";
import { types } from "../../types/types";

describe("Autenticacion Login y Logout", () => {
    test('Validar Login sincrono', () => { 
        const id = "12345";
        const displayname = "Franco";

        const loginSincro = loginSincrono(id, displayname);

        expect(loginSincro).toEqual({
            type : types.login,
            payload: {
                id,
                displayname
            }
        })
     })

     test('Cerrar sesion', () => { 
         const logoutAction = logoutSincrono()

         expect(logoutAction).toEqual({
             type: types.logout
         })
      })
})