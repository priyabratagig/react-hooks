// Custom hooks are normal javascript fucntion
// Name start with 'use'
// For convention and linters rely on the word to apply rules of hooks
// can use other jhooks
// Simpler alternative of HOC, Render-props 
import { useEffect, useState } from "react";
export default function useDocumentTitle(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count]);
    return [count, setCount]
}