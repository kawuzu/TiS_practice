describe('Модуль Регистрации - негативный сценарий выбора роли студента', () => {
    it('Модуль Регистрации - негативный сценарий выбора роли студента', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Нажатие на кнопку "Авторизация"
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button')
            .click();

        // Ввод логина и пароля
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input')
            .type('kawuzu');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .type('emaepar0L');

        // Нажатие кнопки "Войти"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();

        // Проверка, что вход успешен
        cy.url().should('not.include', '/login');

        // Нажатие на кнопку "Выбрать роль"
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button')
            .click();

        // Попытка выбрать роль "Я являюсь студентом"
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(3)')
            .click();

        // Проверка наличия предупреждения
        cy.contains('Вы уже подали заявку на роль').should('be.visible');
    });
});
