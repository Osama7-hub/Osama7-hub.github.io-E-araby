window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"@fortawesome/fontawesome-free/js/all.min";import"./css/stlye.css";function calculateTotalPrice(){let e=0;document.querySelectorAll("[data-product-info]").forEach((t=>{const o=t.getAttribute("data-product-price"),c=t.querySelector("[data-product-quantity]").value;e+=o*c})),document.getElementById("total-price-for-all-product").innerHTML=e+"$"}document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e=>new bootstrap.Tooltip(e))),document.querySelectorAll(".add-to-cart-btn").forEach((e=>{e.addEventListener("click",(()=>{alert("أضيف المُنتج إلى عربة الشراء")}))})),document.querySelectorAll('.size-option input[type="radio"]').forEach((e=>{e.addEventListener("change",(()=>{document.querySelectorAll(".size-option").forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll('.color-option input[type="radio"]').forEach((e=>{e.addEventListener("change",(()=>{document.querySelectorAll(".color-option").forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll("[data-product-quantity]").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=e.closest("[data-product-info]"),c=t*o.getAttribute("data-product-price");o.querySelector(".total-price-for-product").innerHTML=c+"$",calculateTotalPrice()}))})),document.querySelectorAll("[data-remove-from-card]").forEach((e=>{e.addEventListener("click",(()=>{e.closest("[data-product-info]").remove(),calculateTotalPrice()}))}));const citiesByCountry={sa:["جدة","الرياض"],eg:["القاهرة","الإسكندرية"],jo:["عمان","الزرقاء"],sy:["دمشق","حلب","حماه"],su:["الخرطوم","بورتسودان"],qo:["الدوحة","الوكرة"],mo:["الدار البيضاء ","مراكش","الرباط"],alg:["الجزائر","عنابة","قسنطينة"],Le:["بيروت","طرابلس"],bah:["المنامة","المحرق"],ku:["الكويت","الجهراء"],ye:["أمانة ","عدن","صنعاء"],om:["مسقط","صحار"],pa:["القدس","غزة","حيفا"],ir:["بغداد","البصرة"],tu:["تونس","صفاقس"],lib:["مصراتة","بنغازي"],em:["ابوظبي","دبي"]};document.querySelectorAll('select[name="country"]').forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=citiesByCountry[t];document.querySelectorAll("#paymentcities option").forEach((e=>e.remove()));const c=document.createElement("option"),r=document.createTextNode("اختر المدينة");c.appendChild(r),c.setAttribute("value",""),c.setAttribute("disabled","true"),c.setAttribute("selected","true");const a=document.getElementById("paymentcities");a.appendChild(c),o.forEach((e=>{const t=document.createElement("option"),o=document.createTextNode(e);t.appendChild(o),t.setAttribute("value",e),a.appendChild(t)}))}))})),document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=document.querySelectorAll("#credit_card_info input");"on_delivery"===t?o.forEach((e=>{e.style.display="none"})):o.forEach((e=>{e.style.display="block"}))}))})),document.getElementById("copyright").innerHTML="جميع الحقوق محفوظة للمتجر سنة "+(new Date).getFullYear();