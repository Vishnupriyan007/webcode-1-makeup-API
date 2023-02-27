let header=document.createElement("div");
header.setAttribute("class","head");
document.body.append(header);

let head =document.querySelector(".head");
head.innerHTML +=`<img src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" class="header-image">`

// ----------------creating body div:---------------------//

let content=document.createElement("div");
content.setAttribute("class","body");
document.body.append(content);

// ----------------creating pagination div:---------------------//

let footerPagination=document.createElement("div");
footerPagination.setAttribute("class","pagination-div fixed-bottom");
content.appendChild(footerPagination);

let pagination=document.querySelector(".pagination-div");
let paginationlink= document.getElementsByClassName("pagination-link")
let currentvalue=1;

// ---------------- pagination CLICK FUNCTION---------------------//
       

function paginationFunction(event){
    
    for(var i=0;i<paginationlink.length;i++){
        paginationlink[i].classList.remove("active")
      }

     event.target.classList.add("active")
     currentvalue=event.target.value
     console.log(currentvalue)
}

     //  -------PREVIOUS BUTTON FUNCTION-----------//
function previousbtnFunction(){   
    console.log(currentvalue);
    for(var i=0;i<paginationlink.length;i++){
        paginationlink[i].classList.remove("active")
    }
    if(currentvalue==1){
        paginationlink[0].classList.add("active")
     }
     else if(currentvalue>1){
        currentvalue--
        console.log(currentvalue)
        paginationlink[currentvalue-1].classList.add("active")
     }
}

           //  -------NEXT BUTTON FUNCTION-----------//

function nextbtnFunction(){
     for(var i=0;i<paginationlink.length;i++){
         paginationlink[i].classList.remove("active")
        }
      if(currentvalue==10){
         paginationlink[9].classList.add("active")
        } 
      else if(currentvalue<=10){
          currentvalue++
          paginationlink[currentvalue-1].classList.add("active");
          console.log(currentvalue);
        }
    }

         //  -------FIRST BUTTON FUNCTION-----------//

function firstbtnFunction(){
    for(var i=0;i<paginationlink.length;i++){
         paginationlink[i].classList.remove("active")
        
        }        
        paginationlink[0].classList.add("active")
        currentvalue=1;
        console.log(currentvalue)
    }

         //  -------LAST BUTTON FUNCTION-----------//

function lastbtnFunction(){
    for(var i=0;i<paginationlink.length;i++){
         paginationlink[i].classList.remove("active")
        }
         paginationlink[9].classList.add("active")
         currentvalue=10;
         console.log(currentvalue)
}

     //  -------PAGINATION INNER BODY-----------//

pagination.innerHTML += `<ul class="pagination-body">
                        <li class="first " value="1" onclick="firstbtnFunction()">First</li>
                        <li class="previous " onclick="previousbtnFunction()">&laquo;</li>
                        <li class="pagination-link active" value="1" onclick="paginationFunction(event)">1</li>
                        <li class="pagination-link" value="2" onclick="paginationFunction(event)">2</li>
                        <li class="pagination-link" value="3" onclick="paginationFunction(event)">3</li>
                        <li class="pagination-link" value="4" onclick="paginationFunction(event)">4</li>
                        <li class="pagination-link" value="5" onclick="paginationFunction(event)">5</li>
                        <li class="pagination-link" value="6" onclick="paginationFunction(event)">6</li>
                        <li class="pagination-link" value="7" onclick="paginationFunction(event)">7</li>
                        <li class="pagination-link" value="8" onclick="paginationFunction(event)">8</li>
                        <li class="pagination-link" value="9" onclick="paginationFunction(event)">9</li>
                        <li class="pagination-link" value="10" onclick="paginationFunction(event)">10</li>
                        <li class="next" onclick="nextbtnFunction()">&raquo;</li>
                        <li class="last"  onclick="lastbtnFunction()">Last</li>
                        </ul>`

                    

 //-------------------FETCHING FUNCTION-------------------------//

async function productCard(start,end){
    try {
        let response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json",{
            method:"GET"
        })
    let data = await response.json();
    console.log(data)


          //  -------CREATING CARD -DIV-----------//

    let card =document.createElement("div");
    card.setAttribute("class","main-card");
    content.appendChild(card);
    
    let productCards=document.querySelector(".main-card")
          
              //  -------CREATING CARD INNER BODY ELEMENT-----------//

        for(var i=start;i<end;i++){
            let brand=data[i].brand;
            let productName=data[i].name;
            let productPrice=data[i].price+' '+data[i].price_sign ;
            let productLink=data[i].product_link;
            let productImage=data[i].api_featured_image;
            let productDescription=data[i].description;

              
            // console.log(`Brand:${brand}`);

            productCards.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${productImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <div class="ProductName-div">${productName}</div>
            <div class="Brand-div">Brand:${brand}</div>
            <div class="description">Description:</div><div class="card-text">${productDescription}</div>
            <div class="price"><h4>PRICE: ${productPrice}</h4></div>
              <div class="buy"><a href="${productLink}" class="btn btn-primary" target="_blank">CLICK HERE TO BUY</a></div>
            </div>
          </div>`
            // console.log(productCards)
        }
        // console.log(products);
    } 
    catch (error) {
        console.log(error)
    }
}
productCard(0,30);


          //  ---------- PAGINATION -CLICK-FUNCTION-----------//

let paginationBody=document.querySelector(".pagination-body");
paginationBody.addEventListener("click",()=>{
     
      if(currentvalue==1){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(0,30);
       }
      else if(currentvalue==2){
          let productCards=document.querySelector(".main-card");
          productCards.remove();
          productCard(30,60);
      }
      else if(currentvalue==3 ){
          let productCards=document.querySelector(".main-card");
          productCards.remove();
          productCard(60,90);
      }
      else if(currentvalue==4){
          let productCards=document.querySelector(".main-card");
          productCards.remove();
          productCard(90,120);
      }
       else if(currentvalue==5){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(120,150);
    }
    else if(currentvalue==6){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(150,180);
    }
    else if(currentvalue==7){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(180,210);
    }
    else if(currentvalue==8){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(210,240);
    }
    else if(currentvalue==9){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(240,270);
    }
    else if(currentvalue==10){
        let productCards=document.querySelector(".main-card");
        productCards.remove();
        productCard(270,300);
    }
})
