import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="136" cy="125" r="125" /> 
    <rect x="-4" y="272" rx="10" ry="10" width="280" height="20" /> 
    <rect x="-7" y="313" rx="10" ry="10" width="280" height="88" /> 
    <rect x="-4" y="417" rx="10" ry="10" width="103" height="34" /> 
    <rect x="117" y="416" rx="20" ry="20" width="155" height="42" />
  </ContentLoader>
);