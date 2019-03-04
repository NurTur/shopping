export default async () => {
    const data = await import(/* webpackChunkName: 'LoginPage' */ '../components/loginPage');
    return data.default;
};