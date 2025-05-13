describe('Модуль Личный кабинет - просмотр уведомлений пользователя', () => {
    it('Модуль Личный кабинет - просмотр уведомлений пользователя', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Нажатие на кнопку "Авторизация"
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button')
            .click();

        // Ввод логина
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input')
            .type('kawuzu');

        // Ввод пароля
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .type('emaepar0L');

        // Нажатие кнопки "Войти"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();

        // Проверка успешной авторизации
        cy.url().should('not.include', '/login');

        // Нажатие на колокольчик
        cy.get('#app > div.page > div > div.header-container.header-personal > div.header-container__user-avatar-info > div')
            .click();

        // Нажатие на 4-й пункт меню в навигации
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(4)')
            .click();
    });
});
