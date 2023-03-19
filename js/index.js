async function asyncTyped(DOMelement, message, typedParams = {
   typeSpeed: 30,
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
    await asyncTyped('#start-message', startMessage);

    console.log('Animation (start-message) completed!');
    $('.choice').show();

    $('#ilia').on('click', function () {
        location.href = iliaPage;
    })
    $('#alex').on('click', function () {
        location.href = alexPage;
    })

    await Promise.all([
        asyncTyped('#ilia-message', `<b>Ilia</b><br>Technical Lead / <br>Senior Software Engineer`, {typeSpeed: 30, showCursor: false}),
        asyncTyped('#alex-message', `<b>Alexander</b><br>TeamLead / <br>Full-stack Engineer`, {typeSpeed: 30, showCursor: false})
    ])
    console.log('Animation (alex and ilia message) completed!');
})


