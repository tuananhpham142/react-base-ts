import { FC, Fragment } from 'react';

interface IProps {}

const HomePage: FC<IProps> = (props) => {
    //getAccessToken(process.env.AUTH_KEY as string, decryptAES);
    return (
        <Fragment>
            <h1>HomePage</h1>
        </Fragment>
    );
};
export default HomePage;
