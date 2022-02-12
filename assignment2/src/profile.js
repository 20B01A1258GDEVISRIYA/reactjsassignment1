function Profile() {
    return (
        <div>
            <table style={{"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid'}} align="left" className="one">
                <tr>
                    <td>
                        <h5 align="left">Elliot Fu</h5>
                        <h6 align="left">Friends of Veronika</h6>
                        <p>Elliot requested permission to view your <br />contact details</p>
                        <button style={{ borderColor: 'green' }}>approve</button>
                        <button style={{ borderColor: 'red' }}>decline</button>
                    </td>
                    <td>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWP4oMxtQdoKdCzARMFIG6QjLI-FY7HH4RFA&usqp=CAU" align="right" width={100} height={100} />
                    </td>
                </tr>
            </table >
            <table style={{"borderWidth":"1px", 'borderColor':"black", 'borderStyle':'solid'}} align="left" className="two">
                <tr>
                    <td>
                        <h5 align="left">Jenny Hess</h5>
                        <h6 align="left">New Member</h6>
                        <p>Jenny wants to add you to the group<br /><b>best friends</b></p>
                        <button style={{ borderColor: 'green' }}>approve</button>
                        <button style={{ borderColor: 'red' }}>decline</button>
                    </td>
                    <td>
                        <img src="https://img.favpng.com/7/4/12/computer-icons-person-png-favpng-RPvrt54MBpNpkNASTdMT3jsLG_t.jpg" align="right" width={100} height={100} />
                    </td>
                </tr>
            </table >
        </div>
    )
}
export default Profile;