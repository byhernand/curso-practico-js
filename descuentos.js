const coupons = [
  { promoCode: "MAGIKARP-COD3", discountValue: 10 },
  { promoCode: "PSYDUCK-COD3", discountValue: 25 },
  { promoCode: "HITMONLEE-COD3", discountValue: 40 },
  { promoCode: "SNORLAX-COD3", discountValue: 60 },
  { promoCode: "VENUSAUR-COD3", discountValue: 90 }
]

function calculatePriceWithDiscount(price, discount) {
  const percentagePriceDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceDiscount) / 100;

  return priceWithDiscount;
}

function calculateFinalPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const inputCoupon = document.getElementById("inputCoupon");
  const couponCode = inputCoupon.value;
  const resultP = document.getElementById("resultPrice");

  const validCoupon = coupons.find( (coupon) => {
    return couponCode === coupon.promoCode;
  })
  
  if(validCoupon) {
    const price = inputPrice.value;
    const discount = validCoupon.discountValue;
    const finalPrice = calculatePriceWithDiscount(price, discount);
    resultP.innerHTML = `Tienes un descuento del ${discount}%, su precio a final es ${finalPrice}`;
  }
  else {
    resultP.innerHTML = "El cupon no es valido";
  }
}