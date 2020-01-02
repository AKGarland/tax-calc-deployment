const { TaxCalculator } = require('../tax-calculator');
const { FuelType } = require('../fuel-type');

/**
* @deprecated
*/
let DummyTaxCalculator = class DummyTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    if ((super.getYear() - vehicle.dateOfFirstRegistration.getFullYear()) === 0) {
      if (vehicle.fuelType === FuelType.ALTERNATIVE_FUEL) {
        if (vehicle.co2Emissions > 256) return 2060;
        if (vehicle.co2Emissions > 255) return 2060;
        if (vehicle.co2Emissions > 225) return 1750;
        if (vehicle.co2Emissions > 190) return 1230;
        if (vehicle.co2Emissions > 170) return 820;
        if (vehicle.co2Emissions > 150) return 505;
        if (vehicle.co2Emissions > 130) return 195;
        if (vehicle.co2Emissions > 110) return 155;
        if (vehicle.co2Emissions > 100) return 135;
        if (vehicle.co2Emissions > 90) return 115;
        if (vehicle.co2Emissions > 75) return 95;
        if (vehicle.co2Emissions > 50) return 15;
        return 0;
      }

      if (vehicle.fuelType === FuelType.ELECTRIC) {
        return 0;
      }

      if (vehicle.fuelType === FuelType.PETROL) {
        if (vehicle.co2Emissions > 255) return 2070;
        if (vehicle.co2Emissions > 225) return 1760;
        if (vehicle.co2Emissions > 190) return 1240;
        if (vehicle.co2Emissions > 170) return 830;
        if (vehicle.co2Emissions > 150) return 515;
        if (vehicle.co2Emissions > 130) return 205;
        if (vehicle.co2Emissions > 110) return 165;
        if (vehicle.co2Emissions > 100) return 145;
        if (vehicle.co2Emissions > 90) return 125;
        if (vehicle.co2Emissions > 75) return 105;
        if (vehicle.co2Emissions > 50) return 25;
        if (vehicle.co2Emissions > 0) return 10;
        return 0;
      }

      if (vehicle.fuelType === FuelType.DIESEL) {
        if (vehicle.co2Emissions > 225) return 2070;
        if (vehicle.co2Emissions > 190) return 1760;
        if (vehicle.co2Emissions > 170) return 1240;
        if (vehicle.co2Emissions > 150) return 830;
        if (vehicle.co2Emissions > 130) return 515;
        if (vehicle.co2Emissions > 110) return 205;
        if (vehicle.co2Emissions > 100) return 165;
        if (vehicle.co2Emissions > 90) return 145;
        if (vehicle.co2Emissions > 75) return 125;
        if (vehicle.co2Emissions > 50) return 105;
        if (vehicle.co2Emissions > 0) return 25;
        return 0;
      }
    } else {
      if (vehicle.listPrice < 40000) {
        if (vehicle.fuelType === FuelType.PETROL) return 140;
        if (vehicle.fuelType === FuelType.ELECTRIC) return 0;
        if (vehicle.fuelType === FuelType.ALTERNATIVE_FUEL) return 130;
      } else {
        if (vehicle.fuelType === FuelType.PETROL) return 450;
        if (vehicle.fuelType === FuelType.ELECTRIC) return 310;
        if (vehicle.fuelType === FuelType.ALTERNATIVE_FUEL) return 440;
      }
    }

    return -1;
  }
}

module.exports = {
  DummyTaxCalculator: DummyTaxCalculator
}