/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const elem = document.getElementsByTagName('body')[0];

    for (let i = 0; i < count; i++) {
        elem.insertAdjacentHTML(
            'beforeend',
            '<' + tag + '>' + content + '</' + tag + '>',
        );
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let div = document.createElement('div');
    div.className = 'item_1';

    const temp_f = function (node, level_value, childrenCount) {
        if (level_value > level) {
            return node;
        }

        for (let i = 0; i < childrenCount; i++) {
            node.insertAdjacentHTML(
                'beforeend',
                '<div class="item_' + level_value + '">' + '</div>',
            );
        }

        let t_node = node.childNodes;
        for (let i = 0; i < childrenCount; i++) {
            let t_v = level_value + 1;
            t_node[i].set = temp_f(t_node[i], t_v, childrenCount);
        }

        return node;
    };

    div = temp_f(div, 2, childrenCount);

    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let div = generateTree(2, 3);

    let temp = div.getElementsByClassName('item_2');
    for (let i = 0; i < temp.length; i++) {
        temp[i].outerHTML =
            '<section class="item_2">' + temp[i].innerHTML + '</section>';
    }

    return div;
}
