/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.anh');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.anh');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

