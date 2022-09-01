## Data Structure

**_Views that will be needed:_**

### Signup

Username req
email req
password req
business or personal req //
Photo

### Login

Username
password

### Project

Kanban board showing all columns containing all jobs

Top of each column is a sub total for costs

Top of screen menu area:
Total of all costs.
Link to account information.

### Category

ie each column.
Name - required
Subtotal

### Job

PARENT REFERENCING TO CATEGORY

Name - required,
Description,
Cost,
Attachment (photos)
Subject to
Quotes [Supplier, Price (gross), Notes]

BTNs:
Add quote --> Add quote view
Subject to (Some jobs require another job to be completed before they can be done.)

### quote

EMBED WITHIN JOBS

Supplier name - required
Tel
email
address
Price
(VAT and Total for business use. For personal use these should not be shown and total price would be under price.)
Attachment (Quotes) Research how to process attachments. Looks like a package called Multer is used.

Categories:

{
"status": "success",
"results": 4,
"data": {
"data": [
{
"_id": "6304ccb8da5bf6fc009125fd",
"index": 0,
"title": "Category 1",
"__v": 0
},
{
"_id": "6304ccd5da5bf6fc00912600",
"index": 1,
"title": "Category 2",
"__v": 0
},
{
"_id": "6304cce2da5bf6fc00912602",
"index": 2,
"title": "Category 3",
"__v": 0
},
{
"_id": "6304ccffda5bf6fc00912604",
"index": 3,
"title": "Category 4",
"__v": 0
}
]
}
}

Jobs:

{
"status": "success",
"results": 5,
"data": {
"data": [
{
"\_id": "62c30e584c377acce2c26c89",
"title": "Do this Job first",
"description": null,
"cost": 600,
"images": "http://dummyimage.com/232x213.png/cc0000/ffffff",
"quotes": [
{
"supplierName": "Big Supplier co",
"tel": 2077885566,
"email": "test@test.com",
"address": "1 test rd, testville tes 1t1",
"price": 600,
"attachments": null,
"_id": "62c30e584c377acce2c26c8a"
},
{
"supplierName": "Other Big Supplier co",
"tel": 2077885577,
"email": "test@otherbig.com",
"address": "2 test rd, testville tes 1t1",
"price": 650,
"attachments": null,
"_id": "62c30e584c377acce2c26c8b"
}
],
"category": {
"\_id": "6304ccb8da5bf6fc009125fd",
"index": 0,
"title": "Category 1",
"**v": 0
},
"**v": 0
},
{
"\_id": "62c30e584c377acce2c26c8c",
"title": "Do this job after",
"description": null,
"cost": 5143.1,
"images": "http://dummyimage.com/198x242.png/5fa2dd/ffffff",
"quotes": [
{
"supplierName": "Little Supplier co",
"tel": 7906534828,
"email": "test@test.com",
"address": "1 test rd, testville tes 1t1",
"price": 4589,
"attachments": null,
"_id": "62c30e584c377acce2c26c8d"
}
],
"category": {
"\_id": "6304ccb8da5bf6fc009125fd",
"index": 0,
"title": "Category 1",
"**v": 0
},
"**v": 0
},
{
"\_id": "62c30e584c377acce2c26c8e",
"title": "adipiscing elit proin risus praesent",
"description": null,
"cost": 493.78,
"images": "http://dummyimage.com/128x196.png/5fa2dd/ffffff",
"quotes": [
{
"supplierName": "Medium Supplier",
"tel": 2088453333,
"email": "info@mediumco.co",
"address": "2 medium st, mediumville, medium HA1 123",
"price": 493.78,
"attachments": null,
"_id": "62c30e584c377acce2c26c8f"
},
{
"supplierName": "Other Medium Supplier",
"tel": 2088454444,
"email": "hello@mediumco.co",
"address": "3 medium st, mediumville, medium HA1 123",
"price": 504.89,
"attachments": null,
"_id": "62c30e584c377acce2c26c90"
}
],
"category": {
"\_id": "6304ccd5da5bf6fc00912600",
"index": 1,
"title": "Category 2",
"**v": 0
},
"**v": 0
},
{
"\_id": "62c30e584c377acce2c26c93",
"title": "pellentesque at",
"description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
"cost": 4432.45,
"images": "http://dummyimage.com/151x154.png/cc0000/ffffff",
"quotes": [
{
"supplierName": "Medium Supplier",
"tel": 2088453333,
"email": "info@mediumco.co",
"address": "2 medium st, mediumville, medium HA1 123",
"price": 4432.45,
"attachments": null,
"_id": "62c30e584c377acce2c26c94"
}
],
"category": {
"\_id": "6304cce2da5bf6fc00912602",
"index": 2,
"title": "Category 3",
"**v": 0
},
"**v": 0
},
{
"\_id": "62c30e584c377acce2c26c91",
"title": "amet cursus id turpis integer aliquet",
"description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
"cost": 7201.31,
"images": "http://dummyimage.com/126x186.png/dddddd/000000",
"quotes": [
{
"supplierName": "Big Supplier co",
"tel": 2077885566,
"email": "test@test.com",
"address": "1 test rd, testville tes 1t1",
"price": 7000,
"attachments": null,
"_id": "62c30e584c377acce2c26c92"
}
],
"category": {
"\_id": "6304ccffda5bf6fc00912604",
"index": 3,
"title": "Category 4",
"**v": 0
},
"**v": 0
}
]
}
}

