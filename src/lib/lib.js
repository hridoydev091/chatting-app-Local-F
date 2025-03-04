const _ ={};
_.signUpdata = ()=>{
    const singupiterm = [
        {
            id: 1,
            name:"email",
            required:true,
        },
        {
            id: 2,
            name:"fullname",
            required:true,
        },
        {
            id: 3,
            name:"password",
            required:true,
        },
];
return singupiterm;
};
export default _;