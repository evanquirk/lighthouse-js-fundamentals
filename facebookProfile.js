/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
const facebookProfile = {
  //Object 'facebookProfile' with name, friends, and messages.
  name: 'Evan Quirk',
  friends: 500,
  messages: ['Hello World', 'I am heading off to school.', 'What a beautiful day in Vancouver!'],
  //add a postMessage function to push message to string.
  postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    //add deleteMessage to remove message from index. second arguement for how many messages to delete from string.
    deleteMessage: function(index){
      facebookProfile.messages.splice(index, 1);
    },// add addFruebd to increase friend count by 1
    addFriend: function(){
      facebookProfile.friends = facebookProfile.friends + 1;
    }, //add removeFriend to decrease friend count by 1 until 0.
    removeFriend: function(){
      if(facebookProfile.friends > 0)
        facebookProfile.friends = facebookProfile.friends - 1;
    }
};
