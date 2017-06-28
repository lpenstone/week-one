var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(companySalesData, salesTaxRates){
var tax = [];
var companyTaxData = {};
  for (var i = 0; i < companySalesData.length; i++){
    var company = companySalesData[i].name;
    var province = companySalesData[i].province;
    var sales = (companySalesData[i].sales);
    for (var j = 0; j < sales.length; j++){
      if (!companyTaxData[company]){
        companyTaxData[company] = {
        totalSales : sales[j],
        totalTax : salesTaxRates[province] * sales[j]
        };
      }
      else {
        companyTaxData[company].totalSales += sales [j];
        companyTaxData[company].totalTax += salesTaxRates[province] * sales[j];
      }
    }
  }
  return companyTaxData;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/