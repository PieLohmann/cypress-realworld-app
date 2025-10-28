export class TransactionsPage{

    Selectorslist(){
        const Selectors = {
            transactions: "[href='/transaction/new']",
            searchField:"[data-test='user-list-search-input']",
            generalContactSelector: ".MuiGrid-spacing-xs-1",
            amountField:"[name='amount']", 
            noteField:"[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            requestButton: "[data-test='transaction-create-submit-request']",
            creatTransactionButton: "[data-test='new-transaction-create-another-transaction']",
            returnButton: "[data-test='new-transaction-return-to-transactions']",
        }
        return Selectors
    }

    newPayment(sufficientBalance) {
        cy.get('.css-1idn90j-MuiGrid-root').should('exist')
        cy.get(this.Selectorslist().generalContactSelector).eq(1).click({force: true})
        cy.contains('Darrel Ortiz')
        cy.get(this.Selectorslist().amountField).type(sufficientBalance)
        cy.get(this.Selectorslist().noteField).type('Test message')
        cy.get(this.Selectorslist().payButton).click()
        cy.contains('Transaction Submitted!')

    }

    creatNewTransaction() {
        cy.get(this.Selectorslist().creatTransactionButton).click()
    }

    newRequest(insufficientBalance) {
        cy.get(this.Selectorslist().generalContactSelector).eq(0).click({force: true})
        cy.contains('Kristian Bradtke')
        cy.get(this.Selectorslist().amountField).type(insufficientBalance)
        cy.get(this.Selectorslist().noteField).type('Test message')
        cy.get(this.Selectorslist().requestButton).click()
        cy.contains ('Transaction failed')
    }
}

export default TransactionsPage 