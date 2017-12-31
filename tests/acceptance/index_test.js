const request = require('supertest'),
      should = require('should'),
      app = require('../../app');

describe('Index', function () {
    it('Should return status - 200 and a success object', (done) => {
        request(app).get('/api/1.0/')
            .expect(200)
            .end((err, res) => {
                res.body.status.should.equal('success');
                res.body.data.should.equal(true);
                done();
            });
    });
});