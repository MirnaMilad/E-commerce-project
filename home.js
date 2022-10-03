// Slider
var svg = document.querySelectorAll('svg');

var pics = [
    '/slider/pexels-photo-934070.jpeg',
    '/slider/pexels-photo-8092507.jpeg',
    '/slider/pexels-photo-909907.jpeg',
    '/slider/pexels-photo-1502645.webp',
    '/slider/pexels-photo-4672665.jpeg'
    
    ];
    var i = 1;
    
    function previous() {
      i = i - 1;
      if (i < 0) {
        i = pics.length-1
        return document.querySelector("img").setAttribute("src", pics[(pics.length-1)])
      } else {
        return document.querySelector("img").setAttribute("src", pics[i]);
      }
    }
  
      function next(){
        i = i + 1;
        if(i > pics.length-1){
          i = 0
          return document.querySelector("img").setAttribute("src", pics[0]);
        }
        else{
          return document.querySelector("img").setAttribute("src", pics[i]);
        }
      }
  
  

  // Categories
 



  // declaring the products in arrays

      var arr=[
        {
          'image' : '/slider/phones/samsung-galaxy-a73-mint-front-m.jpg' ,
          'name' : 'samsung galaxy' ,
          'price' : '5,000 EG',
          'desc' : "Samsung Galaxy is Samsung Electronics' flagship line of Android smartphones and tablets"
        },
        {
          'image' : "/slider/makeup/29efce4d69d48f87d127d03b628d1625.jfif" ,
          'name' : 'Maybelline' ,
          'price' : '180 $',
          'desc' : 'Maybelline New York is the number one global cosmetics brand and is available in over 129 countries worldwide'
        },
        {
          'image' : "/slider/laptops/lenovo-laptops-ideapad-1i-14-series-front-thumbnail.webp" ,
          'name' : 'lenovo' ,
          'price' : '22,299 EGP',
          'desc' : "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices."
        },
        {
          'image' : "/slider/cars/1_2021_bugatti_chiron_super_sport.jpg" ,
          'name' : 'Bugatti' ,
          'price' : '3,000,000 $',
          'desc' : 'Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.'
        },
        {
          'image' : '/slider/phones/samsung-galaxy-a73-mint-front-m.jpg' ,
          'name' : 'samsung galaxy' ,
          'price' : '5,000 EG',
          'desc' : "Samsung Galaxy is Samsung Electronics' flagship line of Android smartphones and tablets"
        },
        {
          'image' : "/slider/cars/verge-writer-tells-car-companies-to-shut-up-about-evs-and-just-get-to-work-making-them-177140_1.jpg",
          'name' : 'Red Jaguar' ,
          'price' : '44,900 $',
          'desc' : 'Jaguars also have stockier bodies, shorter limbs, and larger paws than leopards.'
        },
        {
          'image' : '/slider/phones/img-1654843145323.jpg' ,
          'name' : 'Samsung' ,
          'price' : '15.999 EGP',
          'desc' : "It released its first Android smartphone in 2009, and can be credited"
        },{
          'image' : "/slider/makeup/29efce4d69d48f87d127d03b628d1625.jfif" ,
          'name' : 'Maybelline' ,
          'price' : '180 $',
          'desc' : 'Maybelline New York is the number one global cosmetics brand and is available in over 129 countries worldwide'
        },{
          'image' : "/slider/laptops/images.jfif" ,
          'name' : 'DELL Vostro' ,
          'price' : '12,800 EGP',
          'desc' : 'Dell Vostro is a line of business-oriented laptop and desktop computers manufactured by Dell aimed at small to medium range businesses.'
        }
      ]
  
  var phones =[
    {
    'image' : '/slider/phones/Android-Phones-FairPhone4-Gear.webp' ,
    'name' : 'Fair Phone' ,
    'price' : '17,250 EGP',
    'desc' : 'smartphone designed with ecological and ethical issues'
  },
  {
    'image' : '/slider/phones/Infinix-Smart-6-HD-Aqua-Sky-1.jpg' ,
  'name' : 'Infinix Smart' ,
  'price' : '7,000 EGP',
  'desc' : 'Features 5.0″ display, MT6580 chipset, 3060 mAh battery, 16 GB storage'}
  ,{
    'image' : '/slider/phones/img-1654843145323.jpg' ,
    'name' : 'Samsung' ,
    'price' : '15.999 EGP',
    'desc' : "It released its first Android smartphone in 2009, and can be credited"
  },
  {
    'image' : '/slider/phones/samsung-galaxy-a73-mint-front-m.jpg' ,
    'name' : 'samsung galaxy' ,
    'price' : '25,000 EGP',
    'desc' : "Samsung Galaxy is Samsung Electronics' flagship line of Android smartphones and tablets"
  },
  {
    'image' : '/slider/phones/Android-Phones-FairPhone4-Gear.webp' ,
    'name' : 'Fair Phone' ,
    'price' : '17,250 EGP',
    'desc' : 'smartphone designed with ecological and ethical issues'
  },
  {
    'image' : '/slider/phones/Infinix-Smart-6-HD-Aqua-Sky-1.jpg' ,
  'name' : 'Infinix Smart' ,
  'price' : '7,000 EGP',
  'desc' : 'Features 5.0″ display, MT6580 chipset, 3060 mAh battery, 16 GB storage'}
  ,
  {
    'image' : '/slider/phones/samsung-galaxy-a73-mint-front-m.jpg' ,
    'name' : 'samsung galaxy' ,
    'price' : '5,000 EG',
    'desc' : "Samsung Galaxy is Samsung Electronics' flagship line of Android smartphones and tablets"
  },
  {
    'image' : '/slider/phones/Android-Phones-FairPhone4-Gear.webp' ,
    'name' : 'Fair Phone' ,
    'price' : '17,250 EGP',
    'desc' : 'smartphone designed with ecological and ethical issues'
  },
  {
    'image' : '/slider/phones/Infinix-Smart-6-HD-Aqua-Sky-1.jpg' ,
  'name' : 'Infinix Smart' ,
  'price' : '7,000 EGP',
  'desc' : 'Features 5.0″ display, MT6580 chipset, 3060 mAh battery, 16 GB storage'}
  ,
  ]
  
  var makeUp =[ {
    'image' : "/slider/makeup/2022-index-makeup-essentials-1645556621.jpg" ,
    'name' : 'Dior' ,
    'price' : '171 $',
    'desc' : 'French luxury fashion house controlled and chaired by French businessman Bernard Arnault'
  },
  {
    'image' : "/slider/makeup/26ffdaef-5c61-48d4-abfc-a70ad614bd5b.3cb6a84ec26d43459a9554d9d4c8ae31.webp" ,
  'name' : "L'Oreal" ,
  'price' : '200 $',
  'desc' : "the world's leading cosmetics brand, making the best of luxury beauty available and accessible to everyone"}
  ,{
    'image' : "/slider/makeup/29efce4d69d48f87d127d03b628d1625.jfif" ,
    'name' : 'Maybelline' ,
    'price' : '180 $',
    'desc' : 'Maybelline New York is the number one global cosmetics brand and is available in over 129 countries worldwide'
  },
  {
    'image' : "/slider/makeup/images.jfif",
    'name' : 'CHANEL' ,
    'price' : '114 $',
    'desc' : 'French luxury fashion house that was founded by couturière Coco Chanel in 1910'
  },
  {
    'image' : "/slider/makeup/make-up-must-haves-face-1024x804.png",
    'name' : 'Armani Beauty' ,
    'price' : '188 $',
    'desc' : 'THE PHILOSOPHY OF ARMANI MAKEUP. Simple elegance and natural grace.'
  },
  {
  'image' : "/slider/makeup/2022-index-makeup-essentials-1645556621.jpg" ,
  'name' : 'Dior' ,
  'price' : '171 $',
  'desc' : 'French luxury fashion house controlled and chaired by French businessman Bernard Arnault'
},
{
  'image' : "/slider/makeup/26ffdaef-5c61-48d4-abfc-a70ad614bd5b.3cb6a84ec26d43459a9554d9d4c8ae31.webp" ,
'name' : "L'Oreal" ,
'price' : '200 $',
'desc' : "the world's leading cosmetics brand, making the best of luxury beauty available and accessible to everyone"}
,
{
  'image' : "/slider/makeup/images.jfif",
  'name' : 'CHANEL' ,
  'price' : '114 $',
  'desc' : 'French luxury fashion house that was founded by couturière Coco Chanel in 1910'
},
{
  'image' : "/slider/makeup/make-up-must-haves-face-1024x804.png",
  'name' : 'Armani Beauty' ,
  'price' : '188 $',
  'desc' : 'THE PHILOSOPHY OF ARMANI MAKEUP. Simple elegance and natural grace.'
}
];
  var labs =[
  {
    'image' : "/slider/laptops/hp-probook-450-g8-i7-1165g7-8gb-ssd-512g-nvme-intel-iris-xe-graphics-fpr-156-fhd-dos-silver.webp" ,
    'name' : 'hp probook' ,
    'price' : '11,000 EGP',
    'desc' : 'HP ProBook 430 is a Windows 10 Professional laptop with a 13.30-inch display that has a resolution of 1366x768 pixels'
  },
  {
    'image' : "/slider/laptops/images.jfif" ,
    'name' : 'DELL Vostro' ,
    'price' : '12,800 EGP',
    'desc' : 'Dell Vostro is a line of business-oriented laptop and desktop computers manufactured by Dell aimed at small to medium range businesses.'
  },
  {
    'image' : "/slider/laptops/lenovo-laptops-ideapad-1i-14-series-front-thumbnail.webp" ,
    'name' : 'lenovo' ,
    'price' : '22,299 EGP',
    'desc' : "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices."
  },
  {
    'image' : "/slider/laptops/matebook-d-16-list.png" ,
    'name' : 'matebook' ,
    'price' : '14,555 EGP',
    'desc' : 'HUAWEI MateBook X provides you with superior portability and top-level performance all in a premium, sleek design'
  },
  {
    'image' : "/slider/laptops/hp-probook-450-g8-i7-1165g7-8gb-ssd-512g-nvme-intel-iris-xe-graphics-fpr-156-fhd-dos-silver.webp" ,
    'name' : 'hp probook' ,
    'price' : '11,000 EGP',
    'desc' : 'HP ProBook 430 is a Windows 10 Professional laptop with a 13.30-inch display that has a resolution of 1366x768 pixels'
  },
  
  {
    'image' : "/slider/laptops/lenovo-laptops-ideapad-1i-14-series-front-thumbnail.webp" ,
    'name' : 'lenovo' ,
    'price' : '22,299 EGP',
    'desc' : "Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices."
  },
  {
    'image' : "/slider/laptops/matebook-d-16-list.png" ,
    'name' : 'matebook' ,
    'price' : '14,555 EGP',
    'desc' : 'HUAWEI MateBook X provides you with superior portability and top-level performance all in a premium, sleek design'
  },
  {
    'image' : "/slider/laptops/matebook-d-16-list.png" ,
    'name' : 'matebook' ,
    'price' : '14,555 EGP',
    'desc' : 'HUAWEI MateBook X provides you with superior portability and top-level performance all in a premium, sleek design'
  },
  {
    'image' : "/slider/laptops/hp-probook-450-g8-i7-1165g7-8gb-ssd-512g-nvme-intel-iris-xe-graphics-fpr-156-fhd-dos-silver.webp" ,
    'name' : 'hp probook' ,
    'price' : '11,000 EGP',
    'desc' : 'HP ProBook 430 is a Windows 10 Professional laptop with a 13.30-inch display that has a resolution of 1366x768 pixels'
  },];
  var cars = [{
    'image' : "/slider/cars/1_2021_bugatti_chiron_super_sport.jpg" ,
    'name' : 'Bugatti' ,
    'price' : '3,000,000 $',
    'desc' : 'Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.'
  },
  {
    'image' : "/slider/cars/d7afc86b-6ee3-332c-a23e-6df31812282b.png" ,
  'name' : 'Black Jaguar' ,
  'price' : '45,300 $',
  'desc' : 'Jaguars are heavier than leopards and their legs and tail are shorter.'}
  ,
  
  {
    'image' : "/slider/cars/images.jfif",
    'name' : 'Mercedes' ,
    'price' : '57,450 $',
    'desc' : 'Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz'
  },
  {
    'image' : "/slider/cars/verge-writer-tells-car-companies-to-shut-up-about-evs-and-just-get-to-work-making-them-177140_1.jpg",
    'name' : 'Red Jaguar' ,
    'price' : '44,900 $',
    'desc' : 'Jaguars also have stockier bodies, shorter limbs, and larger paws than leopards.'
  },
  {
    'image' : "/slider/cars/1_2021_bugatti_chiron_super_sport.jpg" ,
    'name' : 'Bugatti' ,
    'price' : '3,000,000 $',
    'desc' : 'Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.'
  },
  {
    'image' : "/slider/cars/d7afc86b-6ee3-332c-a23e-6df31812282b.png" ,
  'name' : 'Black Jaguar' ,
  'price' : '45,300 $',
  'desc' : 'Jaguars are heavier than leopards and their legs and tail are shorter.'}
  ,{
    'image' : "/slider/cars/download.jfif",
    'name' : 'Ferrari' ,
    'price' : '214,533 $',
    'desc' : 'Ferraris are what dreams are made of. Fast, and highly exclusive'
  },
  
  {
    'image' : "/slider/cars/images.jfif",
    'name' : 'Mercedes' ,
    'price' : '57,450 $',
    'desc' : 'Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz'
  },
  {
    'image' : "/slider/cars/verge-writer-tells-car-companies-to-shut-up-about-evs-and-just-get-to-work-making-them-177140_1.jpg",
    'name' : 'Red Jaguar' ,
    'price' : '44,900 $',
    'desc' : 'Jaguars also have stockier bodies, shorter limbs, and larger paws than leopards.'
  }

]




  // an array for changing the content of categories
  // var arr =[];



  buildingCard()





  

  var categories=document.querySelectorAll('a.category') ;
  var getCategory;
  
  // for loop for each category


  var x = 0
  for(var category of categories){
    
  // function for selecting each category
    category.addEventListener('click' , function(e){
      
      // var p = document.querySelector('.cards p#text')
      // p.style.display='none';
         
         var target = e.target.getAttribute('id');
        
         var cards = document.getElementsByClassName('card');
        if(target == 'carCategory'){
            arr = cars;
          }
          else if(target == 'phoneCategory'){
            arr = phones;
          }
          else if(target == 'makeupCategory'){
            arr= makeUp;
          }
          else if(target == 'lapTopCategory'){
            arr= labs;
          }
          for(var card of cards){
            card.style.display='none'
           }
          document.querySelector('#'+target).style.display = 'block'

          console.log(arr)
          buildingCard()
  })}

            // function constractor for each product
  function Product(image , name , price , desc){
    this.image = image;
    this.name = name;
    this.price = price;
    this.desc = desc;
  }
  // for loop for declaring each element of the product

  function buildingCard(){
    for(var item of arr){
  var product = new Product(item.image , item.name , item.price , item.desc)
  
  var span=document.querySelector('span')
  
  // creating new elements for creating a card for each product
  var cards = document.getElementById('cards');
  var div = document.createElement('div')
  var img = document.createElement('img');
  var h1Element = document.createElement('h1');
  var priceElement = document.createElement('p');
  var descElement = document.createElement('p');
  var buttonElement = document.createElement('button');
  
  // creating text node for each value
  var h1 = document.createTextNode(product.name);
  var price = document.createTextNode(product.price);
  var desc = document.createTextNode(product.desc);
  var button = document.createTextNode('Add to cart')
  
//  putting the elements in the card
  cards.appendChild(div);
  div.setAttribute('class','card');
  div.appendChild(img);
  div.appendChild(h1Element);
  div.appendChild(priceElement);
  div.appendChild(descElement);
  div.appendChild(buttonElement);
  
 // giving value for each element
  img.setAttribute('src' , product.image);
  h1Element.appendChild(h1);
  priceElement.appendChild(price);
  descElement.appendChild(desc);
  buttonElement.appendChild(button)
  buttonElement.addEventListener('click',function (){
    // span.contentWindow.location.reload(true);
  })
  



  // Function for the counter of the cart
 
  buttonElement.addEventListener('click' , function(event){
    
    if(getCookie('x')==0 || x == 0){
      x = x+1;
      console.log(x);
    }else{
      x = parseInt(getCookie('x'))+1
      console.log(x)
      console.log(getCookie('x'))
    }
  
  
    // decleration for the value of the elements using cookies
  var imgCookie=event.target.parentElement.querySelector('img').getAttribute('src');
  var h1Cookie=event.target.parentElement.querySelector('h1').innerText;
  var p1Cookie=event.target.parentElement.querySelectorAll('p')[0].innerText;
  var p2Cookie=event.target.parentElement.querySelectorAll('p')[1].innerText;
  
  
  
  // Setting the elements in the cookies
    setCookie("img"+x, imgCookie, "Sat, 20 Oct 2029 12:00:00 UTC");
    setCookie("h1"+x, h1Cookie, "Sat, 20 Oct 2029 12:00:00 UTC");
    setCookie("p1"+x, p1Cookie, "Sat, 20 Oct 2029 12:00:00 UTC");
    setCookie("p2"+x, p2Cookie, "Sat, 20 Oct 2029 12:00:00 UTC");
    setCookie('x', x , "Sat, 20 Oct 2029 12:00:00 UTC")
    if(getCookie('x')==0){
      //displaying the products
      span.style.display = 'none';
    }
    else{
      // displaying alternative text
      span.style.display = 'block';
      span.innerText = getCookie('x')
    }
  
  })
}


}












// for displaying the counter on the cart icon
  var span=document.querySelector('.wrapper span')


  if(getCookie('x')==0){
    //displaying the products
    span.style.display = 'none';
  }
  else{
    // displaying alternative text
    span.style.display = 'block';
    span.innerText = getCookie('x')
  }


  // -----------------Functions for controling the cookies

// Function for setting the cookies
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + expiryDate;
}

// function for getting the cookie by its name
function getCookie(cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function for deleting all the cookies
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  x=0;
  setCookie('x', 0 , "Sat, 20 Sept 2022 12:00:00 UTC");
  console.log(x);

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
      if(getCookie('x')==0){
      // displaying the products
      span.style.display = 'none';
    }
}
