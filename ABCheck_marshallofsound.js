function ABCheck(str) {
    return str.match(/a.{3}b/g)!=null || str.match(/b.{3}a/g)!=null;
}

var str = "Laura sobs";
console.log(ABCheck(str));