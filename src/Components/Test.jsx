import React,{useState} from 'react'

const expensiveComputation = () => {
    let number = 50;
    let newNumber = (50 % 10) * 10 - number;
    return newNumber;
};

export default function Test() {
    
    const [calc, setCalc] = useState(expensiveComputation);

    const [userDetails, setUserDetails] = useState({
        userName: {
            firstName: 'John',
            lastName: 'Doe',
        },
        age: 20,
        hobby: 'Reading',
    });

    const changeName = () => {
        setUserDetails({
            age: 40,
            hobby: 'drinking',
            userName: {
                firstName:'Haji',
                lastName:'Irshad'
            },
        });
    };

    return (
        <>
        <div>
            <h1>
                Hello {userDetails.userName.firstName} {userDetails.userName.lastName},
            </h1>
            <p>
                {userDetails.age} || {userDetails.hobby}
            </p>
            <button onClick={changeName}>Change Name</button>
        </div>
        <div>
            <p>{calc}</p>
        </div>
        </>
    );
}
