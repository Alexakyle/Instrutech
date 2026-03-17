import React from 'react';
import styled from 'styled-components';

const Card = () => {
  // Local images from public folder
  const images = [
    '/images/home/e1.jpg',
    '/images/home/e2.jpg',
    '/images/home/e3.avif',
    '/images/home/e4.avif',
    '/images/home/e5.avif',
    '/images/home/e6.webp',
    '/images/home/e7.webp',
    '/images/home/e8.webp',
    '/images/home/e9.webp',
    '/images/home/e10.webp',
  ];

  // Green-themed colors
  const colors = [
    '22, 101, 52',   // #166534 - Dark green
    '21, 128, 61',   // #15803D - Medium green
    '34, 197, 94',   // #22C55E - Light green
    '46, 125, 50',   // #2E7D32 - Forest green
    '76, 175, 80',   // #4CAF50 - Medium green
    '129, 199, 132', // #81C784 - Soft green
    '102, 187, 106', // #66BB6A - Light green
    '59, 94, 63',    // #3B5E3F - Dark green
    '42, 58, 46',    // #2A3A2E - Dark light
    '27, 94, 58',    // #1B5E3A - CTA green
  ];

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': 10 }}>
          {[...Array(10)].map((_, index) => (
            <div 
              key={index}
              className="card" 
              style={{ 
                '--index': index, 
                '--colorCard': colors[index % colors.length]
              }}
            >
              <div 
                className="img" 
                style={{ 
                  backgroundImage: `url(${images[index % images.length]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    min-height: 500px;
  }

  .inner {
    --w: 140px;
    --h: 180px;
    --translateZ: calc((var(--w) + var(--h)) + 60px);
    --rotateX: -12deg;
    --perspective: 1200px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }
  
  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(var(--colorCard), 0.7);
    border-radius: 15px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
    box-shadow: 0 8px 20px rgba(0, 40, 0, 0.3);
  }

  .img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease;
  }

  .card:hover .img {
    transform: scale(1.1);
  }
`;

export default Card;