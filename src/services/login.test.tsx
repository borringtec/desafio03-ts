import {login} from "./login"

describe('login', () => {

    const mockEmail = 'user@mail.com'
    const mockPassword = 'usermail1234'
    it('Deve exibir um alert com boas vindas caso o email e a senha sejam válidos', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('user@mail.com', '0000')
        expect(response).toBeFalsy()
    })
})
