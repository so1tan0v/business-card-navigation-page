async function asyncTyped(DOMelement, message, typedParams = {
   typeSpeed: 10,
}) {
   return new Promise(resolve => {
      if(typeof message === 'string')
         message = [message];

      typedParams.strings = message
      let typed = new Typed(DOMelement, typedParams);

      let interval = setInterval(() => {
         if(typed.typingComplete) {
            clearInterval(interval);
            resolve(true);
         }
      }, 100)
   })

}

$(document).ready(async function () {
    await asyncTyped(
        '#start-message',
        startMessage,
        {
            typeSpeed: 10,
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
            `<b>Ilia</b><br>Technical Lead / Senior Software Engineer`,
            {
                typeSpeed: 5,
                showCursor: false
            }
        ),
        asyncTyped(
            '#alex-message',
            `<b>Alexander</b><br>Team Lead / Full-stack Engineer`,
            {
                typeSpeed: 5,
                showCursor: false
            }
        )
    ])
})


