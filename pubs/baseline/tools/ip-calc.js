function IPCalc(form) {
  var ok = 0;
  var profit = form.profit.value;
  var returnrate = form.returnrate.value;
  var equity = form.equity.value;
  var sga = form.sga.value;



  if (returnrate != "" && equity != "")   
    { form.investment.value = ( equity * returnrate / 100 );  } 

   investment = form.investment.value;

  if (profit != "" && investment != "")   
    { form.iva.value = ( profit - investment );  } 

   iva = form.iva.value;

  if ( iva != "" && sga != "")   
    { form.productivity.value = ( iva / sga );  } 


}



