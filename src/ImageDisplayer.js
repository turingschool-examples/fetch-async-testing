class ImageDisplayer {
  constructor(root) {
    this.root = root;
  }

  getPicture(queryInfo) {
    const queryString = this.convertQueryToString(queryInfo);
    let url = this.root + queryString;

    fetch(url)
      .then(data => data.json)
      // .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  convertQueryToString(queryInfo) {
    if(queryInfo) {
      let queries = Object.keys(queryInfo);
      return queries.reduce((acc, key, i) => {
        let and = (i < queries.length - 1) ? "&" : "";
        acc += `${key}=${queryInfo[key]}${and}`;
        return acc;
      }, "?")
    }
    return "";
  }


};

export default ImageDisplayer;
