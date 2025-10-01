/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
  //all opening parenthesis/brackets will be added to the stack 
    let stack = [];

  //looping through all characters found in s -> function(s)
    for(let i = 0; i < s.length; i++){
        let symbol = s[i];

      //if characters is opening parenthesis/brackets push it to stack 
        if(symbol ==='(' || symbol ==='{' || symbol ==='['){
            stack.push(symbol);

          //this runs when we encounter a closing parenthesis 
        } else {
          //if the stack is empty it will return invalid since there's no opening parenthesis/brackets to match the closing one 
            if (stack.length === 0) return false;

          //stack -> last in first out 
          //obtaining most recent character that was put into stack 
            let previousSymbol = stack.pop();

          //checking to see if the parenthesis/bracket will match else it will be invalid 
            if (previousSymbol === '(' && symbol!== ')')
                return false; 
            if (previousSymbol === '[' && symbol!== ']')
                return false; 
            if (previousSymbol === '{' && symbol!== '}')
                return false; 
        }

    }
// final check after all characters have been processed to see if there's any opened parenthesis/brackets that were left unmatched 
    return stack.length === 0;
};
