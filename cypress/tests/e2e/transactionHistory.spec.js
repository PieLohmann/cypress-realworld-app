import UserData from "../../fixtures/userData.json";
import SignUpPage from "../../Pages/signUpPage";
import SignInPage from "../../pages/signInPage";
import SideBarPage from "../../pages/sideBarPage";
import TopBarPage from "../../pages/TopBarPage";
import TransactionHistory from "../../pages/transactionHistory";

const signUpPage = new SignUpPage
const signInPage = new SignInPage
const sideBarPage = new SideBarPage
const topBarPage = new TopBarPage
const transactionHistory = new TransactionHistory


describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    signInPage.accessSigninPage()
    signInPage.loginWithValidCredentials(UserData.UserSuccess.userName,UserData.UserSuccess.password)
    sideBarPage.accsessHome()
    topBarPage.accessMine()
    transactionHistory.VerifyHistoryWithTransactions()
    
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    signUpPage.accessSignUpPage()
    signUpPage.signUpCredentials(UserData.SignIn.firstName,UserData.SignIn.lastName,UserData.SignIn.userName,UserData.SignIn.password,UserData.SignIn.confirmPassword)
    signInPage.loginWithNewUser(UserData.SignIn.userName,UserData.SignIn.password)
    topBarPage.accessMine()
    transactionHistory.verifyHistoryWithoutTransactions()

  });
});
});





