const con2 = document.querySelector('.container2')
     const data = [
        {left:'5rem',top:'5rem',size:'5',img:'./java.png'},
        {left:'35rem',top:'10rem',size:'3',img:'./python.png'},
        {left:'15rem',top:'30rem',size:'4',img:'./reactjs.png'},
        {left:'80rem',top:'18rem',size:'4',img:'./nodejs.png'},
        {left:'48rem',top:'20rem',size:'6',img:'./html.png'},
        {left:'65rem',top:'9rem',size:'3',img:'./redux.png'},
        {left:'43rem',top:'3rem',size:'3',img:'./css.png'},
     ]
     const data2 = [
        {left:'40rem',top:'15rem',size:'6'},
        {left:'35rem',top:'1rem',size:'3'},
        {left:'15rem',top:'20rem',size:'3.5'},
        {left:'70rem',top:'30rem',size:'4'},
        {left:'38rem',top:'19rem',size:'3'},
        {left:'55rem',top:'4rem',size:'3'},
        {left:'33rem',top:'30rem',size:'5'},
     ]
     const data3 = [
        {left:'5rem',top:'25rem',size:'4'},
        {left:'30rem',top:'15rem',size:'3'},
        {left:'15rem',top:'5rem',size:'6'},
        {left:'75rem',top:'10rem',size:'4'},
     ]

let prevX,prevY,box;

   function blockies(datas,num){
    for(let j=0;j<datas.length;j++){
    box1 = document.createElement('div');
    box1.classList.add(`block${num}`)
    box1.style.height=`${datas[j].size}rem`
    box1.style.width=`${datas[j].size}rem`
    box1.style.top=datas[j].top
    box1.style.left=datas[j].left
    if(datas[j].img != undefined){
        let imgEle = document.createElement("img")
        imgEle.classList.add('icon')
        imgEle.src = datas[j].img
        imgEle.style.height = `${datas[j].size/2}rem`
        imgEle.style.width = `${datas[j].size/2}rem`
        box1.appendChild(imgEle)
    }
    con2.appendChild(box1)
   }
   }
   blockies(data,1)
   blockies(data2,2)
   blockies(data3,3)

let boxes1 = document.querySelectorAll('.block1');
let boxes2 = document.querySelectorAll('.block2');
let boxes3 = document.querySelectorAll('.block3')

function main(boxes,time){
    function updatePositions(box) {
    boxes.forEach((box) => {
        box.style.transition = `transform ${time}s ease-out`;
        box.style.transform = `translate(${(prevX/5)}px, ${(prevY/5)}px)`;
    });
}

document.addEventListener('mousemove', (e) => {
    let currentX = e.clientX;
    let currentY = e.clientY;

    if (prevX !== undefined && prevY !== undefined) {
        prevX = currentX;
        prevY = currentY;
        requestAnimationFrame(updatePositions); 
    } else {
        prevX = currentX;
        prevY = currentY;
    }
});
}
main(boxes1,0.3)
main(boxes2,0.5)
main(boxes3,0.4)
