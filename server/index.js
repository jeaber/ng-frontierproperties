require('dotenv').config();

var express = require('express'),
  app = express(),
  path = require('path'),
  server = require('http').createServer(app),
  io = require('socket.io')(server),
  mailgun = require('./mailgun.js'),
  compress = require('compression');

// CONFIG SERVER
var config = {
  build_dir: '/root/frontierpropertiesmn.com:3666/build',

  //production needes uniquie port
  // Dev server port
  port: 3666
};

io.on('connection', function (socket) {
  socket.on('contactForm', function (formData) {
    // setup e-mail data with unicode symbols
    mailgun.nodemailerMailgun.sendMail({
      from: formData.name + ' <notifications@setheastwood.com>', // sender address
      to: 'eastwoodjosh@gmail.com', // An array if you have multiple recipients.
      subject: 'frontierpropertiesmn.com inquiry > '+ formData.date, // Subject line
      'h:Reply-To': formData.email,
      //You can use "html:" to send HTML email content. It's magic!
      html: '<h3>Move in date: ' + formData.date + '</h3><p>' + formData.message + '</p><br>' + formData.name + ' @ <a href="mailto:' + formData.email + '">' + formData.email + '</a><br><p>'+formData.phone+'</p><br>' + '<div style="margin-top:2em;width:100%;height:1em;background-color:aliceblue;border-bottom:slategrey thick ridge;"></div><br><div style="background-image: url(http://subtlepatterns.com/patterns/tactile_noise.png);height:5em;text-align:center;width:100%;border:black thick ridge;border-radius:5px;"><a href="setheastwood.com" style="margin:0 auto;display:block;"><img src="http://i.imgur.com/Teew4r1.png" width="100"/></a></div>'
    }, function (err, info) {
      if (err) {
        console.log('Error: ' + err);
        socket.emit('resetForm', 'An error occurred and your message was not sent.');
      }
      else {
        console.log('Response: ' + info);
        socket.emit('resetForm', 'Your message was sent successfully. I will get back to you as soon as possible. Thanks!');
      }
    });
  });/*
  socket.on('refreshEventlist', function () {
    gCalendar.listEvents();
  });
  socket.on('getAvailability', function (date) {
    socket.emit('availability', gCalendar.checkDate(date));
  });*/
});

app.use(compress());
app.use(express.static(config.build_dir));

// FIRE IT UP

server.listen(config.port, function () {
  console.log("Express server listening on port %d", config.port);
});
