var john_age= 20;

/// buraya yazi yazabiliyorum
//if (john_age<21)
//{
  ///  console.log("legally , john is not allowed to drink any alcohol , please pick any juice ")}
 // else 
 // {console.log("john is legally allowed to drink any Beer , cheers bro!!" ) };


  switch(john_age = 13) {
    case john_age<13:
     console.log(`Under age 13; “John is a boy”.`);
      break;
    case 13<john_age<20 :
        console.log(`Between age 13 and 20; “John is a teenager”. `);
      break;
      case 20<john_age<30 :
        console.log(`Between age  20 and 30; “John is a young man” . `);
      break;
    default:
        console.log(`Other cases “John is a man”. `);
  };

