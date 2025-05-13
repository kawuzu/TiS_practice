describe('Модуль Заявки - подача заявки на роль Работодателя', () => {
    it('Модуль Заявки - подача заявки на роль Работодателя', () => {
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

        // Нажатие кнопки "Выбрать роль"
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button')
            .click();

        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(1)')
            .click();

        // Выбор "Я представляю организацию"
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.variants-company > div:nth-child(2)')
            .click();

        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.create-company-form > div:nth-child(1) > div:nth-child(1) > div > input')
            .type('Тестовая организация');

        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.create-company-form > div:nth-child(1) > div:nth-child(2) > div > input')
            .type('г. Тестоград, ул. Примерная, д. 11');

        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.create-company-form > div:nth-child(2) > div > div > textarea')
            .type('Это краткое описание тестовой организации для проверки интерфейса.');

        // Нажатие кнопки "Создать"
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.create-company-form > div.create-company-form__description-block > button')
            .click();

    });
});
