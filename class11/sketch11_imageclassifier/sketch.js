// Initialize the imaImageClassifier method with the pre-trained SqueezeNet model.
const classifier = new ml5.ImageClassifier('SqueezeNet');

function onImageReady() {
  // Get the image element from the page
  let img = document.getElementById('image');
  // Get a prediction for that image
  classifier.predict(img, 10, gotResult);
}

// When we get the results
function gotResult(results) {
  // The results are in an array ordered by probability.
  document.getElementById('result').innerText = results[0].label;
  document.getElementById('probability').innerText = results[0].probability.toPrecision(2);
}
