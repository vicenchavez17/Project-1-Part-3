import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SignInPage() {
  // State to track which form is visible
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  // States for sign in form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // States for create account form
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // When user submits the Create Account form
  const handleCreateAccount = (e) => {
    //e.preventDefault();

    // Copy new username/password to login fields
    setUsername(newUsername);
    setPassword(newPassword);

    // Clear creation form and switch back
    setNewName("");
    setNewEmail("");
    setNewUsername("");
    setNewPassword("");
    setIsCreatingAccount(false);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          {/* Sign In Form */}
          <div className="card shadow-sm p-4">
            <h3 className="mb-3 text-center">Sign In</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>

            <div className="text-center mt-3">
              <button
                className="btn btn-link"
                onClick={() => setIsCreatingAccount(true)}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>

        {/* Create Account Form (only shown when triggered) */}
        {isCreatingAccount && (
          <div className="col-md-5">
            <div className="card shadow-sm p-4">
              <h3 className="mb-3 text-center">Create Account</h3>
              <form onSubmit={handleCreateAccount}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Choose a username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsCreatingAccount(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
