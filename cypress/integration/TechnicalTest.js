import * as env from './env.js';

describe('Pet API Testing', function(){

  it('Create New Pet', function(){
    cy.request({
      method : 'POST',
      url: '/pet',
      body: 
      
      {
        "id": env.petsID,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "kucing",
        "photoUrls": [
          "https://awsimages.detik.net.id/community/media/visual/2020/09/20/jenis-jenis-kucing-peliharaan-12.jpeg"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      }

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });


  it('GET Pet by Using ID', function(){
    cy.request({
      method : 'GET',
      url: `/pet/${env.petsID}`,

    }).then(function(response){
      expect(response.body.name).to.eq('kucing');
    }); 
  });   

    it('Update Pet with New ID ', function(){
      cy.request({
        method : 'PUT',
        url: `/pet`,
        body: 
        
        {
          "id": 44322,
          "category": {
            "id": 0,
            "name": "string"
          },
          "name": "kucing galak",
          "photoUrls": [
            "https://awsimages.detik.net.id/community/media/visual/2020/09/20/jenis-jenis-kucing-peliharaan-12.jpeg"
          ],
          "tags": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "status": "available"
        }
  
      }).then(function(response){
        expect(response.status).to.eq(200);
      }); 
    });  
  
    

  it('GET Pet ID after Update', function(){
    cy.request({
      method : 'GET',
      url: `/pet/${env.petsID}`,

    }).then(function(response){
      expect(response.body.name).to.eq('kucing galak');
    }); 
  });
  
  it('Get Find By Status Available', function(){
    cy.request({
      method : 'GET',
      url: '/pet/findByStatus?status=available',

    }).then(function(response){
      expect(response.status).to.eq(200);
     }); 
  });

  it('Delete Pet ID', function(){
    cy.request({
      method : 'DELETE',
      url: `/pet/${env.petsID}`,

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

  it('GET Pet ID after Delete', function(){
    cy.request({
      method : 'GET',
      url: `/pet/${env.petsID}`,
      failOnStatusCode: false

    }).then(function(response){
      expect(response.status).to.eq(404);
    }); 
  });

});

  
describe('Store API Testing', function(){
  it('Create order for pet', function(){
    cy.request({
      method : 'POST',
      url: '/store/order',
      body: 
      
      {
        "id": 432323,
        "petId": `${env.petsID}`,
        "quantity": 1,
        "shipDate": "2022-05-13T10:35:52.886Z",
        "status": "placed",
        "complete": true
      }

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

  it('Find purchase order by ID', function(){
    cy.request({
      method : 'GET',
      url: `/store/order/0`,
      failOnStatusCode: false

    }).then(function(response){
      expect(response.status).to.eq(404);
    }); 
  });

  it('Delete purchase order by ID', function(){
    cy.request({
      method : 'DELETE',
      url: `/store/order/0`,
      failOnStatusCode: false

    }).then(function(response){
      expect(response.status).to.eq(404);
    }); 
  });

  it('Returns pet inventories by status', function(){
    cy.request({
      method : 'GET',
      url: `/store/inventory`,

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

});

describe('Users API Testing', function(){
  it('Create User', function(){
    cy.request({
      method : 'POST',
      url: '/user',
      body: 
      
        {
          "id": env.userID,
          "username": env.username,
          "firstName": "deni",
          "lastName": "pra",
          "email": "deni@gmail.com",
          "password": env.password,
          "phone": "08123938338",
          "userStatus": 0
        }

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

  it('Create User with array', function(){
    cy.request({
      method : 'POST',
      url: '/user/createWithArray',
      body: [
      
        {
          "id": env.userID,
          "username": env.username,
          "firstName": "deni",
          "lastName": "pra",
          "email": "deni@gmail.com",
          "password": env.password,
          "phone": "08123938338",
          "userStatus": 0
        },

        {
          "id": env.userID2,
          "username": env.username2,
          "firstName": "deni",
          "lastName": "pra",
          "email": "deni@gmail.com",
          "password": env.password2,
          "phone": "08123938338",
          "userStatus": 0
        },
      
      ]

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });


  it('GET User by username', function(){
    cy.request({
      method : 'GET',
      url: `/user/${env.username}`,

    }).then(function(response){
      expect(response.status).to.eq(200);

    }); 
  });



  it('Update user by username', function(){
    cy.request({
      method : 'GET',
      url: `/user/${env.username}`,
      body: 
        
          {
            "id": env.userID,
            "username": env.username,
            "firstName": "denyy",
            "lastName": "pra",
            "email": "deni@gmail.com",
            "password": env.password,
            "phone": "08123938338",
            "userStatus": 0
          }
  
    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });  


  it('GET User by username after update', function(){
    cy.request({
      method : 'GET',
      url: `/user/${env.username}`,

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

  it('Login with account user', function(){
    cy.request({
      method : 'GET',
      url: `/user/login?username=${env.username}&password=${env.password}`,

    }).then(function(response){
      expect(response.status).to.eq(200);

    }); 
  });

  it('Logout', function(){
    cy.request({
      method : 'GET',
      url: `/user/logout`,

    }).then(function(response){
      expect(response.status).to.eq(200);

    }); 
  });

  it('Delete user', function(){
    cy.request({
      method : 'DELETE',
      url: `/user/${env.username}`,

    }).then(function(response){
      expect(response.status).to.eq(200);
    }); 
  });

  it('GET User by username after delete', function(){
    cy.request({
      method : 'GET',
      url: `/user/${env.username}`,
      failOnStatusCode: false

    }).then(function(response){
      expect(response.status).to.eq(404);
    }); 
  });








});

