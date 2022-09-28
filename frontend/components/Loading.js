import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <section>
      <div className="h-full flex items-center justify-center">
        <ReactLoading type="spin" color="#0c1453" />
      </div>
    </section>
  );
};

export default Loading;
