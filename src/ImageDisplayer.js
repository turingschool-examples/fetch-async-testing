class ImageDisplayer {
  constructor(root) {
    this.root = root;
    this.response;
  }

  getPicture() {
    return fetch(this.root);
  }



};

export default ImageDisplayer;
