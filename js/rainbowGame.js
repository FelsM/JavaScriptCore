var level;

do{
	 level = prompt('Choose level (e,m,h)');

	 switch(level){
		case'e':
			var tries = 7;
			var selectedColor = 'red';
			var answer;
			do{
				answer= prompt('clolor (red,orange,yellow,green,blue,darkblue,violet)')
				switch (answer) {
					case 'red':
						break;
					case 'orange':
					case 'yellow':
					case 'green':
					case 'blue':
					case 'darkblue':
					case 'violet':
						tries--;
						alert('Try again !' + tries + '  left');
						break;
					default:
						tries--;
						alert('color is incorrect choose from (red,orange,yellow,green,blue,darkblue,violet)');
						alert('Try again! ' + tries + '  left');
						break;
				}

			}while(answer != 'red' && tries !=0 )

			if(answer == selectedColor){
				alert('You win')
			}else{
				alert('You looser')
			}
			break;
		case'm':
			break;
		case'h':
			break;
		default:
			alert('Play or die!')

		}
}while(level != 'e' && level != 'm' && level != 'h')