[
{
// "_id": { "$oid": "62c2dfaffc13ae4fc7000646" },
"catIndex": 0,
"title": "Category 1",
"description": "Aenean sit amet justo. Morbi ut odio.",
"subtotal": 0
},
{
// "_id": { "$oid": "62c2dfaffc13ae4fc7000647" },
"catIndex": 1,
"title": "Category 2",
"description": "Sit amet justo. Morbi ut.",
"subtotal": 0
},
{
// "_id": { "$oid": "62c2dfaffc13ae4fc7000648" },
"catIndex": 2,
"title": "Category 3",
"description": "Amet justo. Morbi.",
"subtotal": 0
},
{
// "_id": { "$oid": "62c2dfaffc13ae4fc7000649" },
"catIndex": 3,
"title": "Category 4",
"description": "Amet justo. Morbi.",
"subtotal": 0
}
]

[
{
"id": { "$oid": "62c2d606fc13ae50e2002a42" },
    "jobIndex": 0,
    "category": "62c2dfaffc13ae4fc7000646",
    "title": "Do this Job first",
    "description": null,
    "cost": 600,
    "images": "http://dummyimage.com/232x213.png/cc0000/ffffff",
    "subject_to": null,
    "quotes": [
      {
        "supplierName": "Big Supplier co",
        "tel": "02077885566",
        "email": "test@test.com",
        "address": "1 test rd, testville tes 1t1",
        "price": 600,
        "attachments": null
      },
      {
        "supplierName": "Other Big Supplier co",
        "tel": "02077885577",
        "email": "test@otherbig.com",
        "address": "2 test rd, testville tes 1t1",
        "price": 650,
        "attachments": null
      }
    ]
  },
  {
    "id": { "$oid": "62c2d606fc13ae50e2002a43" },
"jobIndex": 1,
"category": "62c2dfaffc13ae4fc7000646",
"title": "Do this job after",
"description": null,
"cost": 5143.1,
"images": "http://dummyimage.com/198x242.png/5fa2dd/ffffff",
"subject_to": "62c2d606fc13ae50e2002a42",
"quotes": [
{
"supplierName": "Little Supplier co",
"tel": "07906534828",
"email": "test@test.com",
"address": "1 test rd, testville tes 1t1",
"price": 4589.0,
"attachments": null
}
]
},
{
"id": { "$oid": "62c2d606fc13ae50e2002a44" },
    "jobIndex": 0,
    "category": "62c2dfaffc13ae4fc7000647",
    "title": "adipiscing elit proin risus praesent",
    "description": null,
    "cost": 493.78,
    "images": "http://dummyimage.com/128x196.png/5fa2dd/ffffff",
    "subject_to": null,
    "quotes": [
      {
        "supplierName": "Medium Supplier",
        "tel": "02088453333",
        "email": "info@mediumco.co",
        "address": "2 medium st, mediumville, medium HA1 123",
        "price": 493.78,
        "attachments": null
      },
      {
        "supplierName": "Other Medium Supplier",
        "tel": "02088454444",
        "email": "hello@mediumco.co",
        "address": "3 medium st, mediumville, medium HA1 123",
        "price": 504.89,
        "attachments": null
      }
    ]
  },
  {
    "id": { "$oid": "62c2d606fc13ae50e2002a45" },
"jobIndex": 1,
"category": "62c2dfaffc13ae4fc7000647",
"title": "amet cursus id turpis integer aliquet",
"description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
"cost": 7201.31,
"images": "http://dummyimage.com/126x186.png/dddddd/000000",
"subject_to": null,
"quotes": [
{
"supplierName": "Big Supplier co",
"tel": "02077885566",
"email": "test@test.com",
"address": "1 test rd, testville tes 1t1",
"price": 7000.0,
"attachments": null
}
]
},
{
"id": { "$oid": "62c2d606fc13ae50e2002a46" },
"jobIndex": 0,
"category": "62c2dfaffc13ae4fc7000648",
"title": "pellentesque at",
"description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
"cost": 4432.45,
"images": "http://dummyimage.com/151x154.png/cc0000/ffffff",
"subject_to": null,
"quotes": [
{
"supplierName": "Medium Supplier",
"tel": "02088453333",
"email": "info@mediumco.co",
"address": "2 medium st, mediumville, medium HA1 123",
"price": 4432.45,
"attachments": null
}
]
}
]
