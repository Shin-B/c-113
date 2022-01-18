function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position (100, 250);
    video = createCapture (VIDEO);
    video.hide ();
    
    tint_color = "";
}

function draw() {
    Image (video, 0, 0, 640, 480);
}

function take_snapshot() {
    SVGAElement('snapshot.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;

}