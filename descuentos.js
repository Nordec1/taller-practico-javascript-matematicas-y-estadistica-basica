const form = document.querySelector('#form');
const precioDelArticulo = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('.button-calculator');
const pResult = document.querySelector('.result');

form.addEventListener('submit', calcularInputs);


// Con Objectos
/*
    const couponsObject = {
        YardSale: 50,
        YardSale_barato: 30,
        YardSale_plateado: 20,
        Shh: 40,
        Pipo: 15,
    };
*/

// Con Arrays
const couponsList = [];
couponsList.push({
    name: 'Superman',
    discount: 30,
});

couponsList.push({
    name: 'Batman',
    discount: 40,
});

couponsList.push({
    name: 'Flash',
    discount: 15,
});

couponsList.push({
    name: 'Mujer Maravilla',
    discount: 70,
});


function calcularInputs (key) {
    key.preventDefault();
    const price = Number(precioDelArticulo.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = 'Rellene los campos, por favor';
        return;
    };

    //Reto con Arrays

    let discount;

    function isCouponInArray(couponElement){
        return couponElement.name == coupon;
    };
    
    const couponInArray = couponsList.find(isCouponInArray);

    //For in Array
    for (key in couponsList) {
        if (couponInArray) {
            discount = couponInArray.discount;
        } else{
            pResult.classList.remove('border');
            pResult.classList.add('warning');
            pResult.innerText = `El cupón que ingreso no existe`; 
            return;
        };

        const newPrice = (price * (100 - discount)) / 100;
        pResult.classList.remove('warning');
        pResult.classList.add('border');
        pResult.innerText = `Con el cupón ${couponInArray.name}! obtienes un %${couponInArray.discount} de descuento, aplicando
        esto el nuevo precio es de $${newPrice}`;
    };

    //Reto con Arrays


    //Reto con Objectos

    //For in Objects
   /*
        for (key in couponsObject) {
            if (coupon == key) {
                const newPrice = (price * (100 - couponsObject[key])) / 100;

                pResult.classList.remove('warning');
                pResult.classList.add('border');
                pResult.innerText = `Con el cupón ${key} obtienes un %${couponsObject[key]} de descuento, aplicando
                esto el nuevo precio es de: $${newPrice}`;

                return;
            };
        }; 
    */

   /*
        pResult.classList.remove('border');
        pResult.classList.add('warning');
        pResult.innerText = `El cupón que ingreso no existe`;
    */
   
   //Reto con Objectos
};