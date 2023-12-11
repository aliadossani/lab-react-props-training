const BoxColor = (props) => {
    const r = props.r;
    const g = props.g;
    const b = props.b;

    const hexCode = (color) => {
        const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
        const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;

        return hex;
    }
    return (
        <div style={{
            width: 500,
            height: 80,
            backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`,
            margin: 10,
            border: "solid 2px black",
            textAlign: 'center'
        }}>
            <p>rgb({r},{g},{b})</p>
            <p>{hexCode(`rgba(${r},${g},${b},1)`)}</p>

        </div>
    )
}
export default BoxColor;