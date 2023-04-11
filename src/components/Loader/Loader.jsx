import { Grid } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';




const Loader = () => (
  <LoaderWrapper>
    <Grid
  height="70"
  width="70"
  color="#5e5e5d"
  ariaLabel="grid-loading"
  radius="8"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
    />
  </LoaderWrapper>
);

export default Loader;
