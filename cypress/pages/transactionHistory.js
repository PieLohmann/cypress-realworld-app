class TransactionHistory{

    VerifyHistoryWithTransactions() {
        cy.get('.css-yrdr1j-MuiPaper-root').should('exist')
        cy.get('.css-1tlfly5-MuiTypography-root').should('exist')
    }

    verifyHistoryWithoutTransactions() {
        cy.contains('No Transactions')
    }

}


export default TransactionHistory