class SideBarPage {

    Selectorslist() {
        const selectors = {
            home: "[data-testid='HomeIcon']",
            myAccount: "[href='/user/settings']",
            bankAccounts: "[data-test='sidenav-bankaccounts']",
            notifocations: "[data-test='sidenav-notifications']",
            logout: "[role='button']"
        }
        return selectors
    }

    accsessHome() {
        cy.get(this.Selectorslist().home).click()
        cy.contains(".TransactionList-paper", 'Public')
    }

    accessMyAccount() {
        cy.get(this.Selectorslist().myAccount).click()
        cy.contains(".UserSettingsContainer-paper", 'User Settings')
    }

    accessBankAccounts() {
        cy.get(this.Selectorslist().bankAccounts).click()
        cy.contains(".MuiPaper-rounded", 'Bank Accounts')
        
    }

    accessNotifications() {
        cy.get(this.Selectorslist().notifocations).click()
        cy.contains(".NotificationsContainer-paper", "Notifications")
    }

    logout() {
        cy.get(this.Selectorslist().logout).click()
    }



}

export default SideBarPage
