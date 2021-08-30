let index = 0
let length = 0
let numb1 = 0, numb2 = 1, nextTerm;

const fibonacci = (a, b) => {
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    if (length < 1000) {
        index++
        // fibanocide her 5 reqemden bir reqemin uzunlugu deyishr 1 reqemli 2 reqemli 3 reqemli ve s
        // buna uygun olcunu tapb 1000 e cen getmek olar
        // 1000 e catanacan funksiyani cagrb recursiv formada hell ede bilerik
        if (index % 5) {
            length++
        }
        fibonacci(a, b)
    } else {
        console.log(index + ' index')
        console.log(length + ' length')
        console.log(b + ' number')
    }
}

fibonacci(numb1, numb2)