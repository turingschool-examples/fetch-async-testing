class ImageDisplayer {
  constructor(root) {
    this.root = root;
    this.response;
  }

  getPicture() {
    // const queryString = this.convertQueryToString(queryInfo);
    // let url = this.root + queryString;

    return fetch(this.root)
      // .then(data => data.json())
      // .then(data => this.response = data)
      // .catch(err => console.log(err));
  }

  // convertQueryToString(queryInfo) {
  //   if(queryInfo) {
  //     let queries = Object.keys(queryInfo);
  //     return queries.reduce((acc, key, i) => {
  //       let and = (i < queries.length - 1) ? "&" : "";
  //       acc += `${key}=${queryInfo[key]}${and}`;
  //       return acc;
  //     }, "?")
  //   }
  //   return "";
  // }


};

export default ImageDisplayer;
