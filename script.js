
let player = videojs('my-video', {
  playbackRates: [0.5, 1, 1.5, 2],
  controls: true,
  autoplay: false,
  preload: 'auto',
  fluid: false
});




player.ready(function() {
  console.log('Player is ready');
  player.volume(0.25);

  // Add  settings button
  let Button = videojs.getComponent('Button');
  let MyButton = videojs.extend(Button, {
    constructor: function() {
      Button.apply(this, arguments);
      this.controlText("My settings Button");
      this.addClass('vjs-icon-cog');
    },
    handleClick: function() {
      console.log('settings button clicked!');
    }
  });
  videojs.registerComponent('MyButton', MyButton);
  player.getChild('controlBar').addChild('MyButton', {});
});
