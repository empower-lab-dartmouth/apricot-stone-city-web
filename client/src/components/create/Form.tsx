/* eslint-disable require-jsdoc */
import React from 'react';
// import {useState} from 'react';
// import {db} from '../firebase/firebase-config';
// import {collection, addDoc} from 'firebase/firestore';
// import './form.css';
// import Nav from '../nav/NavBar';
// import {StoryScene} from '../../state/recoil';

export default function Form() {
  return (<></>);
  // const [event, setEvent] = useState<StoryScene>({title: '',
  //   summary: '', id: '',
  //   eventType: '', parent: null, image: '', creator: ''});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
  //   React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const value = e.target.value;
  //   setEvent({
  //     ...event,
  //     [e.target.name]: value,
  //   });
  // };

  // const handleSubmit = async () => {
  //   // do firebase stuff to write
  //   console.log('submitting');
  //   try {
  //     const docRef = await addDoc(collection(db, 'StoryEvents'), event);
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };

  // return (
  //   <div className="container">
  //     <Nav />
  //     <div className="form">
  //       <h1>Create Story Event</h1>
  //       <label>
  //                   Username:
  //         <input type="text" name="creator" onChange={handleChange}/>
  //       </label>

  //       <label>
  //                   Title:
  //         <input type="text" name="title" onChange={handleChange}/>
  //       </label>

  //       <label>
  //         <div>Description:</div>

  //         <textarea name="description" onChange={handleChange}/>
  //       </label>

  //       <label>
  //                   Event Type:
  //         <input type="text" name="eventType" onChange={handleChange}/>
  //       </label>

  //       <label>
  //                   Image URL:
  //         <input type="text" name="image" onChange={handleChange}/>
  //       </label>

  //       <button type="submit" onClick={handleSubmit}>Submit</button>
  //     </div>
  //   </div>
  // );
}
