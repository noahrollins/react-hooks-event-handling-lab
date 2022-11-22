// Code EyesOnMe Component Here

function focused(event) {
    console.log('Good!')
} 

function blurred(event) {
    console.log('Hey! Eyes on me!')
} 


function EyesOnMe (){
    return (
        <div>
            <button onFocus={focused} onBlur={blurred}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe