
let boycottedBrands = [
{ name: "جونسون آند جونسون / Johnson & Johnson", image: "https://th.bing.com/th/id/OIP.j12c2hszmQE9-nfQeFwgAAHaDt?w=323&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "نيفيا / Nivea", image: "https://static.beautytocare.com/cdn-cgi/image/f=auto/media/catalog/product/n/i/nivea-cream-75ml.jpg" }, 
    { name: "ديتول / Dettol", image: "https://th.bing.com/th/id/OIP.uPh0GlIE4GeLt2v-FloMOwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "كارفور / Carrefour", image: "https://th.bing.com/th/id/OIP.7UekoANjzb9_yOI5uA-QBQHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "بوما / Puma", image: "https://th.bing.com/th/id/OIP.EusW-gYKl5cr58WN30MRvgHaEo?w=243&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "مايكروسوفت / Microsoft", image: "https://th.bing.com/th/id/OIP.PmpHE148Drbs_Vyx_lzJpwHaE8?w=253&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "إتش بي / HP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdDhQlZ__PbVBfe7WGp9a73Pml5LaXC9OKQ&s" },
    { name: "ديزني / Disney", image: "https://th.bing.com/th/id/OIP._jVoI0vjavao6rEdO4xRWgHaEK?w=273&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "بيتزا هت / Pizza Hut", image: "https://th.bing.com/th/id/OIP.2l2ES4zhd46Iuw2ljgvDgwHaFl?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "دومينوز بيتزا / Domino's Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0t9oWqKWoKT88ujAR_QPLZz3TJRc9YnjvQ&s" }, 
    { name: "باسكن روبنز / Baskin Robbins", image: "https://th.bing.com/th/id/OIP.dG4fRrEkGMkg_KAXUqgS0QHaFj?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "دوريتوس / Doritos", image: "https://th.bing.com/th/id/OIP.PhPATxtFrmjAxpkAt7PhEQHaD4?w=345&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "إنتل / Intel", image: "https://th.bing.com/th/id/OIP.Caz7ytLBF7iBgfB3fBBSrAHaEK?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
    { name: "نفيديا / Nvidia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURuKR5XO1KQB0nQuhNS6sSo2o2RzxoBkU0g&s" },
    { name: "نتفليكس / Netflix", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNhrG5bf9nxS54v58Ox_Z9mISmOM9z8Fveg&s" },
    { name: "شاي ليبتون / Lipton Tea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFkUlcT-AdLGvwT4MMCJ6qx5whI0fAfDNlg&s" },
    { name: "أوريو / Oreo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpJO8Zh2zHfQNQsjKViNQmg-8vW4Ei9AYGw&s" },
    { name: "طلبات / Talabat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcpLqoUPruJWyULn3k3tTvSPYUMKyXuML5g&s" }
];

let alternativeBrands = [
    { name: "البيك / Al Baik", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyA-Q18P50SO7_DSkjkLWO-YE0v7Kf00WBuQ&s" },
    { name: "هرفي / Herfy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtihW2qu4PNBwr6xrkpVt4CK9fbFBIC2Z5w&s" },
    { name: "كودو / Kudu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8TXnaavIowaWNhTKUaaTm_i76iZnnWfxuw&s" },
    { name: "الطازج / Al Tazaj", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDDM9J7GPNZ8NrrnGza2yxQjNEH6qqupQ6w&s" },
    { name: "جسميز / Jasmis", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRESS4GFYs1fc_i3JeesEbs4gPJCU1UOZ2g&s" },
    { name: "حليب لونا / Luna (Milk)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDaVKdzWWgPY1kUl5KB1v2l4CE7rgeUZRFA&s" },
    { name: "اوال / Awal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6ZkGosGy_BybBTETgjQl-8GVEKVPNU3c_w&s " },
    { name: "باجه / Baja", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRoK80VWpp0Zcby2j2Gtlye_KuMHevq0fVQ&s" },
    { name: "شاي الربيع / Al Rabie Tea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4-YMIl9OePG_WzmQk1HazfY0edQjc1OrlA&s" },
    { name: "شاي كبوس / Kaboos Tea", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab1Jv6Ya-ZP5CCKjQunuwzotlRhI7qpp9XA&s" },
    { name: "علي / Ali Café", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKohWTqcCrX0rd5m7N7eJySDSKIdtPFh4vBQ&s" },
    { name: "هيمالايا / Himalaya", image: "https://cdn.salla.sa/ejzd/vB5y7gkpRr8UEPChmsTdZlc5SLiyRKCue6PhlxVP.jpg" },
    { name: "داك / Dac", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxTGy2fiTN5y7Q3-9W6-zau8TAwZNvywVNg&s" },
    { name: "جينتو / Gento", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tV-tlHmWcGxjo8kf2bB4WK3nF-qZuO9hIg&s" },
    { name: "جاهز / Jahez (Delivery App)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrLSofiMtwJ95abi6WHwqcyIPWSksJMk49Q&s" },
    { name: "شاومي / Xiaomi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4I794dPVIBQaP3_IE6SRmXkeLn0oaGUPpQ&s" },
    { name: "بينار / Pinar)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdwT8lma7GRfXbn44eUTsKIbB3gpBZqpVhg&s" }, 
    { name: "لينوفو / Lenovo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QAUO4Xp7SQ7Ta78mDP6pvJwVdmOW6dm-fcXYeiYkxUBsv3zusZYWbd__kNvwfF6NSvA&usqp=CAU" },
    { name: "توشيبا / Toshiba", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_xV_89bEze0MZswmJGyzp32EK8xsk8PxrQ&s" },
    { name: "شارب / Sharp", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SrQ7KSnYj9v6OUvGSV-dz9LEULwURwvgZg&s" },
    { name: "العملاق / Al Amalaq", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJdVuZOf0Q43bjpLmgiaC3O-ISKkX1chAg&s" },
    { name: "ماكس كلين / Max Clean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQKi7jJvo373YoUfvSYbhmBj35lFUDHHdgA&s" },
    { name: "بحر / Bahar (Water)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXgNFQkhxPsfVsSGDB9RuoZbRGQIy3kUCYQ&s" },
    { name: "LC Waikiki", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjJGU6GGdmPYeO8cEviAg1f27Zyt_RiqoHw&s" }
];

 let allBrands=boycottedBrands.concat(alternativeBrands)

let score=0;
let scoreNumber;
let prodect;
let timerGame;
let gameDuration=10;
let remaningTimer=10;
let copyAllBrand=[];
let currentBrandObj;
  const page1Element=document.querySelector('.page1')
  const page2Element=document.querySelector('.page2')
  const page3Element=document.querySelector('.page3')

const imageProdElement = document.querySelector('#image-prod');
  const starterElement=document.querySelector('#starter')
  const scoreElement=document.querySelector('#score')
  const productElement=document.querySelector('#product')
  const yesBotElement=document.querySelector('#yes')
  const noBotElement=document.querySelector('#no')
  const scoreNumElement=document.querySelector('#score-number')
  const returnElement=document.querySelector('#return')
  const timerElement=document.querySelector('#timer')


starterElement.addEventListener('click',sart)

returnElement.addEventListener('click',returnfun)


function showPage(num){
    const pageElement=document.querySelectorAll('.page').forEach(onePage=>onePage.classList.remove('active'))
    const showPageElement=document.getElementById('page'+num).classList.add('active')
}
function sart(){
    remaningTimer=10
    score=0
    copyAllBrand=[...allBrands]
    showPage(2)
    mainGames()
}
function startTimer(){
   clearInterval(timerGame)
   updateTimer()

   timerGame=setInterval(()=>{remaningTimer-- 
      updateTimer()
      if (remaningTimer===0){
       clearInterval(timerGame)
       showPage(3)
       }
   },1000)
  
}

function updateTimer(){
    let persintage=(remaningTimer/gameDuration)*100
    timerElement.style.width=persintage+"%"

}


function mainGames(){
    if(copyAllBrand.length===0){
       clearInterval(timerGame)
        showPage(3)
        return
    }
 currentBrandObj=copyAllBrand[Math.floor(Math.random()* copyAllBrand.length)]

    productElement.textContent=currentBrandObj.name
    scoreNumElement.textContent=score
    if(imageProdElement){
    imageProdElement.src=currentBrandObj.image
    imageProdElement.alt=currentBrandObj.name
    }
  copyAllBrand = copyAllBrand.filter(item => item !== currentBrandObj)

startTimer()

}

function YES (){
    const isBoycotted = boycottedBrands.some(brand => brand.name === currentBrandObj.name);
    if(isBoycotted){
        score+=1
       remaningTimer +=1 
       scoreElement.textContent=score;
     
       updateTimer()
    }
    else{
           remaningTimer --
        

           updateTimer()

    }
    if(remaningTimer<=0){
        clearInterval(timerGame)
        showPage(3)
        return
    }
    mainGames()
}

function NO (){
     const isAlternative = alternativeBrands.some(brand => brand.name === currentBrandObj.name);
    if(isAlternative){
        score+=1
        scoreElement.textContent=score;
       remaningTimer +=1 
       scoreElement.textContent=score;
       updateTimer();
    }
    else{
           remaningTimer --
          updateTimer()

    }
     if(remaningTimer<=0){
        clearInterval(timerGame)
        showPage(3)
        return
    }
    mainGames()
}

function returnfun (){
    showPage(1)
    score=0
    scoreElement.textContent=0
}


