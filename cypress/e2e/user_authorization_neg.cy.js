describe('Модуль Авторизации – авторизация пользователя', () => {
    it('Модуль Авторизации – негативный сценарий авторизации', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Клик на кнопку "Авторизация"
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button')
            .click();

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input')
            .type('wronguser');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .type('wrongpassword');

        // Клик на кнопку "Войти"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();

        // Проверка отображения предупреждения
        cy.contains('Неверный логин или пароль, попробуйте заново.').should('be.visible');
        cy.url().should('include', '/login');
    });
});
