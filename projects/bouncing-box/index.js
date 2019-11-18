		(function(){
			'use strict'
			/* global jQuery */

			// jQuery stuff setup for you
			var box = jQuery('.box');
			var boardWidth = jQuery('.board').width();
			var boardHeight = jQuery('.window').height();
	
			// TODO 2 - Variable declarations 
			var position;
			var points;
			var speed;
			var direction;
			var positionY;
			var directionY;

			position = 0;
			positionY = 0;
			points = 0;
			speed = 3.3333333333333;
			direction = 1;
			directionY = 1;
			box.css('left', position);      // moves the box to the x-coordinate of <position> 
			box.text(points);               // changes the text of the box to display the value of <points
			box.css('top', positionY);
			
			function update() {
				position += speed * direction;    // increment position by speed on every update
				positionY += speed * directionY;
				 console.log("new position: " + position);
				 console.log("new positionY: " + positionY);

				if(position > 1207) {
					console.log("Right Wall Hit");
					direction = -1;
				console.log(direction);
				}

				if(position < 2) {
					console.log("Left Wall Hit");
					direction = 1;
				console.log(direction);
				}

				if(positionY < 2) {
					console.log("Top Wall Hit");
					directionY = 1;
				console.log(directionY)
				}

				if(positionY > 835) {
					console.log("Bottom Wall Hit");
					directionY = -1
				console.log(directionY)
				}
				
				box.css('left', position);
				box.css('top', positionY);
			};


			
			function handleBoxClick() {
				// TODO 4 / 5
				points += 1;           // increase the point total
				box.text(points);
				position = 0;
				positionY = 0;         // reset the position of the box to 0
				speed += 1;
			};


			//this executes the update function code every 50 milliseconds
			setInterval(update, 16.66);
			// this executes the handleBoxClick function code every time the box is clicked on
			box.on('click', handleBoxClick);
		})();