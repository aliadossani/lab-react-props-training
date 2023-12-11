const Random = (props) => {
    const min = props.min;
    const max = props.max;
    const randomNum = Math.ceil(Math.random() * (max - min) + min);
    return (
        <p>Random Value between {min} and {max} is {randomNum}</p>
    );
}
export default Random;