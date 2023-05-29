function likeOrDislike(buttons) {
    if (buttons.length < 1 || (buttons.length == 2 && buttons[0] == buttons[1])){
      return 'Nothing';
    }
    
    if (buttons.length == 1){
      return buttons[0];
    }
    
    return 'yyyy'
  }

  const arr = ['Dislike', 'Dislike'];

  console.log(likeOrDislike(arr));



  console.log(arr.length == 2 && arr[0] == arr[1])
