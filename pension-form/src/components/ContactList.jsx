export default function UserList({contacts}) {
    return (
      <div>
        {contacts.map((contact, i) => (
          <div className="card" key={i}>
            <p className="card-name">{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phonenumber}</p>
          </div>
        ))}
      </div>
    );
  }