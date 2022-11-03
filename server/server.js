const {faker} = require("@faker-js/faker");

const express = require("express");
const app = express();
const port = 8000;

const createUser=()=>{
    const newFakeUser={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName: faker.name.firstName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    };
    return newFakeUser;
};

const createCompany=()=>{
    const newFakeCompany={
        add_id: faker.datatype.uuid(),
        comp_name: faker.company.name(),
        address:{
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};

const user=createUser();
const company=createCompany();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//New User
app.get('/api/users/new', (req,res)=>{
    res.json({User: user})
})

//New Company
app.get('/api/company/new', (req,res)=>{
    res.json({Company: company})
})

//New User & Company
app.get('/api/user/company', (req,res)=>{
    res.json({User: user, Company: company})
})


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Welcome to the Death Star: ${port}`) );