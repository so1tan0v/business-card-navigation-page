async function asyncTyped(DOMelement, message, typedParams = {
    typeSpeed: defaultTextPrintTime,
}) {
    return new Promise(resolve => {
        if(typeof message === 'string')
           message = [message];

        typedParams.strings = message;
        typedParams.onComplete = () => {
            resolve(true)
        }

        new Typed(DOMelement, typedParams);
    })
}

async function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), time)
    })
}

(async function titleChanger() {
    for(let item of assembly_HelloWorld) {
        $('title').text(item);
        await sleep(titleChangeTime);
    }
    await titleChanger();
})();

$(document).ready(async function () {
    await asyncTyped(
        '#start-message',
        startMessage,
        {
            typeSpeed: defaultTextPrintTime,
            showCursor: false
        }
    );

    $('.choice').show();

    $('#ilia').on('click', function () {
        location.href = iliaPage;
    })
    $('#alex').on('click', function () {
        location.href = alexPage;
    })

    await Promise.all([
        asyncTyped(
            '#ilia-message',
            `<b>Ilia</b><br>Senior Software Engineer`,
            {
                typeSpeed: 5,
                showCursor: false
            }
        ),
        asyncTyped(
            '#alex-message',
            `<b>Alexander</b><br>Senior Software Engineer`,
            {
                typeSpeed: 5,
                showCursor: false
            }
        )
    ])
})