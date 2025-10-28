import UserData from "../../fixtures/userData.json";
import SignInPage from "../../pages/signInPage";

const signInPage = new SignInPage

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    signInPage.accessSigninPage()
    signInPage.loginWithValidCredentials(UserData.UserSuccess.userName,UserData.UserSuccess.password)
    
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    signInPage.accessSigninPage()
    signInPage.loginWithInvalidCredentials(UserData.UserFail.userName,UserData.UserFail.password)
  });
});