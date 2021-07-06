const form =document.querySelector('searchForm');

form.addEventListener('submit',()=>){
    const ctype =form.elements.coinType.value;
    console.log(ctype);
}