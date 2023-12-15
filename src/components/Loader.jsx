import loadingSvg from '../assets/loading.svg';

// * loader component to show when data is loading
export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loadingSvg} alt="loading" className="w-10 h-10" />
    </div>
  );
}
