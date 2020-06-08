import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { GIT_COMMIT } from '../../common/constants';
import { themeDimensions } from '../../themes/commons';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    height: ${themeDimensions.footerHeight};
    justify-content: center;
    padding: 0 ${themeDimensions.horizontalPadding} ${themeDimensions.verticalPadding};
`;

const zeroXSVG = () => {
    return (
        <svg
            width="60"
            height="30"
            viewBox="0 0 100 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-AykKD cHygpz"
        >
            <path
                d="M8.402 25.28l3.105-3.212-3.86-5.209-4.915-6.954A19.904 19.904 0 0 0 0 20c0 6.1 2.732 11.562 7.04 15.23l6.239-4.408a12.796 12.796 0 0 1-4.877-5.541zM14.72 8.402l3.212 3.105 5.209-3.86 6.954-4.915A19.904 19.904 0 0 0 20 0C13.9 0 8.438 2.732 4.77 7.04l4.408 6.239a12.795 12.795 0 0 1 5.541-4.877zm13.773 9.53l3.86 5.209 4.915 6.954A19.904 19.904 0 0 0 40 20c0-6.1-2.732-11.562-7.04-15.23l-6.24 4.408a12.796 12.796 0 0 1 4.877 5.541l-3.105 3.213zM35.23 32.96l-4.408-6.239a12.795 12.795 0 0 1-5.541 4.877l-3.213-3.105-5.209 3.86-6.954 4.915A19.904 19.904 0 0 0 20 40c6.1 0 11.562-2.732 15.23-7.04z"
                fill="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.726 19.689c0-6.471 2.704-9.689 6.912-9.689 4.19 0 6.947 3.27 6.947 9.689 0 6.418-2.758 9.671-6.947 9.671-4.19 0-6.912-3.253-6.912-9.671zm6.894-7.59c-3.04 0-4.543 2.815-4.543 7.607 0 2.256.336 4.005.972 5.282l5.975-12.085c-.69-.542-1.485-.804-2.404-.804zm-2.351 14.428c.672.507 1.45.77 2.369.77 3.04 0 4.578-2.834 4.578-7.59 0-2.204-.318-3.936-.972-5.247l-5.975 12.067zm24.377-10.93l-3.853 6.47L81 29.027h-2.581l-3.377-5.63h-.954l-3.447 5.63h-2.51l4.224-6.872-3.8-6.559h2.44l3.11 5.334h.973l3.182-5.334h2.386z"
                fill="#fff"
            />
        </svg>
    );
};

const coinGeckoSVG = () => {
    return <img alt="coingecko" src="/assets/coingecko.png" width="100" />;
};

const denfiSVG = () => {
    return <img alt="denfi" src="/assets/defi_ventures.png" width="25" />;
};

export const Footer: React.FC<Props> = props => {
    return (
        <FooterWrapper title={GIT_COMMIT} {...props}>
            <span style={{ color: '#fff', marginRight: 5 }}>Powered by</span>
            <a
                href="https://tokenizer.cc/"
                style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {denfiSVG()} <span style={{ fontSize: 14, marginRight: 15 }}>DefiVentures</span>
            </a>
            <a href="https://0x.org/" target="_blank" rel="noopener noreferrer">
                {zeroXSVG()}
            </a>
            <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
                {coinGeckoSVG()}
            </a>
        </FooterWrapper>
    );
};
