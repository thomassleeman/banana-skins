import { AppProvider } from '../utils/context';
import { DragDropContext } from 'react-beautiful-dnd';
import onDragEnd from '../utils/onDragEnd';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <DragDropContext onDragEnd={onDragEnd}>
        <Component {...pageProps} />
      </DragDropContext>
    </AppProvider>
  );
}

export default MyApp;
