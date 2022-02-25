const { loginReducer } = require("../../reducers/loginReducer");
const { types } = require("../../types/types");


describe('Pruebas reducer login-logout', () => {
    test('Realizar login', () => { 

        const initialState = {};
        const action = {
            type: types.login,
            payload: {
                id:"asd",
                displayname: 'UwU'
            }
        }
        const state = loginReducer(initialState, action );
        expect(state).toEqual({
            id:"asd",
            name: 'UwU'
        })
     })
     
     test('Cerrar sesion - logout', () => { 
        const initState = {
            id: 'abc',
            name: 'Fernando'
        }

        const action = {
            type: types.logout,
        }

        const state = loginReducer(initState, action);
        expect(state).toEqual({})
     })
     
})