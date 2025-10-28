import UserData from "../../fixtures/userData.json";
import SignUpPage from "../../Pages/signUpPage";
import SignInPage from "../../pages/signInPage";

const signUpPage = new SignUpPage
const signInPage = new SignInPage

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.accessSignUpPage()
    signUpPage.signUpCredentials(UserData.SignIn.firstName,UserData.SignIn.lastName,UserData.SignIn.userName,UserData.SignIn.password,UserData.SignIn.confirmPassword)
    signInPage.loginWithNewUser(UserData.SignIn.userName,UserData.SignIn.password)

});
});

