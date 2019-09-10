import mocha from 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import ImageDisplayer from '../src/ImageDisplayer';

chai.use(spies);

describe('ImageDisplayer', () => {
  let imageDisplayer;

  before(() => {
    imageDisplayer = new ImageDisplayer("https://api.nasa.gov/planetary/apod");
    global.fetch = () => {};
  });

  it('should return true', () => {
    expect(true).to.equal(true);
  });

  it('should return an ImageDisplayer', () => {
    expect(imageDisplayer).to.be.an.instanceof(ImageDisplayer);
  });

  it('should take a root', () => {
    expect(imageDisplayer.root).to.equal("https://api.nasa.gov/planetary/apod");
  });

  it('should get a response to a request when created', () => {
    chai.spy.on(global, "fetch")
    imageDisplayer.getPicture(imageDisplayer.root);
    expect(global.fetch).to.be.called();
  });
});
