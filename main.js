let h1=document.getElementById('heading')
h1.style.color='red';
h1.innerHTML=h1.innerHTML.toUpperCase();
let p =document.querySelectorAll('p');
//let p= body.childNodes('body')
p[0].style.color='blue'
p[0].style.fontSize='20px';
p[1].style.color='blue'
p[1].style.fontSize='20px';
p[2].style.color='blue'
p[2].style.fontSize='20px';
const a1 = document.createElement("a");
a1.href="https://techmaster.vn/khoa-hoc"
p[2].insertAdjacentHTML('afterend', a1);

let title1= document.getElementsByTagName('title') ;
title1[0].innerHTML="Đây là thẻ tiêu đề";

let btn= document.createElement("button");
btn.innerText ="Click me";
p[2].parentNode.replaceChild(btn, p[2]);

const paraCopy = p[1].cloneNode(true);
paraCopy.innerText = "Thẻ para-2 copy";
p[1].insertAdjacentElement("afterend", paraCopy)

p[0].parentNode.removeChild(p[0]);