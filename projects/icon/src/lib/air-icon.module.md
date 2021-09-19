#Icons

Сейчас в проекте есть 4 способа отображения иконок
1. `<i-icon name="name"></i-icon>`
1. `<img src="path-to-icon">`
1. `<air-icon name="name"></air-icon>`
1. `<air-dynamic-icon name="name""></air-dynamic-icon>`
   <br>
   `1, 2, 3` пункты - устаревшие, если вы видите их в проекте - замените на пункт 4.

###Как подключать динамические иконки
Для примера возьмем иконку корзины trash.svg
1. Загружаем иконку `src/assets/dynamic-icons/default/trash.svg`
1. Запускаем npm run sprite
1. После этого иконку можно использовать с помощью `<air-dynamic-icon name="trash">`
1. По умолчанию иконка будет `primary` цветом (в случае с yeda это синий), если нужен другой цвет - используйте атрибут `color`
1. По умолчанию размер иконки 20x20, если нужен другой размер - используйте атрибут `size`
1. По умолчанию цвет иконки изменяется с помощью `fill`, но некоторые иконки требуют менять `stroke`, в таком случае измените `colorMode` на `stroke` или  `all`

###Спрайты
*Бывает так, что некоторые иконки используются только в определенной части приложения, в таком случае лучше вынести иконки в отдельный спрайт*
Для примера добавим спрайт admin-nav
1. Добавляем папку с названием спрайта `src/assets/dynamic-icons/admin-nav`
1. Добавляем скрипт в package.json для генерации спрайта `"sprite admin nav": "svg2sprite ./src/assets/dynamic-icons/admin-nav ./src/assets/sprites/admin-nav.svg --stripAttrs width --stripAttrs height --stripAttrs fill --stripAttrs stroke --stripAttrs id"`
1. Добавляем туда иконки и запускаем скрипт
1. Используем по примеру `<air-dynamic-icon name="settings" sprite="admin-nav"></air-dynamic-icon>`

###Цветные динамические иконки
Если нужно добавить цветную динамическую картинку нужно к тегу `<path ... />` добавить стили, например:
`style="fill: var(--color-primary)"`

Также если нужно сделать так что бы у иконки был статический цвет, который не меняется тоже добавляем стиль, например:
`style="fill: #CCCFDC"`



