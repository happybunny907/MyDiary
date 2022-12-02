# Development

### Goal and Value of the Application
This website is for trader joe's customers to customize their thanksgiving meals with trader joe's holiday special offerings. There are 12 items in total, and customers can add the items they want to a shopping cart to estimate the overall costs. In addition, they can also sort and filter the items to help them find the desireable ones.

### Link to Deployed Website
https://happybunny907.github.io/cs1300-development/

### Usability Principles Considered
The website is organized with clear hierarchy under which there is a title for the website named "YOUR HOLIDAY TRADER JOE'S PICKS!", a side-bar, which provides sorting and filtering features, and, then, all the items resulted from sorting and filtering. I purposely chose the pink-red color scheme and the font to be consistent with the trader joe's own theme. After experimenting with the layout of the items, I found 3 items per row is the most appropriate and easy-to-read size. The website is fairly straightforward and has a similar layout as other shopping websites, so learnability and usability should not be a major issue.

### Organization of Components
The website is composed of a header, a side-bar with filters and sorts, a reset button, and a main grid which presents 12 items. Each item has 
information including name, price, customer reviews, type labels, dietary-restriction labels, and a short desription. The website is rendered in index.js as a parent which passes props to SortGroup.js and FilterGroup.js, and Item.js. 

index.js has five state variables that is used to keep track of items, filters, filtereditems, favorites, and items that are added to the cart. In index.js, it passes a sortItem function into SortGroup as a prop, and it has a state, "value", that keep tracks of which sort label and its corresponding radio button are active. It also passes item information, filters, and filterItem into FilterGroup.js as props to keep track of which filters are active. In addition, the reset button requires a isCheck boolean to help uncheck filter once the user presses reset. 

### Future Potential Improvements
Currently, "reset filters" button will break the code if there are already items added to the cart. After discussing with the TAs, since this reset on aggregator functionality is not required for this assignment, it has not bee fixed.
