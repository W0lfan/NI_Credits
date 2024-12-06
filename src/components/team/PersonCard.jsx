import PropTypes from 'prop-types';

export default function PersonCard({ person }) {
    return (
        <div className="person-card">
            <img src={person.img} alt="person" />
            <div className="person-name">
                {person.name}
            </div>
        </div>
    )
}

PersonCard.propTypes = {
    person: PropTypes.object.isRequired,
};