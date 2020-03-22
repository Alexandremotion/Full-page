new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction) => {    // onLeave: Quando vc sair da pagina, origin e a posição que vc esta, destination e pra onde vc vai. 
        const section = destination.item
        //console.log(destination.item)
        const title = section.querySelector('h1')
        const tl = new TimelineMax({ delay: 0.5 })
        tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y:0, opacity:1})  // Ele vai dá a posição que ele começa e a que ele termina.

        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair')
            const description = document.querySelectorAll('.description')

            tl.fromTo(chairs, 0.7, {x: '100%'}, {x: '-35%'})
            .fromTo(description, 0.5, {y: '50', opacity: 0}, {y:0, opacity:1})
            .fromTo(chairs[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(chairs[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(chairs[2], 1, {opacity: 0}, {opacity: 1})
        }
    } 

})