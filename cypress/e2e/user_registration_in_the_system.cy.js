describe('Модуль Регистрации – регистрация пользователя в системе', () => {
    it('Модуль Регистрации – регистрация пользователя в системе', () => {

        cy.visit('https://dev.profteam.su/');

        // Клик по кнопке регистрации
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(2) > button')
            .should('exist')
            .click();

        cy.url().should('include', '/registration');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
            .should('be.visible')
            .type('b');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
            .should('be.visible')
            .type('testutasia@yandex.ru');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input')
            .should('be.visible')
            .type('Emaepar0L');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input')
            .should('be.visible')
            .type('Emaepar0L');

        // Клик по кнопке "Далее"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)')
            .should('be.visible')
            .click();

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2)')
            .should('be.visible');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(1) > div > input')
            .should('be.visible')
            .type('Иванов'); // Фамилия

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(2) > div > input')
            .should('be.visible')
            .type('Иван'); // Имя

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div:nth-child(3) > div > input')
            .should('be.visible')
            .type('Иванович'); // Отчество

        // Клик по кнопке "Создать аккаунт"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .should('be.visible')
            .click();

        cy.url().should('not.include', '/registration');
        cy.contains('Профиль').should('exist');
    });
})

