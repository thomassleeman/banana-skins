import { useCallback } from 'react';
import { AppProvider } from '../utils/context';
import { DragDropContext } from 'react-beautiful-dnd';
// import handleOnDragEnd from '../utils/handleOnDragEnd';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      {/* <DragDropContext
        onDragEnd={useCallback((result) =>
          handleOnDragEnd(result, dispatch, catsData, jobsData)
        )}
      > */}
      <Component {...pageProps} />
      {/* </DragDropContext> */}
    </AppProvider>
  );
}

export default MyApp;
