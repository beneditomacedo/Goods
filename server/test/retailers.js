
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const mongoose = require('mongoose');
const Retailer = require('../models/Retailer');

chai.use(chaiHttp);

describe('Testing Retailers REST API', () => {

  // Before each test the database should be cleaned

  beforeEach((done) => {
    Retailer.remove({}, (err) => {
      done();
    });
  });

  /*
   * Test the /GET route
  */
  describe('/GET retailers', () => {
    it('it should not GET any retailers because the bd is empty', (done) => {
      chai.request(server)
        .get('/retailers')
        .end((err,res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
        done();
        });
    });
  });

  /*
   * Test the /POST route
  */
  describe('/POST retailers', () => {
    it('it should not POST without name field', (done) => {
      const retailer = {
        name: ""
      }
      chai.request(server)
        .post('/retailers')
        .send(retailer)
        .end((err,res) => {
          res.should.have.status(500);
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('name');
          res.body.errors.name.should.have.property('kind').eql('required');
        done();
        });
    });
  });

});
