const Greetings = (props) => {
    let helloVariable;
    const lang = props.lang;
    console.log(lang);
    switch (lang) {
        case "de":
            helloVariable = "Hallo";
            break;
        case "en":
            helloVariable = "Hello";
            break;
        case "fr":
            helloVariable = "Bonjour";
            break;

    }
    return (
        <p>{helloVariable} {props.children}</p>
    )

}

export default Greetings;