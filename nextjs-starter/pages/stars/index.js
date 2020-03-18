// import React from 'react';
// import fetch from 'isomorphic-unfetch';

// import Stars from '../../components/Stars/Stars';
// import Page from '../../components/Page';

// export default function StarsPage() {
//   return <Page Component={Stars} />;
// }

// Stars.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js');
//   const json = await res.json();
//   console.log('ssssss', json);
//   return { stars: json.stargazers_count };
// };
