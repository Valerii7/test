var tabs = document.getElementsByClassName('tab');

var productns__items = document.getElementsByClassName('productns__content-item');

for(var i =0; i<tabs.length; i++){
   tabs[i].onclick = tabclick
}

function tabclick(event){
  var tab = event.target;
  var tabId = tab.dataset.id;

  for(var i =0; i<tabs.length; i++){
    tabs[i].classList.remove('active');
    tabs[tabId-1].classList.add('active');

    productns__items[i].classList.remove('active');
    productns__items[tabId-1].classList.add('active'); 

  }
}