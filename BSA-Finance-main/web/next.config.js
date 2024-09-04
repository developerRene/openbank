/** @type {import('next').NextConfig} */
const { networkInterfaces } = require('os');

const nextConfig = async (phase, { defaultConfig }) => {
    //console.log(`Local IP: ${networkInterfaces().enp3s0[0].address}`);
    return {};
};

module.exports = nextConfig;
