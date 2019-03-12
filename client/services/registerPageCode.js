export default async () => {
    const data = await import(/* webpackChunkName: 'RegisterPage' */ '../components/registerPage');
    return data.default;
};