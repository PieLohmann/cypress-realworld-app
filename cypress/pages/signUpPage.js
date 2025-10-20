

class SignUpPage{

    selectorslist() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            signUpPageButton: "[data-test='signup']",
            submitButton: "[type='submit']"
        }
        return selectors

    }

    accessSignUpPage() {
        cy.visit ('http://localhost:3000')
        cy.get(this.selectorslist().signUpPageButton).click()
        cy.contains('h1', 'Sign Up')

    }

    signUpCredentials(firstName,lastName,userName,password,confirmPassword) {
        cy.get(this.selectorslist().firstNameField).type(firstName)
        cy.get(this.selectorslist().lastNameField).type(lastName)
        cy.get(this.selectorslist().userNameField).type(password)
        cy.get(this.selectorslist().passwordField).type(password)
        cy.get(this.selectorslist().confirmPassword).type(password)
        cy.get(this.selectorslist().submitButton).click()
    }
}

export default SignUpPage