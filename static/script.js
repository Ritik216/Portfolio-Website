document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener('click',()=>{
    let a = document.querySelector('.sidebar').classList.toggle('sidebarGo');
    console.log(a)
    if(a==true){
        document.querySelector('.cross').style.display='none';
        document.querySelector('.ham').style.display='inline';
    }
    else{
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
            
        }, 400);
        document.querySelector('.ham').style.display='none';
    }
    // if(document.querySelector('.sidebar').classList.toggle('sidebarGo')){
    //     document.querySelector('.cross').style.display = 'none';
    //     document.querySelector('.ham').style.display = 'inline';
    // }
    // else{
    //     document.querySelector('.ham').style.display = 'none';
    //     document.querySelector('.cross').style.display = 'inline';
    // }
})