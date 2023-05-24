# A place to keep track of what's next

- Add button to get from popup in map view to adventure view
- Add button to add a story event from the current node in the popup view 
- Make sure that the create story event scene is working, i.e. can you add all the fields needed in the map view
- Change StoryEvent type from 'parent' to 'parents' with an array
- add a dropdown in the create story event scene to add multiple parents from available options (this list is the visited set of story events) use (https://mui.com/material-ui/react-select/#chip with placeholder for the currentSelectedNode title)
- Add a few story events to the database using the create story event view
- pull story events from firebase to populate map instead of using mock data, put this data into the recoil atom, initially pull only once. 
- Make "create new user" flow, on create also add new data to firebase to support anything that you need to pull later that is user specific (e.g. visitedStoryEvents)
- Add chips (https://mui.com/material-ui/react-chip/) to the map view popup to indicate 'visited' and also 'AI Concept', when applicable 
- Add a recoil atom to track which AI concepts you have covered, persist this data in firebase and pull on open. 
- Implement real time syncing with firebase, so that changes from one user will propogate to other users already logged in (e.g. adding an event). You can try following this tutorial for that https://blog.logrocket.com/how-to-use-react-hooks-firebase-firestore/


firebase tracks:
global collections:
- story events

per user collections:
- visted story events: Set(visited story event IDs)
- concepts mastered: Set(IDs of AI concepts mastered)
- chat history: Array<ChatHistoryEvent>, where ChatHistoryEvent =  timestamp + (chat | option | return to story event) <=== Note: Write your adventure page so that it dynamically loads based on ChatHistoryEvent