// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Retailers', () => {
  /*
   * Test the /GET route
  */
  describe('/GET retailers', () => {
    it('it should GET all retailers', (done) => {
      chai.request(app)
        .get('/retailers')
        .end((err,res) => {
          res.should.have.status(200);
        done();
        });
    });
  });
});
