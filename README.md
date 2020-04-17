# Full CRUD Yard Sale Application

We will be building a fullstack MERN (*M*ongo,*E*xpress,*R*eact,*N*ode) application for managing items for a yard sell.

Our item model needs to include the following properties:
- Item name (itemName) - Short item title
- Item description (itemDesc) - Details of item such as it's condition
- Item price (itemPrice)

Frontend React Application:
- Should allow users to:
  - List all items (only show item name and price)
  - Add a new Listing
  - Update an existing listing 
  - Delete a listing once sold
- Display should allow user to:
  - Click an item and see all of it's details
  - A button that allows them edit an item
  - A button that allows them to delete an item from the list

### Challenges:
- Use an icon/image for each operation
- Add an Item sold status property (itemSoldStatus) - Boolean indicating if item sold or not
- A button or checkbox that let's the user mark the item sold/unavailable 
  - When clicked, add a strikethrough of item name on display after updating in database

