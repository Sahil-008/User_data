import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Users</h1>
            <input
                placeholder="Search user"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => setSearch("")}>
                Clear
            </button>

            {filteredUsers.length === 0 ? (
                <h2>No users found</h2>
            ) : (
                filteredUsers.map(user => (
                    <div key={user.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address.city}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Users;