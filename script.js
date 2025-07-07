document.addEventListener('DOMContentLoaded', () => {
    
    const factList = document.querySelector('#fun-facts ul');

    if (factList) {
        // Create a new list item for the extra fact, but keep it hidden initially
        const extraFactItem = document.createElement('li');
        extraFactItem.textContent = "My spirit animal is definitely a golden retriever!"; // Your bonus fun fact!
        extraFactItem.style.display = 'none'; // This hides it from view
        factList.appendChild(extraFactItem); // Add it to the list on the page

        // Create the button that will toggle the extra fact
        const revealButton = document.createElement('button');
        revealButton.textContent = "Another fun fact";

        revealButton.style.backgroundColor = '#4682B4';
        revealButton.style.color = 'white';
        revealButton.style.padding = '10px 20px';
        revealButton.style.border = 'none';
        revealButton.style.borderRadius = '5px';
        revealButton.style.cursor = 'pointer';
        revealButton.style.marginTop = '20px';
        revealButton.style.fontSize = '1em';
        revealButton.style.display = 'block';
        revealButton.style.marginLeft = 'auto';
        revealButton.style.marginRight = 'auto';

        // Add the button to the 'fun-facts' section, right after the list
        document.getElementById('fun-facts').appendChild(revealButton);

        // Set up what happens when the button is clicked
        revealButton.addEventListener('click', () => {
        
            if (extraFactItem.style.display === 'none') {
                extraFactItem.style.display = 'block';
                revealButton.textContent = "Hide extra fact";
            } else {
                extraFactItem.style.display = 'none';
                revealButton.textContent = "Tell me another fun fact!";
            }
        });
    }
});