const checkBraceMatch =(str) => {
    let stack = [];
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    for(var i of str) {
        if(i == '(' || i== '{' || i=='[') {
            stack.push(i);
        } else {
            var last = stack.pop();
            if (i != map[last]) {
                return false;
            }
        }
    }
    if(stack.length) {
        return false;
    } else { return true; }
}


console.log(checkBraceMatch('{}}'));