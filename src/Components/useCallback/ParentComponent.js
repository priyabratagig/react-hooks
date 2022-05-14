import React, { useCallback, useState } from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'
//React.memo renders the component and memorizes the result and props
// Skips rerenders if previous and new props are equal
// when to use memo?
// 1. Pure function
// 2. Renders often
// 3. Re-render with same props
// 4. Medium to big size (contains decent amount of UI element)
// Always check refference equallity of props
function ParentComponent() {
    const [age, setAge] = useState(+ new Date().getFullYear() - 1998);
    const [salary, setSalary] = useState(age * 100000);
    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary]);
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);
    return (
        <div>
            <Title />
            <Count text='Age' value={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' value={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent