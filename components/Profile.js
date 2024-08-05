export default function Profile({ user }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  )
}
