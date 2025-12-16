var ps
I=_=>{
    var s=new URLSearchParams(location.search)
    b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
    um.href="../?"+b.className
    fetch("../table.tsv").then(d=>d.text()).then(d=>{
	ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).split(/\r?\n/g).slice(1,-1).map(r=>r.split("\t"))
	    .filter(x=>!/•/.test(x[0]));
	Q1();Q2();Q3()
    })}
R=x=>x[Math.floor(Math.random()*x.length)]
L=x=>x.length<=2 ? x.join(" and ") : x.map((s,i)=>i<x.length-1?s:"and "+s).join(", ")
Q1=_=>{
    c1=R(ps);
    // console.log(c1);
    q1.innerHTML=`Write an expression that solves the following ${["easy","medium-difficulty","hard"][(x=>Math.floor(3*x.indexOf(c1)/x.length))(ps.filter(x=>x[2]===c1[2]))]} ${c1[3].toLowerCase()} task:<p>${c1[1]}</p>`
}
Q2=_=>{
    c2=R(ps);
    q2.innerHTML=`What does the following expression compute?<p><code>${c2[0]}</code></p>`
}
Q3=_=>{
    r=/[^\[\]\{\}\(\)\w¯\d&;⋄' ]/g
    do{c3=R(ps)}while(!r.test(c3[0]));
    n=Math.floor(Math.random()*c3[0].match(r).length)
    i=0;c3d=c3[0].replace(/&lt;|&gt;/g,x=>({'&lt;':'<','&gt;':'>'}[x])).replace(r,x=>i++==n?"@@":x).replace(/<|>/g,x=>({'<':'&lt;','>':'&gt;'}[x])).replace('@@','<del> </del>')
    i=0;c3i=c3[0].replace(/&lt;|&gt;/g,x=>({'&lt;':'<','&gt;':'>'}[x])).replace(r,x=>i++==n?"@←@"+x+"@→@":x).replace(/<|>/g,x=>({'<':'&lt;','>':'&gt;'}[x])).replace('@←@','<ins>').replace('@→@','</ins>')
    q3.innerHTML=`What is the obscured symbol in the following expression:<p><code id='p3'>${c3d}</code></p>which solves the ${c2[3].toLowerCase()} task: <p>${c3[1]}</p>`
}
W=x=>{b.className=x?x:"wbg"[1+"wb".indexOf(b.className[0])];um.href="../?"+b.className}
