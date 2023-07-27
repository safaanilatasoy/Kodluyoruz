function User({name, surname, isLoggedIn}){
    return (
      <h1>
        {isLoggedIn
          ? `Hoşgeldin ${name} ${surname}`
          : "Lütfen giriş yapın"}
      </h1>
    );
}

export default User;