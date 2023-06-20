import { useState } from "react";

function CheckoutForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const useData = {
      name,
      phone,
      email,
    };
    confirm(useData);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm}>
        <label>
          nombre
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          phone
          <input
            type="number"
            value={name}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label>
          email
          <input
            type="email"
            value={name}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default CheckoutForm;
