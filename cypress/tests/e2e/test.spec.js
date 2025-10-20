import UserData from "../../fixtures/userData.json";
import SignUpPage from "../../Pages/signUpPage";
import SignInPage from "../../pages/signInPage"

const signUpPage = new SignUpPage
const signInPage = new SignInPage

describe('Registro de novo usuário com sucesso', () => {
  it.skip('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.accessSignUpPage()
    signUpPage.signUpCredentials(UserData.SignIn.firstName,UserData.SignIn.lastName,UserData.SignIn.userName,UserData.SignIn.password,UserData.SignIn.confirmPassword)

});
});

describe('Login com sucesso', () => {
  it.skip('Deve fazer login com um usuário válido', () => {
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
