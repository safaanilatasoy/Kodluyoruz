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

export default User;