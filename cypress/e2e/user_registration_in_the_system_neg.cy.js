describe('Модуль Регистрации – негативный сценарий регистрации', () => {
    it('Модуль Регистрации – негативный сценарий регистрации', () => {

        cy.visit('https://dev.profteam.su/');

        // Клик по кнопке регистрации
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(2) > button')
            .should('exist')
            .click();

        cy.url().should('include', '/registration');

        // Ввод некорректного логина
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
            .should('be.visible')
            .type('тест логин');

        // Ввод существующей почты
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
            .should('be.visible')
            .type('testutasia@yandex.ru');

        // Ввод некорректного пароля
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input')
            .should('be.visible')
            .type('Pass word');

        // Повтор пароля с несовпадением
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input')
            .should('be.visible')
            .type('Password321');

        // Клик по кнопке "Далее"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)')
            .should('be.visible')
            .click();

        // Проверка сообщений об ошибках
        cy.contains('символы латиницы').should('exist');
        cy.contains('не содержит пробелы').should('exist');

    });
});
