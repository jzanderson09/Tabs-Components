
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', this.select.bind(this));
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(element => element.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

//5th Link:
const fifthLink = document.createElement('div');
fifthLink.className = 'tabs-link';
fifthLink.dataset.tab = '5';
fifthLink.textContent = 'Tab 5';

//6th Link:
const sixthLink = document.createElement('div');
sixthLink.className = 'tabs-link';
sixthLink.dataset.tab = '6';
sixthLink.textContent = 'Tab 6';

const tabLinks = document.querySelector('.tabs-links');
tabLinks.appendChild(fifthLink);
tabLinks.appendChild(sixthLink);

//5th Item:
const fifthItem = document.createElement('div');
fifthItem.className = 'tabs-item';
fifthItem.dataset.tab = '5';

const fifthItemTitle = document.createElement('div');
fifthItemTitle.className = 'tabs-item-title';
fifthItemTitle.textContent = 'Quote 5';

const fifthItemDescription = document.createElement('div');
fifthItemDescription.textContent = 'Those who dare to fail miserably can achieve greatly.';

fifthItem.appendChild(fifthItemTitle);
fifthItem.appendChild(fifthItemDescription);

//6th Item:
const sixthItem = document.createElement('div');
sixthItem.className = 'tabs-item';
sixthItem.dataset.tab = '6';

const sixthItemTitle = document.createElement('div');
sixthItemTitle.className = 'tabs-item-title';
sixthItemTitle.textContent = 'Quote 6';

const sixthItemDescription = document.createElement('div');
sixthItemDescription.textContent = 'It is hard to fail, but it is worse never to have tried to succeed.';

sixthItem.appendChild(sixthItemTitle);
sixthItem.appendChild(sixthItemDescription);


const tabs = document.querySelector('.tabs-items');

tabs.appendChild(fifthItem);
tabs.appendChild(sixthItem);

const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));

 
