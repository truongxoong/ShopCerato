let cartTop = document.querySelector('.head-right .fa-cart-shopping')
let exitCart = document.querySelector('.cart .fa-circle-xmark')
let searchTop = document.querySelector('.head-right .fa-magnifying-glass')
let exitSearch = document.querySelector('.searchView .fa-xmark')
//show cart
cartTop.addEventListener('click', function() {
    document.querySelector('.cart').style.right = '0%'
})
//exit card
exitCart.addEventListener('click', function() {
    document.querySelector('.cart').style.right = '-100%'
})
//searchView
searchTop.addEventListener('click', function() {
    document.querySelector('.searchView').style.opacity = '1'
    document.querySelector('.searchView').style.zIndex = "1"
})
//exit view
exitSearch.addEventListener('click', function() {
    document.querySelector('.searchView').style.zIndex = "-1"
    document.querySelector('.searchView').style.opacity = '0'
})
// preview
let Preview = document.querySelectorAll('.swiper-slide .women-view')
Preview.forEach(function(pre) {
    pre.addEventListener('click', function(e) {
        let previewProduct = e.target.parentElement
        let previewImg = previewProduct.querySelector('.product-women .swiper-slide img').src
        let previewPrice = previewProduct.querySelector('.product-women .swiper-slide p span').innerText
        document.querySelector('.Preview').style.opacity = '1'
        document.querySelector('.Preview').style.zIndex ='1'
        addProduct(previewImg, previewPrice)
    })
})
let PreviewP = document.querySelectorAll('.swiper-slide .women-view p')
PreviewP.forEach(function(pre) {
    pre.addEventListener('click', function(e) {
        let previewProduct = e.target.parentElement.parentElement
        let previewImg = previewProduct.querySelector('.product-women .swiper-slide img').src
        let previewPrice = previewProduct.querySelector('.product-women .swiper-slide p span').innerText
        document.querySelector('.Preview').style.opacity = '1'
        document.querySelector('.Preview').style.zIndex ='1'
        addProduct(previewImg, previewPrice)
    })
})
// hàm khi ấn vào xem qua để hiện sp lên
function addProduct(previewImg, previewPrice) {
    let img = document.createElement('img')
    let price = document.createElement('span')
    img.src = previewImg
    price.innerHTML = '<span>'+previewPrice+'<sup>đ</sup></span> '
    let preImg = document.querySelector('.Preview-img')
    let prePrice = document.querySelector('.Preview .price')
    preImg.appendChild(img)
    prePrice.appendChild(price)
    
}
// exitPreview
let exitPreview = document.querySelector('.preview-content > i')
exitPreview.addEventListener('click', function() {    
    document.querySelector('.Preview').style.opacity = '0'
    document.querySelector('.Preview').style.zIndex ='-1'
    document.querySelector('.Preview-img img').remove()
    document.querySelector('.Preview .price span').remove()
})

/////////////////////////////////////////
let addCart = document.querySelectorAll('.women-icon .fa-baby-carriage')
addCart.forEach(function(add) {
    add.addEventListener('click', function(e) {
        document.querySelector('.cart').style.right = '0%'
        let productCart = e.target.parentElement.parentElement
        let productImg = productCart.querySelector('img').src
        let productPrice = productCart.querySelector('.price span').innerHTML        
        AddCart(productImg, productPrice)
        totalPrice()
        deleteProduct()
        
    })
})
//them vao  gio hang
function AddCart(productImg, productPrice) {
    let trCart = document.createElement('tr')
    trCart.innerHTML = '<tr><td><img style="width: 100px;" src="'+productImg+'" alt=""><span>Áo dài</span></td><td><span class = "priceTd">'+productPrice+'</span><sup>đ</sup></td><td><input style="width: 50px;" type="number" value="1" min="1"></td><td><span class = "delete" style="cursor: pointer;">Xóa</span></td></tr>'
    let tbodyCart = document.querySelector('table tbody')
    tbodyCart.appendChild(trCart)
    changeProduct()
}
//tinh tien khi them vao giỏ hàng
function totalPrice() {
    let totalAll = 0
    let totalTr = document.querySelectorAll('tbody tr')
    for(let i=0; i < totalTr.length; i++) {
        let totalTd = totalTr[i].querySelector('.priceTd').innerHTML
        let totalValue = totalTr[i].querySelector('input').value
        totalAll += totalTd *totalValue * 1000
    }
    let totalMoney = document.querySelector('.total-price span')
    totalMoney.innerHTML = totalAll.toLocaleString('de-DE')
    let PriceTop = document.querySelector('.head-right span')
    PriceTop.innerHTML = totalAll.toLocaleString('de-DE')
}
// hàm xóa sản phẩm
function deleteProduct() {
    let totalTr = document.querySelectorAll('tbody tr')
    for(let i =0; i < totalTr.length; i++) {
        let deletePri = totalTr[i].querySelector('.delete')
        deletePri.addEventListener('click', function(e) {
            let deleteTr = e.target.parentElement.parentElement
            deleteTr.remove()
            totalPrice()
        })
    }
}
// hàm thay đổi số lượng thì tiền cũng thay đổi theo
function changeProduct() {
    let changePro = document.querySelectorAll('tbody tr')
    for(let i =0; i < changePro.length; i++) {
        let change = changePro[i].querySelector('input')
        change.addEventListener('change', function() {
            totalPrice()
        })
    }
}