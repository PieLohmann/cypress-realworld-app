import UserData from "../../fixtures/userData.json";
import SignUpPage from "../../Pages/signUpPage";

const signUpPage = new SignUpPage

describe('Registro de novo usuário com sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {
    signUpPage.accessSignUpPage()
    signUpPage.signUpCredentials('firstName','lastName','userName','password','confirmPassword')

});

});


