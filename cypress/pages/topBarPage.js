export class TopBarPage {

    Selectorslist() {
        const selectors = {
            everyone: "[data-test='nav-public-tab']",
            friends: "[data-test='nav-contacts-tab']",
            mine: "[data-test='nav-personal-tab']",
            transactions: "[href='/transaction/new']",
            notifications: "[data-testid='NotificationsIcon']"
        }

        return selectors;
    }

    accssesEveryone() {
        cy.get(this.Selectorslist().everyone).click()
        cy.contains('Public')
    }

    accessFriends() {
        cy.get(this.Selectorslist().friends).click()
        cy.contains('Contacts')
    }

    accessMine() {
        cy.get(this.Selectorslist().mine).click()
        cy.contains('Personal')
    }

    accessNewTransactions() {
        cy.get(this.Selectorslist().transactions).click()
        cy.contains('Select Contact')
    }

    accessNotifications() {
        cy.get(this.Selectorslist().notifications).click()
        cy.contains('Notifications')
    }
}

export default TopBarPage
