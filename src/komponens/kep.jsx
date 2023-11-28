export function Kep(props){
    function xddd(){
        console.log(props.adat.id);
        console.log(props.nagyKepCsere);
        props.nagyKepCsere(props.adat.id);
    }
    
    return (
        <div className='kep'>
            <img src={props.adat.src} alt={props.adat.alt} onClick={xddd}></img>
        </div>
    )
}