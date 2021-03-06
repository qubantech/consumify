export const getColor = (id:number, total:number) : string => {
    let r = 0.0, g = 0.0, b = 0.0;
    let h = id / total;
    let i = ~~(h * 6);
    let f = h * 6 - i;
    let q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    return "#" + ("ff" + (~ ~(r * 255)).toString(16)).slice(-2) + ("ff" + (~ ~(g * 255)).toString(16)).slice(-2) + ("ff" + (~ ~(b * 255)).toString(16)).slice(-2);
}