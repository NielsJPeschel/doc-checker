// import rules from './rules';
import cats from '../Data/categories.json';



sampleData = {
    "sales":
    [
        {"Segment":"Government","Country":"Canada","Product":"Carretera","Units Sold":"1618.5","Sale Price":" $20.00 ","Gross Sales":" $32,370.00 "},
        {"Segment":"Government","Country":"Germany","Product":"Carretera","Units Sold":"1321","Sale Price":" $20.00 ","Gross Sales":" $26,420.00 "},
        {"Segment":"Midmarket","Country":"France","Product":"Carretera","Units Sold":"2178","Sale Price":" $15.00 ","Gross Sales":" $32,670.00 "},
        {"Segment":"Midmarket","Country":"Germany","Product":"Carretera","Units Sold":"888","Sale Price":" $15.00 ","Gross Sales":" $13,320.00 "},
        {"Segment":"Midmarket","Country":"Mexico","Product":"Carretera","Units Sold":"2470","Sale Price":" $15.00 ","Gross Sales":" $37,050.00 "},
        {"Segment":"Government","Country":"Germany","Product":"Carretera","Units Sold":"1513","Sale Price":" $350.00 ","Gross Sales":" $529,550.00 "},
        {"Segment":"Midmarket","Country":"Germany","Product":"Montana","Units Sold":"921","Sale Price":" $15.00 ","Gross Sales":" $13,815.00 "},
        {"Segment":"Channel Partners","Country":"Canada","Product":"Montana","Units Sold":"2518","Sale Price":" $12.00 ","Gross Sales":" $30,216.00 "},
        {"Segment":"Government","Country":"France","Product":"Montana","Units Sold":"1899","Sale Price":" $20.00 ","Gross Sales":" $37,980.00 "},
        {"Segment":"Channel Partners","Country":"Germany","Product":"Montana","Units Sold":"1545","Sale Price":" $12.00 ","Gross Sales":" $18,540.00 "},
        {"Segment":"Midmarket","Country":"Mexico","Product":"Montana","Units Sold":"2470","Sale Price":" $15.00 ","Gross Sales":" $37,050.00 "}
    ]
}



const checkData = (data, format) => {
    const checkSheets = () => {
        let sheetErrors = []
        let dataNumSheets = data.keys().length;
        let formatNumSheets = format.sheets.length;
        if (dataNumSheets != formatNumSheets) {
            sheetErrors.push({
                msg: "You do not have the correct number of sheets.",
                corrVal: null
            });
        } 
        else {
            for (var i; i < dataNumSheets; i++) {
                if (data.keys()[i] !== format.sheets[i].sheetName) {
                    sheetErrors.push({
                        msg: "Incorrect sheet name",
                        corrVal: format.sheets[i].sheetName
                    });
                }
            }
        }

        return sheetErrors;
    }
    let resp = {
        sheetError: checkSheets,
        colError: [],
        contentError: []
    };

    console.log(resp);
}


checkData(sampleData, cats);