import $ from 'jquery';
import ImageDisplayer from "./ImageDisplayer";
import './style.css'

// $(document).ready;
$('#request-btn').on('click', getPicture);

function getPicture() {
  console.log("run");
  let image;
  let imageDisplayer = new ImageDisplayer($('#root-link').val());
  let promise = imageDisplayer.getPicture();
  console.log(promise)
  promise.then(data => data.json())
    .then(data => {
      console.log(data);
      image = data.hdurl;
      displayPicture(image);
    })
    .catch(err => console.log(err))
}

function displayPicture(img) {
  console.log('added?')
  $("main").append($('<img>', {src:img, alt:'image loaded from the provided api', class:"resize"}))
}
