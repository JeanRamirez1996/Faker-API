const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;

class Usuario {
    constructor() {
      this.carne_de_identidad = faker.finance.mask(10, false, false) ;
      this.primer_nombre = faker.name.firstName();
      this.apellido = faker.name.lastName();
      this.numero_de_telefono = faker.phone.phoneNumberFormat();
      this.email = faker.internet.email();
      this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
      this.carne_de_identidad = faker.finance.mask(10, false, false);
      this.nombre = faker.company.companyName();
      this.direccion =  [
                         faker.address.streetName(),
                         faker.address.cityName(), 
                         faker.address.state(), 
                         faker.address.zipCode(), 
                         faker.address.county()
      ];
    }
}

app.get("/api/users/new", (req, res) => {
    res.send( new Usuario() );
});

app.get("/api/companies/new", (req, res) => {
  res.send( new Empresa() );
});

app.get("/api/company", (req, res) => {
  res.send ([new Usuario(), new Empresa()] );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );