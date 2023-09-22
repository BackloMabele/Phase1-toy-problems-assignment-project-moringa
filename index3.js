/*this function uses multiple variables including the gross income, deductions and reliefs to
calculate the net income of employees in Kenya*/
function calculateNetIncome(grossIncome, insuranceRelief = 0, allowablePensionFundContribution = 0, disabilityExcemption = 0) {
    let personalRelief = 2400;
    let nssf = 0.06 * grossIncome;
    let housingLevy = 0.015 * grossIncome;
    let totalNhifDeduction = calculateNhifDeduction(grossIncome);
    let actualInsuranceRelief = calculateInsuranceRelief (insuranceRelief);
    let pensionFundContribution = calculateAllowablePensionFundContribution(allowablePensionFundContribution);
    let actualDisabilityExcemption = calculateDisabilityExcemption(disabilityExcemption)
    let actualNssfContribution = calculateActualNssf(nssf)
    //calculation of taxable income less reliefs
    let taxableIncome = grossIncome - personalRelief -actualNssfContribution - pensionFundContribution - actualInsuranceRelief - actualDisabilityExcemption;
    //calculation of total PAYE based on taxable income
    let totalPaye = calculatePaye(taxableIncome);
    //calculation of net income less deductions    
    let netIncome = grossIncome - actualNssfContribution - totalNhifDeduction - totalPaye - housingLevy;
  //function to calculate NHIF deductions based on income brackets
    function calculateNhifDeduction(grossIncome) {
      if(grossIncome > 0 && grossIncome < 6000) {return 150;}
      else if(grossIncome >= 6000 && grossIncome < 8000) {return 300;}
      else if(grossIncome >= 8000 && grossIncome < 12000) {return 400;}
      else if(grossIncome >= 12000 && grossIncome < 15000) {return 500;}
      else if(grossIncome >= 15000 && grossIncome < 20000) {return 600;}
      else if(grossIncome >= 20000 && grossIncome < 25000) {return 750;}
      else if(grossIncome >= 25000 && grossIncome < 30000) {return 850;}
      else if(grossIncome >= 30000 && grossIncome < 35000) {return 900;}
      else if(grossIncome >= 35000 && grossIncome < 40000) {return 950;}
      else if(grossIncome >= 40000 && grossIncome < 45000) {return 1000;}
      else if(grossIncome >= 45000 && grossIncome < 50000) {return 1100;}
      else if(grossIncome >= 50000 && grossIncome < 60000) {return 1200;}
      else if(grossIncome >= 60000 && grossIncome < 70000) {return 1300;}
      else if(grossIncome >= 70000 && grossIncome < 80000) {return 1400;}
      else if(grossIncome >= 80000 && grossIncome < 90000) {return 1500;}
      else if(grossIncome >= 90000 && grossIncome < 100000) {return 1600;}
      else if(grossIncome >= 100000) {return 1700;}
      else{return "invalid!";}
    }
    //function to determine PAYE based on taxable income brackets
    function calculatePaye(taxableIncome) {
      if(taxableIncome <= 24000) {
        return 0.1 * taxableIncome;
      }
      else if(taxableIncome > 24000 && taxableIncome <= 32333) {
        return 0.25 * taxableIncome;
      }
      else if(taxableIncome >= 32334 && taxableIncome <= 500000) {
        return 0.3 * taxableIncome;
      }
      else if(taxableIncome >= 500001 && taxableIncome <= 800000) {
        return 0.325 * taxableIncome;
      }
      else if(taxableIncome > 800000) {
        return 0.35 * taxableIncome;
      }
    }
    //function to ensure the maximum NSSF deduction amount is 6000 
    function calculateActualNssf(nssf) {
      if(nssf > 6000) {
        return 6000;
      }
      else {
        return nssf;
      }
    }
    //function to ensure the maximum insurance relief amount is 5000
    function calculateInsuranceRelief(insuranceRelief) {
      if (insuranceRelief > 5000) {
        return 5000;
      }
      else {
        return insuranceRelief;
      }
    }
    //function to ensure the maximum disability exemption amount is 150000
    function calculateDisabilityExcemption(disabilityExcemption) {
      if (disabilityExcemption > 150000) {
        return 150000;
      }
      else {
        return disabilityExcemption;
      }
    }
    //function to ensure the maximum allowable relief on pension is 20000
    function calculateAllowablePensionFundContribution(allowablePensionFundContribution) {
      if (allowablePensionFundContribution > 20000) {
        return 20000;
      }
      else {
        return allowablePensionFundContribution;
      }
    }
    return netIncome;
  }

