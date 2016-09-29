$(document).foundation();
//удаление класс
function resetListItems() {
    var items = document.querySelectorAll('ul.menu li');
    $.each(items, function (index, item) {
        $(item).removeClass('active');
    });
};

var omega = ["An", "Ds", "Ne", "Ty", "An", "Ds", "Ne", "Ty"];
var beta = ["Dos", "Ert", "Ser", "Wet", "Dos", "Ert", "Ser", "Wet"];
var delta = [["Dos", "2", "Ser", "Dos", "Ert", "Ser", "Dos", "Ert"], ["Dos", "3", "Ser", "Dos", "Ert", "Ser", "Dos", "Ert"], ["Dos", "Ert", "Ser", "Dos", "Ert", "Ser", "Dos", "Ert"]];

(function () {
    "use strict";

    var tableBuilder = new TableBuilder(omega);
    // tableBuilder.createRow([1,2,3,4,5,6,7,8])
    tableBuilder.setHeaderColor("tomato");

    tableBuilder.setTableData(delta);

    window.addEventListener('colorChanged', function (e) {
        var data = e.detail;
        tableBuilder.setHeaderColor(data.color);
    });


    // поведение меню
    var items = document.querySelectorAll('ul.menu li');
    $.each(items, function (index, item) {

        $(item).click(function (e) {
            var self = $(this);
            resetListItems();
            self.addClass('active');
//кастомное событие
            var eventCustom = new CustomEvent('colorChanged', {
                detail: {
                    color: self.data('color')

                }
            });
            window.dispatchEvent(eventCustom);
        });
    });


    //обработчик добавления строки
    $('#btn').on('click', function (e) {
        var newRow = new Array(8).fill(0).map(function () {

            return Math.random() * 10000;

        });
        delta.push(newRow);

        tableBuilder.setTableData(delta);
    });

})();