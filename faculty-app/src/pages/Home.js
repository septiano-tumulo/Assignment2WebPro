import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

function Home() {
  const {user, setUser} = useContext(UserContext);

  return(
    <div class="py-4 text-center"> {/* Untuk mengatur paddingnya dan text center seperti namanya yaitu meletakkan text ke tengah */}
      <h1>Home Page of useContext</h1>

      <p>Welcome <strong>{JSON.stringify(user, null, 2)}</strong>.</p>

    {/*fungsi button dan merubah warna pada buttun menjadi hitam/dark*/}
      {
        user === "Guest" ? <button class="btn btn-dark" onClick={async () => {
          const user = await login();
          setUser(user);
        }}>Login</button> : <button class="btn btn-dark" onClick={() => {setUser('Guest')}}>Logout</button>
      }
    </div>
  );
}

export default Home;
