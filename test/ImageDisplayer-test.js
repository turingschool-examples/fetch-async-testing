import mocha from 'mocha';
import chai, { expect } from 'chai';
// expect = chai.expect;
import spies from 'chai-spies';
import ImageDisplayer from '../src/ImageDisplayer';

chai.use(spies);

describe('ImageDisplayer', () => {
  let imageDisplayer;
  before(() => {
    imageDisplayer = new ImageDisplayer("https://api.nasa.gov/planetary/apod");
    global.fetch = () => new Promise((resolve, reject) => {resolve({}), reject("Error")});
  })

  it('should return true', () => {
    expect(true).to.equal(true);
  })

  it('should return an ImageDisplayer', () => {
    expect(imageDisplayer).to.be.an.instanceof(ImageDisplayer);
  })

  it('should take a root', () => {
    expect(imageDisplayer.root).to.equal("https://api.nasa.gov/planetary/apod");
  })

  it('should convert a query objects to a query string', () => {
    const queryString = imageDisplayer.convertQueryToString({hello: "world", type: "test"})
    expect(queryString).to.equal("?hello=world&type=test");
  })

  // it('should get today\'s space picture by default', () => {
  //   const picOfToday = imageDisplayer.getPicture();
  //   expect(picOfToday).to.exist;
  // })
  it('should get today\'s space picture by default', () => {
    const picOfToday = imageDisplayer.getPicture();
    chai.spy.on(fetch);
  })
})
