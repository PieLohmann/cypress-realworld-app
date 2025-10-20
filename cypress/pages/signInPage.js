
class SignInPage{

    Selectorslist()  {
        const selectors = {
        userNameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']"
    }
    return selectors
    }

    accessSigninPage() {
        cy.visit ('http://localhost:3000')
    }

    loginWithValidCredentials(userName,password) {
        cy.get(this.Selectorslist().userNameField).type(userName)
        cy.get(this.Selectorslist().passwordField).type(password)
        cy.get(this.Selectorslist().submitButton).click()
        cy.contains("Ted P")
    }

    loginWithInvalidCredentials(userName,password) {
        cy.get(this.Selectorslist().userNameField).type(userName)
        cy.get(this.Selectorslist().passwordField).type(password)
        cy.get(this.Selectorslist().submitButton).click()
        
    }

}

export default SignInPage