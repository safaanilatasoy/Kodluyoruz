import PropTypes from 'prop-types'


function User({name, surname, isLoggedIn, age,friends}){
    return (
      <>
        <h1>
          {isLoggedIn
            ? `Hoşgeldin ${name} ${surname} (${age})`
            : "Lütfen giriş yapın"}
        </h1>

        <h2>Arkadaş Listesi</h2>
        {
           friends.map((friend) => (
           <div key={friend.id}>
             {friend.name}
            </div>
            ))}
      </>
    );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  friends: PropTypes.array,
};

export default User;
