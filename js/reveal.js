//Esse arquivo adiciona o efeito da biblioteca Scroll Reveal nos componentes abaixo:

window.revelar = ScrollReveal({reset:true})

//TOPO DO SITE
revelar.reveal('.efeito-txt-hero',
{
    duration: 1000,
    distance: '90px'
})

revelar.reveal('.efeito-txt-sobre',
{
    duration: 1000,
    distance: '90px'
})

revelar.reveal('.efeito-img-sobre',
{
    duration: 1000,
    distance: '90px',
    delay: 200,
    origin: 'right'
})

revelar.reveal('.efeito-txt-itens',
{
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img-itens',
{
    duration: 1000,
    distance: '90px',
    delay: 300,
    origin: 'right'
})

revelar.reveal('.efeito-txt-social',
{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})