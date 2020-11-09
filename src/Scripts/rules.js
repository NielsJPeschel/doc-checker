
const rules = {
    alphaNum: str => {
        console.log(str)
        if(str.match(/^[0-9a-z]+$/)){
            return true;
        }
        return false;
    }
}

export default rules;
