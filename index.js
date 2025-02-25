const clist = ['nava6x', 'roseanne', 'dua', 'holand'];

const Contact = 'roseanne';

function CLIST(arr, cnt) {
    if(clist.includes(cnt)) {
        const position = clist.indexOf(cnt);
        if( position === 0) return false;
        else {
            arr.splice(0, 0, arr.splice(position, 1)[0])
            return arr;
        };
    }
    else {
        return 'new contact';
    }
}

console.log(CLIST(clist, Contact))