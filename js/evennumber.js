function even(){
    const num=parseInt(document.getElementById("number").value);
    let n1=0,n2=1,nextterm;

    for(let i=0;i<=num;i++){
    if(i%2==0)
    document.getElementById("message").innerText+=" "+i+" ";
   

    }
}