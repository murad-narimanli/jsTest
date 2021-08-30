const isApiAddress = (combination) => {
    // verilen combinasiyani '.' lerden bolerek arraya cevririk
    // example '0.1.1.4' => ['0','1','1','4']
    let m = combination.split(["."]);
    for (const s of m) {
        let i = parseInt(s);
        // reqem sayi 3den boyuk 0dan kicik ve ya 255 den boyuk olmamalidir
        if (s.length > 3 || i < 0 || i > 255) {
            return false;
        }
        // reqemde 2 ve ya 3 eded 0 olmamalidir 00 kimi
        if (s.length > 1 && i == 0) {
            return false;
        }
        // reqemin uzunlugu 1den boyuk olb 0 lar olmamalidir meselen 001 kimi
        if (s.length > 1 && i != 0 && s.charAt(0) == '0') {
            return false;
        }
    }
    return true;
}


const apiCreator = (s) => {
    let arr = [];
    let size = s.length;     // reqemin element sayi
    let numb = s;     // elave etdiymiz string reqem
    // mumkun ola bilecek '.' - li combinasiyalar
    for (let a = 1; a < size - 2; a++) {
        for (let b = a + 1; b < size - 1; b++) {
            for (let c = b + 1; c < size; c++) {
                numb = numb.substring(0, c) + "." + numb.substring(c);
                numb = numb.substring(0, b) + "." + numb.substring(b);
                numb = numb.substring(0, a) + "." + numb.substring(a);
                // alinan combinasiyalarin API strukturna uygunlugunun yoxlanilmasi
                if (isApiAddress(numb)) {
                    // hershey okaydirse lazimi apini arraya yigiriq
                    arr.push(numb);
                }
                numb = s;
            }
        }
    }
    ////////////////////////////////
    return arr;
}


console.log(apiCreator('25525511135'))