import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";


// context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

    // Set item to be updated
    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit: true
      })
    }

    // Update the item
    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this, we're passing "feedback" as the current value.
    return <FeedbackContext.Provider value={{
        feedback, 
        deleteFeedback, 
        addFeedback, 
        editFeedback, 
        feedbackEdit, updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext