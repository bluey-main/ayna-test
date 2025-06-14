export const isProduction = (): boolean => {
    const productionHosts = ["aynadatasolutions.com"];
    return productionHosts.includes(window.location.hostname);
};
