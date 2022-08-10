Now that the SSR with RBDND issue is solved it is probably worth seeing if we can set strictMode to true again without it breaking.

**onDragEnd**
comes with an inbuilt result object.

This includes:
draggableId: ID of the draggable that has been moved
type: is the user defined 'type' attribute of the droppable area.
reason: not that important. Generally available for cancelled drops.
source: Location information about where the drag started.
destination: Location information about where the drag ended.
