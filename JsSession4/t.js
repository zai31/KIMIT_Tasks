//T1
for (var i=65; i<=122; i++){
    if(i>=91 && i<=96){
        continue;
    }
    console.log(String.fromCharCode(i));
}

// param? optional parameter

//T2

var str="JS is a good language"

str.includes("bad")?console.log("Has bad"):console.log("No bad");
if(!str.match(/bad/gi)){
    console.log("No bad");
}else{
    console.log("Has bad");
    
};


var t="aa$bb$cc"
console.log(t.split("$").join(" "));