//globals.css
html,
body {
  /* padding: 0;
  margin: 0; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}



//_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    resetServerContext();
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

///////////////////////////////////////////
/////////HANDLE ON DRAG END////////////////
///////////////////////////////////////////
const handleOnDragEnd = useCallback((result) => {
  const { destination, source, draggableId, type } = result;
  console.log('result: ', result);

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  /* COLUMNS */
  if (type === 'column') {
    let newColumnOrder = [...catsData];

    //a) reorder columns based on drag
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, catsData[source.index]);

    //b) Update index of each category
    newColumnOrder = newColumnOrder.map((col) => {
      col.catIndex = newColumnOrder.indexOf(col);
      return col;
    });

    //c) Update state optimistically
    dispatch({ type: 'UPDATE_CATS', payload: newColumnOrder });

    //update database
    useUpdateDatabase('categories/reorder', newColumnOrder);
    return;
  }

  /* JOBS */
  if (type === 'job') {
    const start = source.droppableId;
    const finish = destination.droppableId;
    const sourceCat = catsData.find((cat) => cat._id === start);
    const destinationCat = catsData.find((cat) => cat._id === finish);
    const sourceCatIndex = catsData.indexOf(sourceCat);
    const destinationCatIndex = catsData.indexOf(destinationCat);

    const newSourceJobs = sourceCat.jobs;
    const newDestinationJobs = destinationCat.jobs;
    const movingJob = sourceCat.jobs[source.index];

    newSourceJobs.splice(source.index, 1);

    if (start === finish) {
      newSourceJobs.splice(destination.index, 0, movingJob);
    } else {
      newDestinationJobs.splice(destination.index, 0, movingJob);
    }

    const newSourceCat = {
      ...sourceCat,
      jobs: newSourceJobs,
    };

    const newDestinationCat = {
      ...destinationCat,
      jobs: newDestinationJobs,
    };

    //update catsData by replacing original with updated source column
    const newCatsData = [...catsData];
    newCatsData.splice(sourceCatIndex, 1, newSourceCat);
    newCatsData.splice(destinationCatIndex, 1, newDestinationCat);

    dispatch({ type: 'UPDATE_CATS', payload: newCatsData });
    useUpdateDatabase('categories/reorder', newCatsData);
    return;
  }
});

///////////////////////////////////////////
///////////////////////////////////////////
