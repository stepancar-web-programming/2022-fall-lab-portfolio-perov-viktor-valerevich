import {block} from "../utils";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback
        this.init()
        // slideTog(".card-body-modify", "card-text-modify")
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        // this.$el.addEventListener('dropdown', this.add.bind(this))
    }


    get template() {
        return [topBlockSideBar('Хобби'),
            block('Чтение книг', 'Люблю читать суровую техническую литературу, но не отказываюсь и от классиков художественной литературы.'),
            block('Гитара', 'Когда располагает душа и есть свободная минутка, я беру её в руки и играю для себя.'),
            block('Волейбол', 'В здоровом теле - здоровая подача (с) мой учитель физкультуры.')
        ].join('');
    }
}

export function topBlockSideBar(title) {
    return `
         <div class="card-header card-header-modify"> <h1>${title}</h1></div>
    `
}

export function slideTog(parentSelector) {
    const blocks = document.querySelectorAll(parentSelector);
    blocks.forEach(block => {
        block.addEventListener('click', function () {
            this.classList.toggle('active')
            console.log(block)
            let content = this.nextElementSibling
            console.log(content)
        })
    })
}

