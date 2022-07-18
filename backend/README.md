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
