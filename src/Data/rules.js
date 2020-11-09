const rules = {
    alphaNum: function(str){
        if(str.match(/^[0-9A-Za-z]+$/)){
            return true;
        }
        return false;
    }
}

export default rules;