export default function Contact(props)
{
    return(
        //props holds all of our stuff, what we gave in index.js, now j 221 type shiiiiiiiiii
        <div className="contact-card">
            <img src="./cat.webp"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// destructured example below

// export default function Contact({img, name, phone, email}) {
//     return (
//         <div className="contact-card">
//             <img src={img}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }