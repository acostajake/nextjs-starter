// const Carousel = data => {
//   const [newData, setNewData] = useState({});

//   useEffect(() => {
//     setNewData({ newData: data });
//   }, [data]);
//   console.log(newData);
//   return (
//     <CarouselProvider
//       naturalSlideWidth={100}
//       naturalSlideHeight={125}
//       totalSlides={newData.data && newData.data.length || 0}
//     >
//         <Slider>
//         {newData &&
//         newData.data ?
//         newData.data.map(show => (
//           <li >
//             <Slide key={show.show.id} index={show.show.id} href="/p/[id]" as={`/p/${show.show.id}`}>
//               <a>{show.show.name}</a>
//             </Slide>
//           </li>
//         )) : null}
//           {/* <Slide index={0}>I am the first Slide.</Slide>
//           <Slide index={1}>I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide> */}
//         </Slider>
//     </CarouselProvider>
//   );
// };

// export default Carousel;
