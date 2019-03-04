export default async () => {
    const data = await import(/* webpackChunkName: 'Exchange' */ '../components/exchange');
    return data.default;
};