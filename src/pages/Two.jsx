import React, { useState, useEffect } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";

const Two = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const loadUsers = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?seed=dexi-interview&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setUsers(() => [...data.results]);
          setLoading(false);
          setPage(page + 1);
        } else {
          setUsers((prevUsers) => [...prevUsers, ...data.results]);
          setLoading(false);
          setPage(page + 1);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openEditPopup = (user) => {
    setEditingUser({ ...user });
  };

  const confirmEdit = () => {
    setUsers((prevUsers) => {
      const index = prevUsers.findIndex((u) => u.email === editingUser.email);
      if (index !== -1) {
        const updatedUsers = [...prevUsers];
        updatedUsers[index] = { ...editingUser };
        return updatedUsers;
      }
      return prevUsers;
    });
    setEditingUser(null);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline my-3">
        Note: Email is a unique value(Will not update it)
      </h1>
      <div className="flex items-center justify-center my-5">
        <div class="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-blue-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Edit</th>
              </tr>
            </thead>
            <tbody class="text-blue-gray-900">
              {users.map((user) => (
                <tr key={user.email} className="border-b border-blue-gray-200">
                  <td className="py-3 px-4">{`${user.name.first} ${user.name.last}`}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.phone}</td>
                  <td>
                    <button
                      class="font-medium text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        openEditPopup(user);
                        setOpenModal(true);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!loading && users.length === 0 && <div>No users available.</div>}
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Edit Item On Locale State</Modal.Header>
          <Modal.Body>
            {editingUser && (
              <div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name" />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder="name@company.com"
                    value={editingUser.name.first}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        name: { ...editingUser.name, first: e.target.value },
                      })
                    }
                    required
                  />
                </div>{" "}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name" />
                  </div>
                  <TextInput
                    id="lastName"
                    placeholder="name@company.com"
                    value={editingUser.name.last}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        name: { ...editingUser.name, last: e.target.value },
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone Number" />
                  </div>
                  <TextInput
                    id="phone"
                    value={editingUser.phone}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                confirmEdit();
                setOpenModal(false);
              }}
            >
              Edit
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className=" flex items-center justify-center">
        <button
          class={
            loading || page > 5
              ? "bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          }
          onClick={loadUsers}
          disabled={loading || page > 5}
        >
          {loading ? "Loading..." : "Load More"}
        </button>{" "}
      </div>
    </>
  );
};

export default Two;
