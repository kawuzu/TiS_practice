describe('Модуль Регистрации – выбор роли студента', () => {
    it('Модуль Регистрации – выбор роли студента', () => {
        // Переход на сайт
        cy.visit('https://dev.profteam.su/');

        // Нажатие на кнопку "Выбрать роль"
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button')
            .click();

        // Выбор роли "Я являюсь студентом"
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(3)')
            .click();
    });
});
