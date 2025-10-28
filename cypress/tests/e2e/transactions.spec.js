import UserData from "../../fixtures/userData.json";
import SignInPage from "../../pages/signInPage";
import SideBarPage from "../../pages/sideBarPage";
import TopBarPage from "../../pages/TopBarPage";
import TransactionsPage from "../../pages/transactionPage";

const signInPage = new SignInPage
const sideBarPage = new SideBarPage
const topBarPage = new TopBarPage
const transactionPage = new TransactionsPage

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    signInPage.accessSigninPage()
    signInPage.loginWithValidCredentials(UserData.UserSuccess.userName,UserData.UserSuccess.password)
    sideBarPage.accsessHome()
    topBarPage.accessNewTransactions()
    transactionPage.newPayment(UserData.Payment.sufficientBalance)
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    signInPage.accessSigninPage()
    signInPage.loginWithValidCredentials(UserData.UserSuccess.userName,UserData.UserSuccess.password)
    sideBarPage.accsessHome()
    topBarPage.accessNewTransactions()
    transactionPage.newRequest(UserData.Payment.insufficientBalance)
  });
});