//Basic solution 
function Fedex(){
    this.calculate = package =>{
        return 2.14 ;
    }
}
function UPS(){
    this.calculate = package =>{
        return 3.14;
    }
}
function USPS(){
    this.calculate = package =>{
        return 4.5 ;
    }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = {from:"chiplun",to:"mumbai",weight:1.50,distance:100,company:"UPS"}
// console.log(package.company + ":"+ fedex.calculate(package))
// fedex.calculate(package);
// ups.calculate(package);
// usps.calculate(package);


// using by Stratergy pattern

function Shipping(){
    this.company = "";
    this.setStratergy = (company) =>{
        this.company = company; 
    }
    this.calculate =  package =>{
        return this.company.calculate(package) ;
    };
}

const shipping = new Shipping();
shipping.setStratergy(fedex)
console.log(package.company + ":"+ shipping.calculate(package))
 
// shipping.setStratergy(ups)
// console.log(package.company + ":"+ shipping.calculate(package))

// shipping.setStratergy(usps)
// console.log(package.company + ":"+ shipping.calculate(package))