
  var images = [
    'FOTOS PRODUTOS/Unalome Editadas/IMG_0515.JPG',
    'FOTOS PRODUTOS/Unalome Editadas/IMG_0536.jpg',
    'FOTOS PRODUTOS/Unalome Editadas/IMG_0476.jpg',
    'FOTOS PRODUTOS/Unalome Editadas/IMG_0500.jpg',
    'FOTOS PRODUTOS/Unalome Editadas/IMG_0471.jpg'
  ];

  var num = 0;

  function btn(){
  var image = document.getElementById("image");
  num++;
  if ( num >= images.length ) {
    num = 0;
  }
  image.src = images[num];
}