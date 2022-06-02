function wyszli(ocena) {        
    switch(ocena){
        case '0':
            return 'zero'
        case '1':
            return 'jeden'
        case '2':
            return 'dwa'
        case '3':
            return 'trzy'
        case '4':
            return 'cztery'
        case '5':
            return 'piec'
        case '6':
            return 'szesc'
        case '7':
            return 'siedem'
        case '8':
            return 'osiem'
        case '9':
            return 'dziewiec'
        default: return ''
    }
}
function kolejna(ocena){
    let nap =''
    if(ocena[0]=='-')
    nap = 'minus '
    for(let i=0;i<ocena.length; i++){
        nap = nap + wyszli(ocena[i]) + ' '
    }
    return nap
}