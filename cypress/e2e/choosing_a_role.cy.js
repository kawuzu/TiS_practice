describe('Модуль Регистрации – выбор роли студента', () => {
    it('Модуль Регистрации – выбор роли студента', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Нажатие на кнопку "Авторизация"
        cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button')
            .click();

        // Заполнение поля логина
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input')
            .type('kawuzu');

        // Заполнение поля пароля
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .type('emaepar0L');

        // Нажатие кнопки "Войти"
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();

        // Ожидание загрузки страницы после входа
        cy.url().should('not.include', '/login'); // Убедитесь, что URL изменился

        // Нажатие на кнопку "Выбрать роль"
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button')
            .click();

        // Выбор роли "Я являюсь студентом"
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(3)')
            .click();
    });
});
