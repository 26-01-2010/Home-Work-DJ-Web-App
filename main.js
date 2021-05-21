song1 = "";
song2 = "";
function preload()
{
	song1 = loadSound("Believer.mp3");
    song2 = loadSound("Harry Potter Theme Song.mp3");
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(500, 160);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 400);
}