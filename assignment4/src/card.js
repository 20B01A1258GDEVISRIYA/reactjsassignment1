import faker from 'faker';
function Card(props) {
    return (
        <div className="card">
            <div className="content">
                <img className="right floated mini ui image" src={faker.image.image()} />
                <div className="header">
                    Elliot Fu
                </div>
                <div className="meta">
                    Friends of Veronika
                </div>
                <div className="description">
                    Elliot requested permission to view your contact details
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
            )
}
export default Card;