document.addEventListener("DOMContentLoaded", function () {
    console.log('entering document')
    let fondo = document.querySelector('.hero-spiders-bg');
    let bgColor = document.querySelector('.hero-spiders-bgC');

    let gwen = document.querySelector('.gwen');
    let peter = document.querySelector('.peter');
    let miles = document.querySelector('.miles');

    const todosLosHeroes = document.querySelectorAll('.heroes');

    gwen.addEventListener('mouseenter', function () {
        gwen.style.top = '114px';
        gwen.style.left = '80px';
        gwen.style.width = '395px';
        gwen.style.height = '614px';

        peter.style.top = '244px';
        peter.style.left = '472px';
        peter.style.width = '323px';
        peter.style.height = '354px';
        peter.style.filter = 'blur(5px)';

        miles.style.top = '244px';
        miles.style.right = '68px';
        miles.style.width = '243px';
        miles.style.height = '309px';
        miles.style.filter = 'blur(5px)';

        bgColor.src = 'resources/section-7/gwenBg.png';
        bgColor.style.opacity = 1;
        bgColor.style.zIndex = 2;
        fondo.style.zIndex = 1;
    })

    peter.addEventListener('mouseenter', function () {
        peter.style.top = '116px';
        peter.style.left = '184px';
        peter.style.width = '616px';
        peter.style.height = '677px';

        gwen.style.top = '296px';
        gwen.style.left = '74px';
        gwen.style.width = '220px';
        gwen.style.height = '342px';
        gwen.style.filter = 'blur(5px)';

        miles.style.top = '244px';
        miles.style.right = '62px';
        miles.style.width = '257px';
        miles.style.height = '327px';
        miles.style.filter = 'blur(5px)';

        bgColor.src = 'resources/section-7/peterBg.png';
        bgColor.style.opacity = 1;
        bgColor.style.zIndex = 2;
        fondo.style.zIndex = 1;
    })

    miles.addEventListener('mouseenter', function () {
        miles.style.top = '63px';
        miles.style.right = '-11px';
        miles.style.width = '497px';
        miles.style.height = '632px';

        gwen.style.top = '244px';
        gwen.style.left = '152px';
        gwen.style.width = '227px';
        gwen.style.height = '352px';
        gwen.style.filter = 'blur(5px)';

        peter.style.top = '252px';
        peter.style.left = '324px';
        peter.style.width = '352px';
        peter.style.height = '387px';
        peter.style.filter = 'blur(5px)';

        bgColor.src = 'resources/section-7/milesBg.png';
        bgColor.style.opacity = 1;
        bgColor.style.zIndex = 2;
        fondo.style.zIndex = 1;
    })

    for (const heroe of todosLosHeroes) {
        heroe.addEventListener('mouseleave', () => {
            gwen.style.top = '171px';
            gwen.style.left = '90px';
            gwen.style.width = '268px';
            gwen.style.height = '417px';
            gwen.style.filter = '';

            peter.style.top = '180px';
            peter.style.left = '293px';
            peter.style.width = '417px';
            peter.style.height = '458px';
            peter.style.filter = '';

            miles.style.top = '180px';
            miles.style.right = '88px';
            miles.style.width = '314px';
            miles.style.height = '399px';
            miles.style.filter = '';

            bgColor.src = '';
            bgColor.style.opacity = '0';
            fondo.src = 'resources/section-7/background-solid.png';
            fondo.style.zIndex = '-1';
        })
    }
})