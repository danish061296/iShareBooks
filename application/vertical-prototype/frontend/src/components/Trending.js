import React from 'react';
import './Trending.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import Image from './book1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Trending = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 5 },
  ];
  return (
    <div className="trending__container" data-aos="fade-right">
      <div className="trending__title">
        <h1 className="trending">Now Trending!!!</h1>
      </div>
      <Carousel breakPoints={breakPoints}>
        <Card number="1" image={Image} />
        <Card number="2" image={Image} />
        <Card number="3" image={Image} />
        <Card number="4" image={Image} />
        <Card number="5" image={Image} />
        <Card number="6" image={Image} />
        <Card number="7" image={Image} />
        <Card number="8" image={Image} />
      </Carousel>
    </div>
  );
};

export default Trending;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 180,
//     minWidth: 100,
//     height: 250,
//     width: 150,
//     margin: 30,
//     cursor: 'pointer',
//     '&:hover': {
//       transformY: 20,
//     },
//   },
//   media: {
//     height: 100,
//     padding: '100%',
//   },
// }));

// const Faq = () => {
//   const classes = useStyles();

//   return (
//     <div className="faq">
//       <div className="trending__title">
//         <h1 className="trending">Now Trending!!!</h1>
//       </div>
//       <div className="cards">
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//         <Card className={classes.root}>
//           <CardMedia
//             className={classes.media}
//             image={Book}
//             title="Paella dish"
//           />
//         </Card>
//       </div>
//     </div>
//   );
// };
