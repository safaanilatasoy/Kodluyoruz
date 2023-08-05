import PropTypes from 'prop-types'


function User({name, surname, isLoggedIn, age,friends,adresss}){

  if(!isLoggedIn){
    return <div>Giriş Yapmadınız</div>;
  }
    return (
      <>
        <h1>
          { `Hoşgeldin ${name} ${surname} (${age})`}
        </h1>

        {address.title} {address.zip}
        <br />

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
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number
  }),
};

User.defaultProps = {
  name: 'isimsiz',
  isLoggedIn: false
}

export default User;
