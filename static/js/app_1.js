// console.log(data);
// alert('hello')
// // from data.js
const tableData = data;
// 
// // get table references
var tbody = d3.select("tbody");
// console.log(tableData);
function buildTable(data){
    var tbody = d3.select("tbody");
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        })
    })
}
function updateFilters(){
    filters = {}
    let changedElement = d3.select(this)
    let elementValue = changedElement.property("value")
    let filterId = changedElement.attr("id")
    if(elementValue){
        filters[filterId] = elementValue
    }
    else {
        delete filters[filterId]
    }
    filterTable(filters);
}
function filterTable(filters) {
    let filteredData = tableData;
    console.log(filters)
    console.log(tableData);
    filteredData = tableData.filter((entry) => {
        return entry[Object.keys(filters)[0]] === filters[Object.keys(filters)[0]];
    })
    buildTable(filteredData)
}
d3.selectAll("input").on("change", updateFilters)
buildTable(tableData)