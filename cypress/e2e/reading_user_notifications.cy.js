describe('Модуль Личный кабинет - прочтение уведомлений пользователя', () => {
    it('Модуль Личный кабинет - прочтение уведомлений пользователя', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Нажатие на кнопку "Авторизация"
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button')
            .click();

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input')
            .type('kawuzu');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .type('emaepar0L');

        // Нажатие кнопки "Войти"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();

        cy.url().should('not.include', '/login');


        // Нажатие на 4-й пункт меню в навигации
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(4)')
            .click();

        // Нажатие на кнопку внутри первого уведомления в списке
        cy.get('#app > div.page > div > aside > div.infinite-loader.notifications-list__items > div:nth-child(1) > article > button')
            .click();

        // Нажатие на 4-й пункт меню в навигации
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(4)')
            .click();

        // Нажатие на "прочитать все"
        cy.get('#app > div.page > div > div > div.header-container__item > div > div.link.link--size-small')
            .click();
    });
});