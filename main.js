function kangaroo(x1, v1, x2, v2) {
    if(x2 > x1 && v2 < v1 ){
        return (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
        
    }else if(x1 > x2 && v1 < v2){
        return (x1 - x2) % (v2 - v1) ===0 ? "YES" : "NO";
        
    }else{
        return "NO";   
    }
}
