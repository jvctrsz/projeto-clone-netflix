const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click',() =>{
        const isBefore = 
        control.classList.contains('before-arrow')  
        
        if(isBefore){
           currentItem -= 4;
        } else {
            currentItem += 4;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItems ;
        }

        items[currentItem].scrollIntoView({
            inline:'start',
            behavior:'smooth'
        })

        console.log('control', isBefore, currentItem)
    })
})


const controles = document.querySelectorAll('.control-2');

let itemSelecionado = 0;

const trendItem = document.querySelectorAll('.slider-item');

const trendMax = trendItem.length;

controles.forEach(control1 =>{
    control1.addEventListener('click', () =>{
       const trendBefore = 
       control1.classList.contains('trend-before')

       if(trendBefore){
        itemSelecionado -= 4;
        } else {
            itemSelecionado += 4;
        }

        if(itemSelecionado >= trendMax){
            itemSelecionado = 0;
        }
        if(itemSelecionado < 0){
            itemSelecionado = trendMax ;
        }

        trendItem[itemSelecionado].scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        })
    })
})
