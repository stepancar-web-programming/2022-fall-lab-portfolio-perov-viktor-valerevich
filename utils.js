export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content, styles='') {
    return `<div class="col-sm" style="${styles}">${content}</div>`
}

export function css(styles = {}) {
    const toString = key => `${key}:${styles[key]}`
    return Object.keys(styles).map(toString).join(";")
}

export function block(innerTitle, innerText) {
    return `
        <div class="card text-white bg-secondary mb-3 d-inline-block" style="max-width: 20rem;">
            <div class="card-body">
                <h4 class="card-title">${innerTitle}</h4>
                <p class="card-text"  >${innerText}</p>
            </div>
        </div>
    `
}

export function counter() {
    const btns = document.querySelectorAll('.counter__btn');


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;

            direction === 'plus'
                ? newValue = currentValue + 1
                : newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;

            inp.value = newValue;
        })
    })

}