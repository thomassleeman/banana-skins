Now that the SSR with RBDND issue is solved it is probably worth seeing if we can set strictMode to true again without it breaking.

**onDragEnd**
comes with an inbuilt result object.

This includes:
draggableId: ID of the draggable that has been moved
type: is the user defined 'type' attribute of the droppable area.
reason: not that important. Generally available for cancelled drops.
source: Location information about where the drag started.
destination: Location information about where the drag ended.

**Data Structure**
App uses Category data only

Backend holds category data and jobs data. Cats Data referenced jobs data.

TODO
~~Fix cancelled drop~~
~~Move jobs within category ~~
~~Move jobs between categories~~

- Add new Job
  Collect data from AddJobForm
  Update Jobs with new job
  Update Cats with new job
  Create new Job with ID from UUID https://www.npmjs.com/package/uuid
  Create new job in database which will create new MongoDB ID
  update relevant cat in database
  Update app data with new ID
- Update Job

- Add new Category
- Delete Job
- Delete Category
